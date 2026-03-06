import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";

export default function Home() {
	return (
		<div className='min-h-screen'>
			<Navbar />
			<main>
				<Hero />
				<Services />
				<About />
				<Testimonials />
				<CTA />
			</main>
			<Footer />
		</div>
	);
}
