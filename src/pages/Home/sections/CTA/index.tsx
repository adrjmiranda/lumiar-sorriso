import { motion } from "framer-motion";

export default function CTA() {
	return (
		<section className='py-24 relative overflow-hidden'>
			<div className='absolute inset-0 bg-primary z-0'>
				<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
				<div className='absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-[120px]' />
				<div className='absolute -top-24 -right-24 w-96 h-96 bg-premium-gold/20 rounded-full blur-[120px]' />
			</div>

			<div className='container mx-auto px-6 relative z-10 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					className='max-w-4xl mx-auto'
				>
					<h2 className='text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight'>
						Pronto para transformar <br />
						seu <span className='text-premium-gold'>melhor sorriso?</span>
					</h2>
					<p className='text-xl text-slate-300 mb-12'>
						Agende uma avaliação personalizada com nossos especialistas e
						descubra como a tecnologia e o cuidado podem mudar sua vida.
					</p>
					<div className='flex flex-col sm:flex-row justify-center gap-6'>
						<button className='bg-premium-gold text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-premium-gold/20'>
							Agendar Agora
						</button>
						<button className='border-2 border-white/20 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/5 transition-all'>
							Falar via WhatsApp
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
