import Image from "next/image";
import Coffee from "./../../public/img/Coffee.png";
import Wifi from "./../../public/img/Vector.png";
import PersonInsideCoffeeShop from "./../../public/img/Vector(1).png";
import Menu from "./../../public/img/Vector(2).png";
const Features = () => {
	return (
		<section id="features">
			<h2>Features</h2>

			<div className="grid grid-cols-1">
				<div>
					<Image src={Coffee} alt="illustration of cup of coffee" />
					<h3>High Quality</h3>
					<p>
						Enjoy an unrivaled coffee taste sensation with our selected coffee
						beans, carefully roasted to create a fresh cup of coffee that
						captivates your taste buds.
					</p>
				</div>

				<div>
					<Image src={Wifi} alt="wifi" />
					<h3>Fast Wi-Fi and Work Area</h3>
					<p>
						Combine productivity with the pleasure of coffee. Enjoy a super-fast
						Wi-Fi connection and a comfortable workspace, where creative ideas
						bloom while sipping your favorite coffee.
					</p>
				</div>

				<div>
					<Image src={PersonInsideCoffeeShop} alt="person inside coffee shop" />
					<h3>Comfortable and Friendly Room</h3>
					<p>
						Find the perfect place to gather, work or relax with friends in a
						warm and friendly atmosphere. Our spaces are designed to create a
						pleasant experience.
					</p>
				</div>

				<div>
					<Image src={Menu} alt="menu" />
					<h3>Creative and Innovative Menu</h3>
					<p>
						There is always something new to try on every visit. From specialty
						coffees to delicious snacks, our menu is designed to satisfy a
						variety o tastes.
					</p>
				</div>
			</div>
		</section>
	);
};
export default Features;
