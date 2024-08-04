import React from "react";

const TextToSVG = ({
	text = "",
	fontSize = 24,
	color = "black",
	width = 200,
	height = 50,
}) => {
	return (
		<svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
			<text
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
				fontSize={fontSize}
				fill={color}
			>
				{text}
			</text>
		</svg>
	);
};

export default TextToSVG;
