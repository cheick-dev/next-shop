// src/components/Sidebar.js
import React from "react";

const Sidebar = () => {
	return (
		<aside className=" w-64 min-h-screen p-4 border-r border-gray-200">
			<nav>
				<ul>
					<li className="mb-4">
						<a href="#home">Home</a>
					</li>
					<li className="mb-4">
						<a href="#analytics">Analytics</a>
					</li>
					<li className="mb-4">
						<a href="#analytics">Analytics</a>
					</li>
					<li className="mb-4">
						<a href="#settings">Settings</a>
					</li>
					<li className="mb-4">
						<a href="#settings">Settings</a>
					</li>
					<li className="mb-4">
						<a href="#settings">Settings</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
