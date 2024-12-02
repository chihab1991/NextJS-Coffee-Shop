import {lobster} from "./../app/fonts";

const Hero = () => {
	return (
		<section
			id="hero"
			className="bg-cover bg-center h-screen bg-[url('/img/jeremy-yap-hero-sm.webp')] md:bg-[url('/img/jeremy-yap-hero-md.webp')] text-center"
		>
			<h1
				className={`text-5xl w-3/4 sm:w-full mx-auto pt-44  md:pt-52 leading-snug  ${lobster.className} font-semibold`}
			>
				Relax & Enjoy Your Coffee
			</h1>
		</section>
	);
};
export default Hero;
