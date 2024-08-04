import { Client, Storage, ID, Databases } from "appwrite";
// import { updateProduct } from "./productsService";
const client = new Client();

client
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

const databases = new Databases(client);
const storage = new Storage(client);
export { storage, databases, ID };

const uploadFiles = async (files: any) => {
	// const imgUrls = [];
	// const imgIds = [];
	let MyImages: string[] = [];

	try {
		for (const file of files.files) {
			const response = await storage.createFile(
				process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
				ID.unique(),
				file
			);
			const imgUrl = await getFile(response.$id);

			MyImages.push(
				JSON.stringify({ id: response.$id, url: imgUrl.href })
			);
		}

		return MyImages;
	} catch (error) {
		console.error("Error uploading file to Appwrite", error);
		throw error;
	}
};

const deleteFile = async (fileIds: any) => {
	try {
		for (const fileId of fileIds) {
			await storage.deleteFile(
				process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
				fileId
			);
		}
	} catch (error) {
		console.error("Error deleting file from Appwrite", error);
		throw error;
	}
};

const getFile = async (fileId: string) => {
	try {
		const response = storage.getFileView(
			process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
			fileId
		);
		return response;
	} catch (error) {
		console.error("Error getting file from Appwrite", error);
		throw error;
	}
};
const updateFile = async (fileId: string) => {
	try {
		const result = await storage.updateFile(
			process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
			fileId
		);
	} catch (error) {
		console.error("Error updating file from Appwrite", error);
		throw error;
	}
};
// const uploadFile = async (fileId: string) => {

// }
// const uploadFile = async (file: any) => {

// }
// const uploadFile = async (file: any) => {

// }

export { uploadFiles, getFile, deleteFile, updateFile };
