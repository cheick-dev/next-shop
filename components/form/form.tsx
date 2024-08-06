"use client";
import React, { useRef, useState } from "react";
import Buttons from "./Buttons";
import CustomInput from "./CustomInput";
import FileInput from "./FileInput";
import * as z from "zod";
import { useUser } from "@clerk/nextjs";
import { deleteFile, uploadFiles } from "@/services/appwrite";
import { createProduct } from "@/services/productsService";
import { useRouter } from "next/navigation";
import Loader from "../Loader";
import Alert from "../Alert";
import Select from "./Select";

const schema = z.object({
	name: z.string().min(1, "Le nom du produit est requis"),
	price: z
		.string()
		.min(1, "Le prix est requis")
		.regex(/^\d+(\.\d{1,2})?$/, "Prix invalide"),
	description: z.string().min(1, "La description est requise"),
	category: z.string().min(1, "La catégorie est requise"),
	quantity: z
		.string()
		.min(1, "La quantité est requise")
		.regex(/^\d+$/, "Quantité invalide"),
	images: z
		.array(
			z.object({
				name: z.string(),
				size: z
					.number()
					.max(
						3 * 1024 * 1024,
						"Chaque fichier doit être de moins de 3MB"
					),
				type: z.enum(["image/png", "image/jpeg", "image/gif"]),
			})
		)
		.max(5, "Vous pouvez sélectionner jusqu'à 5 fichiers"),
});

function Form() {
	const { user } = useUser();
	const formRef = useRef<HTMLFormElement>(null);
	const router = useRouter();

	const [showAlert, setShowAlert] = useState(false);
	const [alertType, setAlertType] = useState("");
	const [alertMessage, setAlertMessage] = useState("");

	const [productData, setProductData] = useState({
		product_name: "",
		product_price: "",
		product_description: "",
		product_category: "",
		product_quantity: "",
		product_images: [] as any[],
	});

	const [images, setImages] = useState<File[]>([]);

	const [errors, setErrors] = useState<Record<string, string>>({});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProductData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (files: File[]) => {
		setImages((prev) => ({ ...prev, files }));
	};
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			setIsLoading(true);
			schema.parse({
				name: productData.product_name,
				price: productData.product_price,
				description: productData.product_description,
				category: productData.product_category,
				quantity: productData.product_quantity,
				images: productData.product_images,
			});
			const uploadedImages = await uploadFiles(images);
			productData.product_images = uploadedImages;

			const res = await createProduct({
				...productData,
				product_price: parseFloat(productData.product_price),
				product_quantity: parseInt(productData.product_quantity),
				clerckUserId: user?.id,
			});
			setAlertType("success");
			setAlertMessage("Le formulaire a été soumis avec succès !");
			setShowAlert(true);
			setIsLoading(false);
			if (res.$id) {
				formRef.current?.reset();
			} else {
				const Ids = uploadedImages.map((image) => JSON.parse(image).id);
				setAlertType("error");
				setAlertMessage(
					"Une erreur est survenue lors de la validation des images."
				);
				setShowAlert(true);
				await deleteFile(Ids);
			}
			setErrors({});
		} catch (e) {
			if (e instanceof z.ZodError) {
				const newErrors: Record<string, string> = {};
				e.errors.forEach((err) => {
					newErrors[err.path[0] as string] = err.message;
				});
				setIsLoading(false);
				setErrors(newErrors);
				// Alert
				setAlertType("error");
				setAlertMessage(e.message);
				setShowAlert(true);
			} else {
				setIsLoading(false);
				setErrors({
					form: "Une erreur est survenue lors de la validation.",
				});
				// Alert
				setAlertType("error");
				setAlertMessage(
					"Une erreur est survenue lors de la validation des données."
				);
				setShowAlert(true);
			}
		}
	};

	return (
		<>
			<h1 className="text-3xl font-bold text-center mt-4 mb-6">
				Ajouter un produit
			</h1>
			<Alert
				type={alertType}
				message={alertMessage}
				show={showAlert}
				setShow={setShowAlert}
			/>

			<form
				className="border border-gray-300 rounded-lg p-4 mt-4 max-w-md mx-auto"
				onSubmit={handleSubmit}
				ref={formRef}
			>
				<>
					<CustomInput
						type="text"
						name="product_name"
						label="Nom du produit"
						value={productData.product_name}
						onChange={handleChange}
						error={errors?.name}
					/>
					<CustomInput
						type="text"
						name="product_price"
						label="Prix"
						value={productData.product_price}
						onChange={handleChange}
						error={errors?.price}
					/>

					{/* <CustomInput
						type="text"
						name="product_category"
						label="Categorie"
						value={productData.product_category}
						onChange={handleChange}
						error={errors?.category}
					/> */}
					<Select
						name="product_category"
						label="Categorie"
						value={productData.product_category}
						onChange={handleChange}
						error={errors?.category}
					/>

					<CustomInput
						type="text"
						name="product_quantity"
						label="Quantité"
						value={productData.product_quantity}
						onChange={handleChange}
						error={errors?.quantity}
					/>
					<CustomInput
						type="textarea"
						name="product_description"
						label="Description"
						value={productData.product_description}
						onChange={handleChange}
						error={errors?.description}
					/>
				</>
				<>
					<FileInput
						name="product_images"
						label="Images"
						set_files={handleFileChange}
					/>
				</>
				{/* <Loader /> */}
				{isLoading ? <Loader /> : <Buttons title="Ajouter" />}
			</form>
		</>
	);
}

export default Form;
