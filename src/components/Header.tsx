import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

const Header = () => {
	return (
		<header className="fixed w-full left-0 top-0 bg-gradient-to-b from-rich-black  via-rich-black/60 via-52% to-rich-black/0 text-white">
			<nav className="max-w-[1280px] flex justify-between items-center mx-auto py-6">
				<div>
					<Link href="#" className="text-xl md:hidden">
						<GiHamburgerMenu />
					</Link>
					<Link href="#hero" className="w-8">
						<Image src={logo} alt="coffee shop logo" width={"16px"} />
					</Link>
				</div>
				<div className="hidden md:block">
					<Link href="#">Home</Link>
					<Link href="#">About Us</Link>
					<Link href="#">Our Menu</Link>
					<Link href="#">Contact Us</Link>
				</div>
				<div className="flex justify-end items-center">
					<Link href="#" className="rounded-full bg-white/30">
						<FiShoppingCart />
					</Link>
					<Link href="#" className="rounded-full bg-white/30">
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
