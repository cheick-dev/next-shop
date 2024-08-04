import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import TextToSVG from "./TxtToSvg";

function NavBar() {
	return (
		<header className="body-font sticky top-0 w-full  bg-gray-50 z-10 shadow-sm">
			<div className="flex flex-wrap p-5 flex-row items-center justify-between w-full">
				<Link
					href="/"
					className="flex title-font font-medium items-center  mb-4 md:mb-0"
				>
					{/* <span className="ml-3 text-xl">Next-Shop</span> */}
					<TextToSVG text="Next-Shop" fontSize={30} color="black" />
				</Link>
				<nav className="flex flex-wrap items-center text-base ">
					<Link
						href="/create"
						className="mr-5 p-2 rounded-xl transition-all duration-500 ease-in-out transform cursor-pointer hover:bg-gray-200 hover:text-gray-900"
						style={{ willChange: "transform" }}
					>
						Ajouter un nouveau produit
					</Link>
					<Link
						href="/dashboard"
						className="mr-5 p-2 rounded-xl transition-all duration-500 ease-in-out transform cursor-pointer hover:bg-gray-200 hover:text-gray-900"
						style={{ willChange: "transform" }}
					>
						Tableau de bord
					</Link>
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
