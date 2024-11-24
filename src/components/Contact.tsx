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
import { PiMapPinBold } from "react-icons/pi";
import { LuMail, LuPhoneCall } from "react-icons/lu";

const Contact = () => {
	return (
		<section id="contact">
			<div>
				<Image src={logo} alt="coffee shop logo" />

				<p>
					There are people who can&apos;t start their day without having a
					freshly brewed cup of coffee and we understand them
				</p>
				<div>
					<Link href="#">
						<FaXTwitter />
					</Link>
					<Link href="#">
						<FaFacebook />
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
						<FaTiktok />
					</Link>
				</div>
			</div>
			<div>
				<h3>Contact Us</h3>
				<p>
					<span>
						<PiMapPinBold />
					</span>
					72, Wall street, King Road, NY 20110
				</p>
				<p>
					<span>
						<LuPhoneCall />
					</span>
					800.275.8777
				</p>
				<p>
					<span>
						<LuMail />
					</span>
					ngopiloer@gmail.com
				</p>
			</div>
			<div>
				<h3>Subscribe To Newsletter</h3>
				<form>
					<input type="text" name="text" id="text" />
					<button type="submit">Subscribe</button>
				</form>
				<p>Sign up with your email address to receive news and updates.</p>
			</div>
		</section>
	);
};
export default Contact;
