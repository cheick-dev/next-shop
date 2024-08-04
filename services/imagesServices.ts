// import { ID, storage } from "./appwrite";
// import { updateProduct } from "./productsService";

// // const dbId = process.env.NEXT_PUBLIC_DATABASE_ID as string;
// // const colId = process.env.NEXT_PUBLIC_COLLECTION_ID as string;
// const APPWRITE_BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string;

// export async function handleMultipleUploads(
// 	files: File[],
// 	productId: string
// ): Promise<string[]> {
// 	try {
// 		const uploadPromises = files.map((file) => uploadImage(file));
//         const fileIds = await Promise.all(uploadPromises);

// 		await updateProduct(productId, { product_images: fileIds });
// 		console.log("All files uploaded and metadata saved");
//         return fileIds;
// 	} catch (error) {
// 		console.error("Error handling multiple uploads:", error);
// 	}
// }

// export async function uploadImage(file: File): Promise<string> {
// 	try {
// 		const response = await storage.createFile(
// 			APPWRITE_BUCKET_ID,
// 			ID.unique(),
// 			file
// 		);
// 		return response.$id;
// 	} catch (error) {
// 		console.error("Error uploading file:", error);
// 		throw new Error("Failed to upload file");
// 	}
// }
