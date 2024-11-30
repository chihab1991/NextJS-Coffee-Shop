import Image from "next/image";
import Coffee from "./../../public/img/Coffee.png";
import Wifi from "./../../public/img/Vector.png";
import PersonInsideCoffeeShop from "./../../public/img/Vector(1).png";
import Menu from "./../../public/img/Vector(2).png";
import {lobster} from "./../app/fonts"

const Features = () => {
	return (
		<section id="features" className="bg-brown text-center text-pale-orange ">
		<div className="pt-8 pb-12 lg:pt-12 lg:pb-6  px-6 sm:px-12 max-w-[1512px] mx-auto" >
			<h2 className={`${lobster.className} text-3xl md:text-4xl lg:text-5xl mb-8`} >Features</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 md:gap-y-6 lg:gap-8 xl:gap-x-16 lg:gap-y-0">
				<div className="border-b border-pale-orange sm:border-b-0 h-full">
				<div className="h-28 lg:h-36 flex justify-center items-center">
					<Image src={Coffee} alt="illustration of cup of coffee" className="inline-block w-24  md:auto" />
				</div>
					<div className="h-28 flex justify-center items-center">
					<h3 className="text-3xl font-bold sm:w-full">High Quality</h3>
					</div>
					<p className="text-[15px] lg:text-[17px] xl:text-[18px] leading-6 mb-5">
						Enjoy an unrivaled coffee taste sensation with our selected coffee
						beans, carefully roasted to create a fresh cup of coffee that
						captivates your taste buds.
					</p>
				</div>

				<div className="border-b border-pale-orange sm:border-b-0 pt-10 sm:pt-0 h-full">
					<div className="h-28 lg:h-36  flex justify-center items-center">
					<Image src={Wifi} alt="wifi" className="inline-block w-24 xl:w-28" />
					</div>
					<div className="h-28 flex justify-center items-center">
					<h3 className="text-3xl  w-3/5 sm:w-4/5 md:w-full font-bold">Fast Wi-Fi and Work Area</h3>
					</div>
					<p className="text-[15px] lg:text-[17px] xl:text-[18px] leading-6 mb-5">
						Combine productivity with the pleasure of coffee. Enjoy a super-fast
						Wi-Fi connection and a comfortable workspace, where creative ideas
						bloom while sipping your favorite coffee.
					</p>
				</div>

				<div className="border-b border-pale-orange sm:border-b-0 pt-10 sm:pt-0  h-full">
				<div className="h-28 lg:h-36  flex justify-center items-center">
					<Image src={PersonInsideCoffeeShop} alt="person inside coffee shop" className="inline-block w-20 md:auto" />
				</div>
				<div className="h-28 flex justify-center items-center">
					<h3 className="text-3xl  w-3/5 sm:w-full font-bold ">Comfortable and Friendly Room</h3>
					</div>
					<p className="text-[15px] lg:text-[17px] xl:text-[18px] leading-6 mb-5">
						Find the perfect place to gather, work or relax with friends in a
						warm and friendly atmosphere. Our spaces are designed to create a
						pleasant experience.
					</p>
				</div>

				<div className="pt-10 sm:pt-0 h-full">
				<div className="h-28 lg:h-36  flex justify-center items-center">
					<Image src={Menu} alt="menu" className="inline-block w-[4.5rem] md:auto" />
					</div>
					<div className="h-28 flex justify-center items-center">
					<h3 className="text-3xl w-3/5 sm:w-full font-bold ">Creative and Innovative Menu</h3>
					</div>
					<p className="text-[15px] lg:text-[17px] xl:text-[18px] leading-6 ">
						There is always something new to try on every visit. From specialty
						coffees to delicious snacks, our menu is designed to satisfy a
						variety o tastes.
					</p>
				</div>
			</div>
			</div>
		</section>
	);
};
export default Features;
