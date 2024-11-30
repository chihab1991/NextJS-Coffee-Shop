import Image from "next/image";
import Americano from "./../../public/img/Rectangle_4.webp";
import Espresso from "./../../public/img/Rectangle_6.webp";
import Latte from "./../../public/img/Rectangle_8.webp";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { lobster } from "./../app/fonts";
import Link from "next/link";

const Menu = () => {
	return (
		<section id="menu" className="bg-pale-orange text-rich-black">
			<div className="max-w-[1512px] mx-auto  py-12 lg:py-20  px-6 sm:px-12 lg:px-16 ">
				<h2
					className={`${lobster.className} text-center text-3xl md:text-4xl lg:text-5xl mb-12`}
				>
					Our Menu
				</h2>
				<div className="text-right mb-8 xl:mb-12">
					<Link href="#" className="bg-orange xl:text-xl text-white rounded-xl p-4 xl:px-8">
						See All Products
					</Link>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
					<div className="p-5 rounded-2xl bg-white">
						<Image
							src={Americano}
							alt="americano coffee"
							className="w-full rounded mb-4"
						/>
						<h3 className="text-2xl xl:text-3xl xl:mb-2 font-extrabold">Americano Coffee</h3>
						<p className="flex items-center pb-2">
							<FaStar className="text-[27px] text-orange mr-2" />{" "}
							<span className="text-dark-gray text-xl">5.9</span>
						</p>
						<p className="text-dark-gray text-[15px] xl:text-lg leading-5 xl:leading-6 mb-5 xl:mb-8">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
							reprehenderit porro nemo veritatis odio excepturi nobis atque sint
							dolores repellendus?
						</p>

						<div className="flex justify-between items-center">
							<p className="text-3xl xl:text-4xl font-semibold">$ 13.6</p>
							<Link
								href="#"
								className="border border-orange rounded-xl text-orange rounded px-4 xl:px-5 py-2 xl:py-4 flex items-center"
							>
								<FiShoppingCart className="text-3xl mr-3 xl:mr-4" />
								<span className="text-sm xl:text-xl">Add to Cart</span>
							</Link>
						</div>
					</div>

					<div className="p-5 rounded-2xl bg-white">
						<Image
							src={Espresso}
							alt="espresso coffee"
							className="rounded mb-4"
						/>
						<h3 className="text-2xl xl:text-3xl xl:mb-2 font-extrabold">Espresso Coffee</h3>
						<p className="flex items-center pb-2">
							<FaStar className="text-[27px] text-orange mr-2" />{" "}
							<span className="text-dark-gray text-xl">5.9</span>
						</p>
						<p className="text-dark-gray text-[15px] xl:text-lg leading-5 xl:leading-6 mb-5 xl:mb-8">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
							reprehenderit porro nemo veritatis odio excepturi nobis atque sint
							dolores repellendus?
						</p>

						<div className="flex justify-between items-center">
							<p className="text-3xl xl:text-4xl font-semibold">$ 18.1</p>
							<Link
								href="#"
								className="border border-orange rounded-xl text-orange rounded px-4 xl:px-5 py-2 xl:py-4 flex items-center"
							>
								<FiShoppingCart className="text-3xl mr-3 xl:mr-4" />{" "}
								<span className="text-sm xl:text-xl">Add to Cart</span>
							</Link>
						</div>
					</div>

					<div className="p-5 rounded-2xl bg-white">
						<Image src={Latte} alt="latte coffee" className="rounded mb-4" />
						<h3 className="text-2xl xl:text-3xl xl:mb-2 font-extrabold">Latte Coffee</h3>
						<p className="flex items-center pb-2">
							<FaStar className="text-[27px] text-orange mr-2" />{" "}
							<span className="text-dark-gray text-xl">5.9</span>
						</p>
						<p className="text-dark-gray text-[15px] xl:text-lg leading-5 xl:leading-6 mb-5 xl:mb-8">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
							reprehenderit porro nemo veritatis odio excepturi nobis atque sint
							dolores repellendus?
						</p>

						<div className="flex justify-between items-center">
							<p className="text-3xl xl:text-4xl font-semibold">$ 15.5</p>
							<Link
								href="#"
								className="border border-orange rounded-xl text-orange rounded px-4 xl:px-5 py-2 xl:py-4 flex items-center"
							>
								<FiShoppingCart className="text-3xl mr-3 xl:mr-4" />{" "}
								<span className="text-sm xl:text-xl">Add to Cart</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Menu;
