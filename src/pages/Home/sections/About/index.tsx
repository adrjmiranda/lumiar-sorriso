import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const highlights = [
	{
		title: "Tecnologia Digital 3D",
		description:
			"Scanners intraorais e planejamento digital para precisão absoluta.",
		icon: <Zap className='w-6 h-6' />,
	},
	{
		title: "Corpo Clínico Especializado",
		description: "Doutores e mestres com formação nas melhores universidades.",
		icon: <CheckCircle2 className='w-6 h-6' />,
	},
	{
		title: "Experiência de Spa",
		description:
			"Sedação consciente e aromaterapia para um tratamento relaxante.",
		icon: <ShieldCheck className='w-6 h-6' />,
	},
];

export default function About() {
	return (
		<section
			id='sobre'
			className='py-24 bg-bg-light'
		>
			<div className='container mx-auto px-6'>
				<div className='flex flex-col lg:flex-row gap-16 items-center'>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						className='flex-1 relative'
					>
						<div className='relative z-10 rounded-[3rem] overflow-hidden shadow-2xl'>
							<img
								src='https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop'
								alt='Nossa Clínica'
								className='w-full h-[600px] object-cover'
							/>
						</div>
						{/* Decors */}
						<div className='absolute -top-10 -right-10 w-64 h-64 bg-premium-gold/10 rounded-full z-0 blur-3xl' />
						<div className='absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full z-0 blur-3xl' />

						<div className='absolute bottom-10 -right-10 glass-card p-8 rounded-3xl shadow-2xl z-20 max-w-[250px]'>
							<p className='text-4xl font-display font-black text-premium-gold'>
								15+
							</p>
							<p className='text-primary font-bold'>Anos de dedicação</p>
							<p className='text-slate-500 text-sm mt-2'>
								Referência em odontologia de alta performance.
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						className='flex-1'
					>
						<span className='text-premium-gold font-bold tracking-widest uppercase mb-4 block'>
							Excelência que gera Confiança
						</span>
						<h2 className='text-4xl md:text-5xl font-display font-black text-primary mb-8 leading-tight'>
							Onde Tecnologia e <br />
							<span className='text-premium-gold'>Cuidado Humano</span> se
							Encontram
						</h2>
						<p className='text-lg text-slate-600 mb-10 leading-relaxed italic'>
							"Na Lumiar Sorriso, unimos o que há de mais moderno na odontologia
							mundial com um ambiente planejado para o seu conforto absoluto.
							Nossa equipe é composta por especialistas renomados em constante
							atualização."
						</p>

						<div className='space-y-8'>
							{highlights.map((item) => (
								<div
									key={item.title}
									className='flex gap-6'
								>
									<div className='shrink-0 w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-premium-gold'>
										{item.icon}
									</div>
									<div>
										<h4 className='text-xl font-bold text-primary mb-2'>
											{item.title}
										</h4>
										<p className='text-slate-500'>{item.description}</p>
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
