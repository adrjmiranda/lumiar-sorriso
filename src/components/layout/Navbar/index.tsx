import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
	{ name: "Início", href: "#inicio" },
	{ name: "Serviços", href: "#servicos" },
	{ name: "Sobre", href: "#sobre" },
	{ name: "Depoimentos", href: "#depoimentos" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card py-4 shadow-md" : "bg-transparent py-6"}`}
		>
			<div className='container mx-auto px-6 flex justify-between items-center'>
				<a
					href='#inicio'
					className='text-2xl font-display font-bold text-primary flex items-center gap-2'
				>
					<div className='w-10 h-10 bg-premium-gold rounded-full flex items-center justify-center'>
						<span className='text-white'>LS</span>
					</div>
					<span
						className={
							isScrolled ? "text-primary" : "text-primary md:text-white"
						}
					>
						Lumiar Sorriso
					</span>
				</a>

				{/* Desktop Menu */}
				<div className='hidden md:flex items-center gap-8'>
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className={`font-medium transition-colors hover:text-premium-gold ${isScrolled ? "text-primary" : "text-white"}`}
						>
							{link.name}
						</a>
					))}
					<a
						href='#contato'
						className='bg-premium-gold text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-premium-gold/20'
					>
						Agendar Consulta
					</a>
				</div>

				{/* Mobile Toggle */}
				<button
					className='md:hidden text-primary'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? <X /> : <Menu />}
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className='md:hidden glass-card overflow-hidden'
					>
						<div className='flex flex-col gap-4 p-6'>
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className='text-lg font-medium text-primary'
									onClick={() => setIsMenuOpen(false)}
								>
									{link.name}
								</a>
							))}
							<a
								href='#contato'
								className='bg-premium-gold text-white px-6 py-3 rounded-full text-center font-bold'
							>
								Agendar Consulta
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
