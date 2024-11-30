import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/img/logo.png";
import {
	FaXTwitter,
	FaFacebook,
	FaSquareWhatsapp,
	FaInstagram,
	FaYoutube,
	FaTiktok,
} from "react-icons/fa6";

import { PiMapPinBold,PiXLogo } from "react-icons/pi";
import { LuMail, LuPhoneCall } from "react-icons/lu";

const Contact = () => {
	return (
		<section id="contact" className="bg-brown text-pale-orange">
			<div className="max-w-[1512px] mx-auto  pt-12 pb-8 lg:py-20  px-6 sm:px-12 lg:px-16 ">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch gap-x-8 lg:gap-x-12">
					<div className="mb-12 lg:mb-0">
						<Image src={logo} alt="coffee shop logo" className="w-40 xl:w-52 mb-12 lg:mb-8" />
		
						<p className="text-[15px] leading-6 mb-4 xl:text-xl xl:leading-8">
							There are people who can&apos;t start their day without having a
							freshly brewed cup of coffee and we understand them
						</p>
						<div className="flex items-center text-2xl xl:text-4xl gap-x-[10px]">
							<Link href="#" >
								<PiXLogo className="bg-pale-orange text-brown rounded-full text-[24px] xl:text-[35px]  p-0.5 xl:p-1" />
							</Link>
							<Link href="#">
								<FaFacebook className="xl:text-[34px]"/>
							</Link>
							<Link href="#">
								<FaSquareWhatsapp />
							</Link>
							<Link href="#">
								<FaInstagram />
							</Link>
							<Link href="#">
								<FaYoutube />
							</Link>
							<Link href="#">
								<FaTiktok className="text-xl xl:text-3xl" />
							</Link>
						</div>
					</div>
					
					<div className="mb-10 lg:mb-0 lg:mt-6">
						<h3 className="text-xl xl:text-2xl font-bold mb-6">Contact Us</h3>
						<div className="flex items-center gap-x-6 mb-4">
						
							<PiMapPinBold className="text-2xl" />
							
							<p className="text-[15px] xl:text-[21px]">72, Wall street, King Road, NY 20110</p>
						</div>
						<div className="flex items-center gap-x-6 mb-4">
							<LuPhoneCall className="text-[22px]" />
							<p className="text-[15px] xl:text-[21px]">800.275.8777</p>
						</div>
						<div className="flex items-center gap-x-6">
							<LuMail className="text-2xl" />
							<p className="text-[15px] xl:text-[21px]">ngopiloer@gmail.com</p>
						</div>
					</div>
					
					<div className="md:col-span-2 lg:col-span-1 lg:mt-6">
						<h3 className="text-xl xl:text-2xl font-bold mb-4">Subscribe To Newsletter</h3>
						<form className="mb-6">
							<input type="email" name="email" id="email" placeholder="Your E-Mail Adress" className="w-full p-5 rounded-[10px] text-[15px] mb-4 xl:mb-6 text-rich-black" />
							<button type="submit" className="bg-orange text-white px-8 py-[12px] xl:py-4 rounded-lg text-[15px] lg:text-lg  lg:font-medium">Subscribe</button>
						</form>
						<p className="italic text-[15px] xl:text-xl leading-[1.1rem]">Sign up with your email address to receive news and updates.</p>
					</div>
				</div>			
			</div>
		</section>
	);
};
export default Contact;
