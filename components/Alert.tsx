// import React from "react";

// function Alert({ type, message }: { type: string; message: string }) {
// 	switch (type) {
// 		case "info":
// 			return AlertInfo(message);
// 		case "warning":
// 			return AlertWarning(message);
// 		case "success":
// 			return AlertSuccess(message);
// 		case "danger":
// 			return AlertDanger(message);
// 		case "dark":
// 			return AlertDark(message);
// 		default:
// 			return AlertInfo(message);
// 	}
// }

// export default Alert;
// function AlertDanger(message: string) {
// 	return (
// 		<div
// 			className="absolute top-0 right-0 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
// 			role="alert"
// 		>
// 			<span className="font-medium">Danger alert!</span> {message}
// 		</div>
// 	);
// }

// function AlertSuccess(message: string) {
// 	return (
// 		<div
// 			className="absolute top-0 right-0 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
// 			role="alert"
// 		>
// 			<span className="font-medium">Success alert!</span> {message}
// 		</div>
// 	);
// }

// function AlertWarning(message: string) {
// 	return (
// 		<div
// 			className="absolute top-0 right-0 p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
// 			role="alert"
// 		>
// 			<span className="font-medium">Warning alert!</span> {message}
// 		</div>
// 	);
// }

// function AlertDark(message: string) {
// 	return (
// 		<div
// 			className="absolute top-0 right-0 p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
// 			role="alert"
// 		>
// 			<span className="font-medium">Dark alert!</span> {message}
// 		</div>
// 	);
// }

// function AlertInfo(message: string) {
// 	return (
// 		<div
// 			className="absolute top-0 right-0 p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
// 			role="alert"
// 		>
// 			<span className="font-medium">Info alert!</span> {message}
// 		</div>
// 	);
// }

import React, { useEffect } from "react";

const Alert = ({
	type,
	message,
	show,
	setShow,
}: {
	type: string;
	message: string;
	show: boolean;
	setShow: any;
}) => {
	const baseStyle =
		"fixed z-50 flex items-center p-4 mb-4 text-sm rounded-lg shadow-lg transition-opacity duration-300";
	let alertStyle = "";
	let positionStyle = "bottom-4 left-1/2 transform -translate-x-1/2"; // Position par défaut pour les écrans réduits

	switch (type) {
		case "success":
			alertStyle = "bg-green-100 text-green-700";
			break;
		case "error":
			alertStyle = "bg-red-100 text-red-700";
			break;
		case "warning":
			alertStyle = "bg-yellow-100 text-yellow-700";
			break;
		case "info":
			alertStyle = "bg-blue-100 text-blue-700";
			break;
		default:
			alertStyle = "bg-gray-100 text-gray-700";
	}

	// Adaptation de la position selon la taille de l'écran
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				positionStyle = "top-4 right-4"; // Position en haut à droite pour les écrans larges
			} else {
				positionStyle = "bottom-4 left-1/2 transform -translate-x-1/2";
			}
		};

		handleResize(); // Set initial position
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Disparition automatique après 5 secondes
	useEffect(() => {
		if (show) {
			const timer = setTimeout(() => {
				setShow(false);
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [show, setShow]);

	if (!show) return null;

	return (
		<div
			className={`${baseStyle} ${alertStyle} ${positionStyle}`}
			role="alert"
		>
			<svg
				className="w-5 h-5 mr-2"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					d="M18 13a1 1 0 01-.894.553h-14A1 1 0 012 13V7a1 1 0 011-1h14a1 1 0 011 1v6zM10 14.5a1 1 0 011-1h1.93l.01.006 1.89 1.81a1 1 0 01-.77 1.684H8.94a1 1 0 01-.707-.293L4.06 13H5a1 1 0 011-1h4zm.134-6.466A.999.999 0 019 7h-.01l-.01.01-4.284 4.3a.998.998 0 01-1.418 0 1 1 0 010-1.42l4.284-4.3a1 1 0 011.456.05l.008.009.01.01.01.01.41.42a1 1 0 01.138.28c.01.02.01.04.02.06v.01a.998.998 0 01.007.214 1.005 1.005 0 01-.206.59L10.133 8h.001z"
					clipRule="evenodd"
				/>
			</svg>
			{message}
		</div>
	);
};

export default Alert;
