"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import TextToSVG from "./TxtToSvg";

function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		// <header className="body-font md:sticky top-0 w-full  bg-gray-50 z-10 shadow-sm overflow-hidden">
		// 	<div className="flex flex-wrap md:p-5 p-2 flex-row items-center justify-between w-full">
		// 		<Link
		// 			href="/"
		// 			className="flex title-font font-medium items-center mb-4 md:mb-0"
		// 		>
		// 			<span className=" text-xl md:text-3xl">Next-Shop</span>
		// 			{/* <TextToSVG text="Next-Shop" fontSize={30} color="black" /> */}
		// 		</Link>
		// 		<Hanberger
		// 			isMenuOpen={isMenuOpen}
		// 			setIsMenuOpen={setIsMenuOpen}
		// 		/>
		// 		<nav
		// 			className={`bg-gray-50  p-4 absolute ${
		// 				isMenuOpen ? "right-0" : "-right-full"
		// 			} top-14 w-3/4 h-1/2  z-10 transition-all ease-in-out duration-400 flex flex-col md:justify-end gap-2 text-base md:items-center md:static md:transform-none md:gap-0 md:bg-transparent md:p-0 md:flex-row`}
		// 		>
		// <Link
		// 	href="/create"
		// 	className="mr-5 p-2 rounded-xl transition-all duration-500 ease-in-out transform cursor-pointer hover:bg-gray-200 hover:text-gray-900"
		// 	style={{ willChange: "transform" }}
		// >
		// 	Ajouter un nouveau produit
		// </Link>
		// <Link
		// 	href="/dashboard"
		// 	className="mr-5 p-2 rounded-xl transition-all duration-500 ease-in-out transform cursor-pointer hover:bg-gray-200 hover:text-gray-900"
		// 	style={{ willChange: "transform" }}
		// >
		// 	Tableau de bord
		// </Link>
		// <SignedOut>
		// 	<SignInButton />
		// </SignedOut>
		// <SignedIn>
		// 	<UserButton />
		// </SignedIn>
		// 		</nav>
		// 	</div>
		// </header>
		<header className="sticky top-0 w-full z-30">
			<input
				type="checkbox"
				name="hbr"
				id="hbr"
				className="hbr peer"
				hidden
				aria-hidden="true"
			/>
			<nav className="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none">
				<div className="xl:container m-auto px-6 md:px-12">
					<div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
						<div className="w-full flex justify-between lg:w-auto">
							<Link
								href="/"
								aria-label="logo"
								className="flex space-x-2 items-center"
							>
								<div
									aria-hidden="true"
									className="flex space-x-1"
								>
									<div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-200"></div>
									<div className="h-6 w-2 bg-primary dark:bg-primaryLight"></div>
								</div>
								<span className="text-base font-bold text-gray-600 dark:text-white">
									<span className="text-xl md:text-3xl">
										Next-Shop
									</span>
								</span>
							</Link>
							<label
								htmlFor="hbr"
								className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
							>
								<div
									aria-hidden="true"
									className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
								></div>
								<div
									aria-hidden="true"
									className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
								></div>
							</label>
						</div>
						<div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
							<div className="text-gray-600 dark:text-gray-300 lg:pr-4 backdrop-blur">
								<ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
									<li>
										<Link
											href="/create"
											className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
										>
											Ajouter un nouveau produit
										</Link>
									</li>
									<li>
										<Link
											href="/dashboard"
											className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
										>
											Tableau de bord
										</Link>
									</li>
									{/* <li>
										<a
											href="#"
											className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
										>
											<span>Home</span>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
										>
											<span>Portfolio</span>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
										>
											<span>Services</span>
										</a>
									</li> */}
								</ul>
							</div>

							<div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l pr-1">
								{/* <a
									href="#"
									className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
								>
									<span className="relative text-sm font-semibold text-primary dark:text-primaryLight">
										Sign Up
									</span>
								</a>
								<a
									href="#"
									className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
								>
									<span className="relative text-sm font-semibold text-white dark:text-gray-900">
										Login
									</span>
								</a> */}
								<SignedOut>
									<SignInButton />
								</SignedOut>
								<SignedIn>
									<UserButton />
								</SignedIn>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default NavBar;

const Hanberger = ({
	isMenuOpen,
	setIsMenuOpen,
}: {
	isMenuOpen: boolean;
	setIsMenuOpen: any;
}) => {
	return (
		<button
			className="inline-flex items-center p-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
			onClick={() => setIsMenuOpen(!isMenuOpen)}
			aria-controls="mobile-menu"
			aria-expanded={isMenuOpen}
		>
			<svg
				className="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4 6h16M4 12h16m-7 6h7"
				/>
			</svg>
		</button>
	);
};
