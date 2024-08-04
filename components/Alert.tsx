import React from "react";

function Alert({ type, message }: { type: string; message: string }) {
	switch (type) {
		case "info":
			return AlertInfo(message);
		case "warning":
			return AlertWarning(message);
		case "success":
			return AlertSuccess(message);
		case "danger":
			return AlertDanger(message);
		case "dark":
			return AlertDark(message);
		default:
			return AlertInfo(message);
	}
}

export default Alert;
function AlertDanger(message: string) {
	return (
		<div
			className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
			role="alert"
		>
			<span className="font-medium">Danger alert!</span> {message}
		</div>
	);
}

function AlertSuccess(message: string) {
	return (
		<div
			className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
			role="alert"
		>
			<span className="font-medium">Success alert!</span> {message}
		</div>
	);
}

function AlertWarning(message: string) {
	return (
		<div
			className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
			role="alert"
		>
			<span className="font-medium">Warning alert!</span> {message}
		</div>
	);
}

function AlertDark(message: string) {
	return (
		<div
			className="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
			role="alert"
		>
			<span className="font-medium">Dark alert!</span> {message}
		</div>
	);
}

function AlertInfo(message: string) {
	return (
		<div
			className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
			role="alert"
		>
			<span className="font-medium">Info alert!</span> {message}
		</div>
	);
}
