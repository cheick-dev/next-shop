"use client";
import { getProducts, Product } from "@/services/productsService";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function Listing() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const fetchData = async () => {
		setLoading(true);
		const { documents } = await getProducts();
		setProducts(documents);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -m-4 container mx-auto gap-4">
					{loading ? (
						<Loader />
					) : (
						products.map((product: any) => (
							<div
								className="lg:w-1/4 md:w-1/2 border border-[#ccc] rounded-xl transition-shadow duration-200 ease-in-out py-4 px-2 w-full cursor-pointer hover:shadow-lg min-w-fit"
								key={product.$id}
							>
								<Link
									className="block relative h-48 rounded overflow-hidden"
									href={`/properties/details/${product.$id}`}
								>
									{product.product_images[0] && (
										<img
											alt="ecommerce"
											width={420}
											height={260}
											className="object-cover object-center w-full h-full block"
											src={
												JSON.parse(
													product.product_images[0]
												).url
											}
										/>
									)}
								</Link>
								<div className="mt-4">
									<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
										CATEGORY: {product.product_category}
									</h3>
									<h2 className="text-gray-900 title-font text-lg font-medium">
										{product.product_name}
									</h2>
									<p className="mt-1">
										${product.product_price}
									</p>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
}

export default Listing;
