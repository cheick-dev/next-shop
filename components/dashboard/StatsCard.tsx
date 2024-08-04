// src/components/MainContent.js
import React from "react";
// import StatsCard from "./StatsCard";

const StatsCard = ({ title, value }: { title: string; value: string }) => {
	return (
		<main className="flex-1 p-4">
			<h2 className="text-2xl mb-4">Welcome to the Dashboard</h2>
			<div className="flex flex-wrap">
				<p>StatsCard</p>
				<p>{title}</p>
				<p>{value}</p>
				{/* <StatsCard title="Users" value="1000" />
				<StatsCard title="Revenue" value="$5000" /> */}
				{/* Add more StatsCard components as needed */}
			</div>
		</main>
	);
};

export default StatsCard;
