import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section
			id='inicio'
			className='relative h-screen flex items-center overflow-hidden'
		>
			{/* Background Image / Overlay */}
			<div className='absolute inset-0 z-0'>
				<img
					src='https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop'
					alt='Clínica Odontológica Premium'
					className='w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-gradient-to-r from-bg-dark/80 to-bg-dark/20' />
			</div>

			<div className='container mx-auto px-6 relative z-10 text-white'>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className='max-w-2xl'
				>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className='inline-block text-premium-gold font-bold tracking-widest uppercase mb-4'
					>
						Lumiar Sorriso
					</motion.span>
					<h1 className='text-5xl md:text-7xl font-display font-black leading-tight mb-6'>
						Transformamos Sorrisos, <br />
						<span className='text-premium-gold'>Elevamos Vidas</span>
					</h1>
					<p className='text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light'>
						Experiência exclusiva em saúde bucal com tecnologia suíça e
						atendimento humanizado para o seu bem-estar e autoestima.
					</p>
					<div className='flex flex-col sm:flex-row gap-4'>
						<button className='bg-premium-gold text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-premium-gold/30 transition-all'>
							Agendar Avaliação
						</button>
						<button className='border-2 border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all'>
							Nossos Serviços
						</button>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className='mt-12 flex items-center gap-6'
					>
						<div className='flex -space-x-4'>
							{[1, 2, 3, 4].map((i) => (
								<div
									key={i}
									className='w-12 h-12 rounded-full border-2 border-primary bg-slate-200 overflow-hidden'
								>
									<img
										src={`https://i.pravatar.cc/150?u=${i + 10}`}
										alt='Paciente'
									/>
								</div>
							))}
						</div>
						<p className='text-sm md:text-base text-slate-400'>
							<span className='text-white font-bold'>+5.000</span> sorrisos
							transformados com excelência.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
