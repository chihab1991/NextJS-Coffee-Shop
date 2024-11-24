import Image from "next/image";
import Americano from "./../../public/img/Rectangle_4.webp";
import Espresso from "./../../public/img/Rectangle_6.webp";
import Latte from "./../../public/img/Rectangle_8.webp";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
const Menu = () => {
	return (
		<section id="menu">
			<h2>Our Menu</h2>
			<a href="#">See All Products</a>
			<div className="grid grid-cols-1">
				<div>
					<Image src={Americano} alt="americano coffee" />
					<h3>Americano Coffee</h3>
					<p>
						<FaStar /> <span>5.9</span>
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
						reprehenderit porro nemo veritatis odio excepturi nobis atque sint
						dolores repellendus?
					</p>

					<div className="flex justify-between items-center">
						<p>$ 13.6</p>
						<a href="#">
							<FiShoppingCart /> Add to Cart
						</a>
					</div>
				</div>

				<div>
					<Image src={Espresso} alt="espresso coffee" />
					<h3>Espresso Coffee</h3>
					<p>
						<FaStar /> <span>5.9</span>
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
						reprehenderit porro nemo veritatis odio excepturi nobis atque sint
						dolores repellendus?
					</p>

					<div className="flex justify-between items-center">
						<p>$ 18.1</p>
						<a href="#">
							<FiShoppingCart /> Add to Cart
						</a>
					</div>
				</div>

				<div>
					<Image src={Latte} alt="latte coffee" />
					<h3>Latte Coffee</h3>
					<p>
						<FaStar /> <span>5.9</span>
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
						reprehenderit porro nemo veritatis odio excepturi nobis atque sint
						dolores repellendus?
					</p>

					<div className="flex justify-between items-center">
						<p>$ 15.5</p>
						<a href="#">
							<FiShoppingCart /> Add to Cart
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Menu;
