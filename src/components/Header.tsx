"use client"
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import logo from "./../../public/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {

const [openMenu, setOpenMenu] = useState(false)
	return (
		<header className="fixed w-full left-0 top-0  text-white ">
			<nav className="bg-gradient-to-b from-rich-black  via-rich-black/60 via-52% to-rich-black/0 max-w-[1512px] flex justify-between items-center mx-auto py-6 xl:py-10 px-4 lg:px-12">
				<div className="flex items-center">
					<Link href="#" className="text-3xl md:text-4xl mr-4 lg:hidden suration-700" onClick={()=>{setOpenMenu(!openMenu)}}>
						{ openMenu ? <MdOutlineClose /> : <GiHamburgerMenu /> }
					</Link>
					<Link href="#hero" className="w-28 md:w-32 lg:w-40">
						<Image src={logo} alt="coffee shop logo"/>
					</Link>
				</div>
				<div className="hidden lg:block text-xl xl:text-2xl">
					<Link href="#hero" className="mr-8 xl:mr-10 hover:text-orange duration-300">Home</Link>
					<Link href="#about" className="mr-8 xl:mr-10 hover:text-orange duration-300">About Us</Link>
					<Link href="#features" className="mr-8 xl:mr-10 hover:text-orange duration-300">Features</Link>
					<Link href="#menu" className="mr-8 xl:mr-10 hover:text-orange duration-300">Our Menu</Link>
					<Link href="#contact" className="hover:text-orange duration-300">Contact Us</Link>
				</div>
				<div className="flex justify-end items-center md:text-2xl lg:text-3xl">
					<Link href="#" className="rounded-full bg-white/30 p-3 lg:p-4 mr-2 md:mr-3 lg:mr-4 xl:mr-6 hover:text-orange duration-300">
						<FiShoppingCart />
					</Link>
					<Link href="#" className="rounded-full bg-white/30 p-3 lg:p-4 hover:text-orange duration-300">
						<GoPerson />
					</Link>
				</div>
			</nav>
			<div className={`bg-gradient-to-b from-rich-black/0  via-rich-black/60 via-52% to-rich-black flex flex-col space-y-12 min-w-full text-center text-3xl text-pale-orange py-10 lg:hidden ${openMenu ? "translate-x-0" : "-translate-x-full" } duration-700 z-[100] `}>
				<Link href="#hero">Home</Link>
				<Link href="#about">About Us</Link>
				<Link href="#features">Features</Link>
				<Link href="#menu">Our Menu</Link>
				<Link href="#contact">Contact Us</Link>
			</div>
		</header>
	);
};
export default Header;
