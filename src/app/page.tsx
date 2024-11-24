import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Features />
				<Menu />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
