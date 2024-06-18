import Image from "next/image";
import {
	FaCaretRight,
	FaDiscord,
	FaFacebook,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";
import raIcon from "@/assets/ra_icon.png";

export default function Footer() {
	return (
		<section className="bg-green-950 text-white px-5 pt-8 pb-12 flex flex-col gap-4">
			<main>
				<h2 className="uppercase tracking-widest font-bold text-lg">
					Ficou alguma dúvida?
				</h2>
				<div className="text-xs sm:text-sm p-2 space-y-2 hover:bg-gray-200 hover:bg-opacity-20 rounded-sm cursor-pointer">
					<h3 className="flex justify-between items-center">
						Visite nossa central de ajuda <FaCaretRight />
					</h3>
					<p className="opacity-50">Encontre respostas para suas perguntas</p>
				</div>
			</main>
			<hr />
			<main className="flex flex-col gap-5">
				<div>
					<h2 className="footer-nav-title">Tratamentos</h2>
					<ul className="space-y-1">
						<li className="footer-nav-content">
							Queda Capilar <FaCaretRight />
						</li>
						<li className="footer-nav-content">
							Emagrecimento <FaCaretRight />
						</li>
						<li className="footer-nav-content">
							Disfunção Erétil <FaCaretRight />
						</li>
						<li className="footer-nav-content">
							Sono <FaCaretRight />
						</li>
					</ul>
				</div>
				<div>
					<h2 className="footer-nav-title">Manual</h2>
					<ul className="space-y-1">
						<li className="footer-nav-content">
							Home <FaCaretRight />
						</li>
						<li className="footer-nav-content">
							Quem Somos <FaCaretRight />
						</li>
						<li className="footer-nav-content">
							Perguntas Frequentes <FaCaretRight />
						</li>
						<li className="footer-nav-content">
							Saiba Mais <FaCaretRight />
						</li>
					</ul>
				</div>
				<hr />
				<div className="flex gap-5 justify-around">
					<FaFacebook className="footer-social-media-icon" />
					<FaInstagram className="footer-social-media-icon" />
					<FaDiscord className="footer-social-media-icon" />
					<FaTwitter className="footer-social-media-icon" />
				</div>
				<div className="flex flex-col gap-3 text-sm w-40">
					<a href="/" className="hover:text-green-300 duration-200">
						Política de privacidade
					</a>
					<a href="/" className="hover:text-green-300 duration-200">
						Termos de condições
					</a>
				</div>
				<div className="border p-4 rounded-r-full text-xs sm:text-sm cursor-pointer max-w-80">
					<p>Seja uma farmácia credenciada:</p>
					<a href="/" className="hover:text-green-300 duration-200">
						sejaumafarmaciaparceira@manual.com.br
					</a>
				</div>
				<div className="space-y-2 text-sm text-justify">
					<p className="opacity-55">
						A <span className="uppercase">Manual</span> não é uma farmácia.
						Todos produtos adquiridos são manipulados pelas farmácias
						credenciadas de acordo com as normas da Anvisa.
					</p>
					<p className="opacity-55">
						Copyright 2024 Manual™. Todos os direitos reservados.
					</p>
					<Image
						src={raIcon}
						alt="ra-icon"
						className="w-32 bg-gray-300 py-1 px-5 rounded-lg"
					/>
				</div>
			</main>
		</section>
	);
}
