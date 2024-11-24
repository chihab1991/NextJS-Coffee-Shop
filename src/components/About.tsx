import Image from "next/image";
import manWithCoffee from "./../../public/img/logo_1.webp";
import Link from "next/link";
const About = () => {
	return (
		<section id="about">
			<div>
				<h2>About Us</h2>
				<p>
					Our coffee house uses only Ethiopian coffee. All commercially produced
					coffee originates from Ethiopia. We love Ethiopia for providing the
					world with coffee to grow. and we continue to love the flavor of that
					country&apos;s coffee. The fruity acidity of this single origin coffee
					is balanced by its sweet honey notes. creating soft, light notes with
					a light character
				</p>
				<Link href="#">Learn More</Link>
			</div>

			<div>
				<Image src={manWithCoffee} alt="man holding a cup of coffee" />
			</div>
		</section>
	);
};
export default About;
