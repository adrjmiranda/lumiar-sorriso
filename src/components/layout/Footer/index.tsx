import {
	Instagram,
	Facebook,
	Linkedin,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className='bg-bg-dark text-slate-300 pt-20 pb-10'>
			<div className='container mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
					<div className='lg:col-span-1'>
						<a
							href='#inicio'
							className='text-2xl font-display font-bold text-white flex items-center gap-2 mb-8'
						>
							<div className='w-10 h-10 bg-premium-gold rounded-full flex items-center justify-center'>
								<span className='text-white'>LS</span>
							</div>
							<span>Lumiar Sorriso</span>
						</a>
						<p className='text-slate-400 leading-relaxed mb-8'>
							Referência em odontologia estética e funcional. Transformamos
							sorrisos com o que há de mais moderno na tecnologia mundial.
						</p>
						<div className='flex gap-4'>
							<a
								href='#'
								className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-premium-gold hover:text-white transition-all text-slate-300'
							>
								<Instagram size={20} />
							</a>
							<a
								href='#'
								className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-premium-gold hover:text-white transition-all text-slate-300'
							>
								<Facebook size={20} />
							</a>
							<a
								href='#'
								className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-premium-gold hover:text-white transition-all text-slate-300'
							>
								<Linkedin size={20} />
							</a>
						</div>
					</div>

					<div>
						<h4 className='text-white font-bold text-lg mb-8 uppercase tracking-wider'>
							Links Rápidos
						</h4>
						<ul className='space-y-4'>
							<li>
								<a
									href='#inicio'
									className='hover:text-premium-gold transition-colors'
								>
									Início
								</a>
							</li>
							<li>
								<a
									href='#servicos'
									className='hover:text-premium-gold transition-colors'
								>
									Serviços
								</a>
							</li>
							<li>
								<a
									href='#sobre'
									className='hover:text-premium-gold transition-colors'
								>
									Nossa Clínica
								</a>
							</li>
							<li>
								<a
									href='#depoimentos'
									className='hover:text-premium-gold transition-colors'
								>
									Depoimentos
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-white font-bold text-lg mb-8 uppercase tracking-wider'>
							Serviços
						</h4>
						<ul className='space-y-4'>
							<li>Implantes Dentários</li>
							<li>Ortodontia Invisível</li>
							<li>Facetas de Porcelana</li>
							<li>Odontopediatria</li>
							<li>Estética Orofacial</li>
						</ul>
					</div>

					<div>
						<h4 className='text-white font-bold text-lg mb-8 uppercase tracking-wider'>
							Contato
						</h4>
						<ul className='space-y-6'>
							<li className='flex gap-4'>
								<Phone className='text-premium-gold flex-shrink-0' />
								<span>(11) 99999-9999</span>
							</li>
							<li className='flex gap-4'>
								<Mail className='text-premium-gold flex-shrink-0' />
								<span>contato@lumiarsorriso.com.br</span>
							</li>
							<li className='flex gap-4'>
								<MapPin className='text-premium-gold flex-shrink-0' />
								<span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</span>
							</li>
						</ul>
					</div>
				</div>

				<div className='border-t border-white/5 pt-10 flex flex-col md:row-reverse md:flex-row justify-between items-center gap-6'>
					<p className='text-sm text-slate-500'>
						© 2026 Clínica Lumiar Sorriso. Todos os direitos reservados.
					</p>
					<div className='flex gap-8 text-sm'>
						<a
							href='#'
							className='hover:text-white'
						>
							Política de Privacidade
						</a>
						<a
							href='#'
							className='hover:text-white'
						>
							Termos de Uso
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
