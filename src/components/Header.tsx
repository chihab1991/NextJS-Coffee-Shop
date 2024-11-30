import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

const Header = () => {
	return (
		<header className="fixed w-full left-0 top-0 bg-gradient-to-b from-rich-black  via-rich-black/60 via-52% to-rich-black/0 text-white ">
			<nav className="max-w-[1512px] flex justify-between items-center mx-auto py-6 xl:py-10 px-4 lg:px-12">
				<div className="flex items-center">
					<Link href="#" className="text-3xl md:text-4xl mr-4 lg:hidden">
						<GiHamburgerMenu />
					</Link>
					<Link href="#hero" className="w-28 md:w-32 lg:w-40">
						<Image src={logo} alt="coffee shop logo"/>
					</Link>
				</div>
				<div className="hidden lg:block text-xl xl:text-2xl">
					<Link href="#" className="mr-8 xl:mr-10 hover:text-orange duration-300">Home</Link>
					<Link href="#" className="mr-8 xl:mr-10 hover:text-orange duration-300">About Us</Link>
					<Link href="#" className="mr-8 xl:mr-10 hover:text-orange duration-300">Our Menu</Link>
					<Link href="#" className="hover:text-orange duration-300">Contact Us</Link>
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
			<div>
				<Link href="#">Home</Link>
				<Link href="#">About Us</Link>
				<Link href="#">Our Menu</Link>
				<Link href="#">Contact Us</Link>
			</div>
		</header>
	);
};
export default Header;
