// src/App.js
import Header from "@/components/dashboard/Header";
import MainContent from "@/components/dashboard/MainContent";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

function App() {
	return (
		// <div classNameName="flex">
		// 	<div classNameName="flex-1 flex flex-col">
		// 	</div>
		// </div>

		<body className="bg-gray-100 dark:bg-gray-900">
			<Header />
			<MainContent />
			<Sidebar />
		</body>
	);
}

export default App;
