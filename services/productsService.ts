import { databases, ID } from "./appwrite";

const dbId = process.env.NEXT_PUBLIC_DATABASE_ID as string;
const colId = process.env.NEXT_PUBLIC_COLLECTION_ID as string;

export type Product = {
	product_name: string;
	product_description: string;
	product_category: string;
	product_price: number;
	product_quantity: number;
	product_images: string[];
	clerckUserId: string | undefined;
};

// Créer un produit
export async function createProduct(productData: Product): Promise<any> {
	try {
		const res = await databases.createDocument(
			dbId,
			colId,
			ID.unique(),
			productData
		);

		return res;
	} catch (error) {
		console.error("Error creating product:", error);
		throw new Error("Failed to create product");
	}
}

// Lire un produit
export async function getProduct(productId: string) {
	try {
		const product = await databases.getDocument(dbId, colId, productId);
		return product;
	} catch (error) {
		console.error("Error getting product:", error);
		throw new Error("Failed to get product");
	}
}

// Mettre à jour un produit
export async function updateProduct(
	productId: string,
	updatedData: Partial<{
		product_name: string;
		product_description: string;
		product_price: number;
		product_quantity: number;
		product_images: string[];
	}>
): Promise<void> {
	try {
		await databases.updateDocument(dbId, colId, productId, updatedData);
	} catch (error) {
		console.error("Error updating product:", error);
		throw new Error("Failed to update product");
	}
}

// Supprimer un produit
export async function deleteProduct(productId: string): Promise<void> {
	try {
		await databases.deleteDocument(dbId, colId, productId);
	} catch (error) {
		console.error("Error deleting product:", error);
		throw new Error("Failed to delete product");
	}
}

export async function getProducts(): Promise<any> {
	try {
		const products = await databases.listDocuments(dbId, colId);
		return products;
	} catch (error) {
		console.error("Error getting products:", error);
		throw new Error("Failed to get products");
	}
}
