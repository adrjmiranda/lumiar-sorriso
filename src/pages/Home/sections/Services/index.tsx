import { motion } from "framer-motion";
import { Sparkles, Activity, Sun, Heart } from "lucide-react";

const services = [
	{
		title: "Implantes Dentários",
		description:
			"Restaurando sua funcionalidade e confiança com tecnologia de integração suíça.",
		icon: <Activity className='w-8 h-8 text-premium-gold' />,
		image:
			"https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600",
	},
	{
		title: "Ortodontia Estética",
		description:
			"Alinhadores invisíveis e aparelhos cerâmicos para um tratamento discreto.",
		icon: <Sparkles className='w-8 h-8 text-premium-gold' />,
		image:
			"https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600",
	},
	{
		title: "Clareamento a Laser",
		description:
			"Sorriso brilhante de forma rápida, indolor e com resultados imediatos.",
		icon: <Sun className='w-8 h-8 text-premium-gold' />,
		image:
			"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600",
	},
	{
		title: "Odontopediatria",
		description:
			"Cuidado humanizado e lúdico para que os pequenos amem cuidar do sorriso.",
		icon: <Heart className='w-8 h-8 text-premium-gold' />,
		image:
			"https://images.unsplash.com/photo-1445510491599-c391e8046a68?q=80&w=600",
	},
];

export default function Services() {
	return (
		<section
			id='servicos'
			className='py-24 bg-white'
		>
			<div className='container mx-auto px-6'>
				<div className='text-center max-w-3xl mx-auto mb-20'>
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						className='text-premium-gold font-bold tracking-widest uppercase mb-4 block'
					>
						Nossos Serviços Premium
					</motion.span>
					<h2 className='text-4xl md:text-5xl font-display font-black text-primary mb-6'>
						Soluções Personalizadas para sua Estética e Saúde
					</h2>
					<p className='text-lg text-slate-500'>
						Tratamentos com precisão milimétrica e tecnologia de ponta para
						resultados naturais.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ y: -10 }}
							className='bg-bg-light rounded-3xl overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500'
						>
							<div className='h-48 overflow-hidden'>
								<img
									src={service.image}
									alt={service.title}
									className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
								/>
							</div>
							<div className='p-8'>
								<div className='mb-6'>{service.icon}</div>
								<h3 className='text-2xl font-bold mb-4 text-primary'>
									{service.title}
								</h3>
								<p className='text-slate-600 leading-relaxed mb-6'>
									{service.description}
								</p>
								<button className='text-premium-gold font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform'>
									Saiba Mais →
								</button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
