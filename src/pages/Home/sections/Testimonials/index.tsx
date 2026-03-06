import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
	{
		text: "Fiz todo o meu tratamento de implantes e a experiência foi incrível. A tecnologia que eles usam é de outro mundo, não senti nada!",
		name: "Juliana Silva",
		role: "Empresária",
		image: "https://i.pravatar.cc/150?u=juliana",
	},
	{
		text: "Meus filhos adoram ir ao dentista agora. O atendimento de odontopediatria é maravilhoso e muito cuidadoso.",
		name: "Ricardo Santos",
		role: "Pai da Alice e Pedro",
		image: "https://i.pravatar.cc/150?u=ricardo",
	},
	{
		text: "O alinhamento invisível mudou meu sorriso sem ninguém perceber que eu estava em tratamento. Profissionais fantásticos!",
		name: "Marina Costa",
		role: "Arquiteta",
		image: "https://i.pravatar.cc/150?u=marina",
	},
];

export default function Testimonials() {
	return (
		<section
			id='depoimentos'
			className='py-24 bg-white overflow-hidden'
		>
			<div className='container mx-auto px-6'>
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						className='text-premium-gold font-bold tracking-widest uppercase mb-4 block'
					>
						Relatos Reais
					</motion.span>
					<h2 className='text-4xl md:text-5xl font-display font-black text-primary mb-6'>
						A Felicidade em Sorrir
					</h2>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{testimonials.map((t, index) => (
						<motion.div
							key={t.name}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: index * 0.2 }}
							className='glass-card p-10 rounded-3xl relative'
						>
							<Quote className='absolute top-8 right-8 text-premium-gold/20 w-12 h-12' />
							<p className='text-lg text-slate-600 mb-8 italic leading-relaxed'>
								"{t.text}"
							</p>
							<div className='flex items-center gap-4'>
								<img
									src={t.image}
									alt={t.name}
									className='w-16 h-16 rounded-full border-2 border-premium-gold'
								/>
								<div>
									<h4 className='font-bold text-primary'>{t.name}</h4>
									<p className='text-sm text-slate-500'>{t.role}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
