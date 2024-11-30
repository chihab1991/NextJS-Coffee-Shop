import Image from "next/image";
import manWithCoffee from "./../../public/img/logo_1.webp";
import Link from "next/link";
import {lobster} from "./../app/fonts"

const About = () => {
	return (
		<section id="about" className=" bg-pale-orange text-center md:text-left">
			<div className="max-w-[1512px] mx-auto  py-12 lg:py-20  px-6 sm:px-12 lg:px-16 " >
			<h2 className={`${lobster.className} text-rich-black text-3xl mb-5 sm:mb-8 md:hidden sm:text-4xl`} >About Us</h2>
			
			<div className="flex flex-col-reverse md:flex-row justify-center md:justify-evenly items-center">
				
				<div className="mt-7 sm:mt-10 md:w-1/2 md:mr-12 lg:mr-36">
					<h2 className={`hidden md:block ${lobster.className} text-left text-rich-black text-4xl lg:text-5xl mb-6 lg:mb-10`} >About Us</h2>

					<p className="text-[15px] sm:text-[16px] lg:text-xl leading-snug sm:leading-normal lg:leading-8 text-dark-gray md:text-left ">
						Our coffee bar uses only Ethiopian coffee. All commercially produced
						coffee originates from Ethiopia. We love Ethiopia for providing the
						world with coffee to grow, and we continue to love the flavor of that
						country&apos;s coffee. The fruity acidity of this single origin coffee
						is balanced by its sweet honey notes. creating soft, light notes with
						a light character.
					</p>

					<Link href="#" className="text-[15px] sm:text-[16px] lg:text-xl text-white bg-orange inline-block mt-7 lg:mt-12 px-8 py-3.5 rounded-lg">Learn More</Link>
				</div>

				<div className="md:w-1/2">
					<Image src={manWithCoffee} alt="man holding a cup of coffee" />
				</div>
			</div>
			</div>
		</section>
	);
};
export default About;
