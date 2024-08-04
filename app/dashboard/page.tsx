// src/App.js
import Header from "@/components/dashboard/Header";
import MainContent from "@/components/dashboard/MainContent";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

function App() {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex-1 flex flex-col">
				<Header />
				<MainContent />
			</div>
		</div>
	);
}

export default App;
