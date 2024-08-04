import { useEffect, useState, useCallback } from "react";

const Carousel = ({ images = [] }: { images: string[] }) => {
	// Par défaut, 'images' est un tableau vide pour éviter les erreurs
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	}, [images.length]);

	useEffect(() => {
		if (images.length > 0) {
			const interval = setInterval(nextSlide, 3000);
			return () => clearInterval(interval);
		}
	}, [nextSlide, images.length]);

	// Vérifiez que 'images' est bien un tableau
	if (!Array.isArray(images) || images.length === 0) {
		return <p>Aucune image disponible</p>;
	}

	return (
		// <div className="relative w-full h-64 overflow-hidden">
		// 	<div
		// 		className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
		// 		style={{ transform: `translateX(-${currentIndex * 100}%)` }}
		// 	>
		// 		{images.map((img, index) => (
		// 			<img
		// 				key={index}
		// 				src={JSON.parse(images[1]).url}
		// 				className="w-full h-full object-cover"
		// 				alt={`Slide ${index + 1}`}
		// 			/>
		// 		))}
		// 	</div>
		// 	<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
		// 		{images.map((img, index) => (
		// 			<div
		// 				key={index}
		// 				className={`w-3 h-3 rounded-full cursor-pointer ${
		// 					index === currentIndex ? "bg-white" : "bg-gray-400"
		// 				}`}
		// 				onClick={() => setCurrentIndex(index)}
		// 			></div>
		// 		))}
		// 	</div>
		// </div>
		<>
			{images.map((img, index) => (
				<div key={index}>
					<img
						src={JSON.parse(img).url}
						alt={`Slide ${index + 1}`}
						className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
					/>
				</div>
			))}
		</>
	);
};

export default Carousel;
