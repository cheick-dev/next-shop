"use client";
import { getProducts, Product } from "@/services/productsService";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Select from "./form/Select";

function Listing() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [filitres, setFilitres] = useState<string>("All");
	const fetchData = async () => {
		setLoading(true);
		const { documents } = await getProducts();
		setProducts(documents);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);
	const handleFiltre = (selectedCategory: string) => {
		setFilitres(selectedCategory);
	};

	// Filtrer les produits en fonction de la catégorie sélectionnée
	const filteredProducts =
		filitres === "All"
			? products
			: products.filter(
					(product) => product.product_category === filitres
			  );
	return (
		<section className="text-gray-600 body-font pt-20 md:pt-0  mx-auto w-screen">
			<section className="flex items-center justify-between container mt-5 md:pt-0">
				<h1 className="md:text-3xl font-bold text-xl">Annonces</h1>
				<div className="flex md:w-1/4 w-1/2 z-10">
					<Select
						name="category"
						value={filitres}
						onChange={(e: any) => handleFiltre(e.target.value)}
						error="error"
					/>
				</div>
			</section>
			<div className=" px-5 py-5 md:py-16 mx-auto md:container">
				{loading ? (
					<div className="flex justify-center items-center">
						<Loader />
					</div>
				) : (
					<div className="container max-w-max grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{filteredProducts.map((product: any) => (
							<div
								className="mx-auto rounded-xl transition-transform duration-200 ease-in-out py-4 px-2 w-full cursor-pointer shadow-lg min-w-fit hover:-translate-y-5"
								key={product.$id}
							>
								<Link
									className="block relative h-48 rounded overflow-hidden"
									href={`/properties/details/${product.$id}`}
								>
									{product.product_images[0] && (
										<img
											alt="ecommerce"
											className="object-cover object-center w-full h-full block hover:scale-110 transition-transform duration-200 ease-in-out"
											src={
												JSON.parse(
													product.product_images[0]
												).url
											}
										/>
									)}
								</Link>
								<div className="mt-4">
									<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
										Catégorie: {product.product_category}
									</h3>
									<h2 className="text-gray-900 title-font text-lg font-medium">
										{product.product_name}
									</h2>
									<p className="mt-1">
										${product.product_price}
									</p>
								</div>
							</div>
						))}
					</div>
				)}
				{!loading && filteredProducts.length === 0 && (
					<h1 className="text-black md:text-4xl text-xl font-bold text-center">
						Aucune annonce
					</h1>
				)}
			</div>
		</section>
	);
}

export default Listing;
