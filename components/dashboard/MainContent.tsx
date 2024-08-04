"use client";
import React from "react";
import StatsCard from "./StatsCard";
import { uploadFiles, getFile, deleteFile } from "@/services/appwrite";

const MainContent = () => {
	const handleFileUpload = async (e: any) => {
		e.preventDefault();
		const file = document.getElementById("file-upload").files[0];
		// const file = "66a648c9000d5469da3b";
		const url = await uploadFiles(file);
		console.log(url);
	};
	return (
		<main className="flex-1 p-4">
			<h2 className="text-2xl mb-4">Welcome to the Dashboard</h2>
			<div className="flex flex-wrap">
				<StatsCard title="Users" value="1000" />
				<StatsCard title="Revenue" value="$5000" />
				<form
					className="flex flex-col items-center justify-center w-full"
					onSubmit={(e) => handleFileUpload(e)}
				>
					<input type="file" className="" id="file-upload" />

					<button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						upload
					</button>
				</form>
			</div>
		</main>
	);
};

export default MainContent;
