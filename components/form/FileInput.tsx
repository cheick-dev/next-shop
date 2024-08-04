"use client";
import React, { useState } from "react";

interface FileInputProps {
	name: string;
	label?: string;
	className?: string;
	[key: string]: any;
	set_files: (files: File[]) => void;
}

const FileInput: React.FC<FileInputProps> = ({
	name,
	label,
	set_files,
	error,
}) => {
	const [filesInfo, setFilesInfo] = useState<
		{ name: string; size: number; preview: string }[]
	>([]);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(event.target.files || []);

		if (filesInfo.length > 4) {
			alert("You can only upload 5 files");
			return;
		} else {
			const updatedFilesInfo = files.map((file) => ({
				name: file.name,
				size: file.size,
				preview: URL.createObjectURL(file),
			}));

			setFilesInfo((prev) => [...prev, ...updatedFilesInfo]);
			set_files(files);
			return files;
		}
	};
	const handleRemove = (index: number) => {
		const newFilesInfo = filesInfo.filter((_, i) => i !== index);
		setFilesInfo(newFilesInfo);
	};

	return (
		<>
			<div className="mb-6">
				{label && (
					<label
						htmlFor={name}
						className="block mb-2 text-sm font-medium text-gray-700"
					>
						{label}
					</label>
				)}
				<div
					className={`flex items-center justify-center w-full ${
						filesInfo.length > 0 && "hidden"
					}`}
				>
					<label
						htmlFor={name}
						className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 ${
							error ? "border-red-500" : "border-gray-300"
						}`}
					>
						<div className="flex flex-col items-center justify-center pt-7">
							<svg
								aria-hidden="true"
								className="w-8 h-8 mb-3 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M7 16V4a2 2 0 012-2h6a2 2 0 012 2v12m-7 4h4"
								></path>
							</svg>
						</div>
						<input
							id={name}
							type="file"
							className="hidden"
							multiple
							name={name}
							onChange={handleChange}
						/>
					</label>
				</div>
				{error && (
					<p className="mt-2 text-sm text-red-600">
						{error as string}
					</p>
				)}
			</div>

			{filesInfo.length > 0 && (
				<>
					<div className="flex flex-row flex-wrap gap-3 mb-4">
						{filesInfo.map((file, index) => (
							<div
								key={index}
								className="flex items-center relative"
							>
								<img
									src={file.preview}
									alt={file.name}
									className="w-16 h-16 object-cover rounded"
								/>
								<span
									className="bg-slate-500 text-white text-xs font-medium px-2 py-1 absolute right-0 top-0 rounded-full cursor-pointer"
									onClick={() => handleRemove(index)}
								>
									x
								</span>
							</div>
						))}
						<label
							htmlFor={name}
							className={`bg-slate-500 w-16 h-16 text-2xl text-white rounded flex items-center justify-center cursor-pointer ${
								filesInfo.length == 5 && "hidden"
							}`}
						>
							+
						</label>
					</div>
				</>
			)}
		</>
	);
};

export default FileInput;
