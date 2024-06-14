import Image from "next/image";
import man_background_mobile from "@/assets/man_background_img_mobile.jpg";
import man_background from "@/assets/man_background_img.jpg";

export default function InitialSection() {
	return (
		<section className="relative">
			<Image
				src={man_background_mobile}
				alt="man-background-mobile"
				className="max-h-[500px] w-screen object-cover object-bottom bg-no-repeat sm:hidden"
			/>
			<Image
				src={man_background}
				alt="man-background"
				className="min-h-[600px] w-screen object-cover object-bottom bg-no-repeat max-sm:hidden"
			/>

			<div className="absolute top-0 sm:top-10 lg:top-1/4 left-0 sm:ml-5 sm:max-w-[500px] md:max-w-[560px] lg:max-w-[700px] m-2 px-6 py-5 flex flex-col gap-5 md:gap-8 bg-white bg-opacity-60 backdrop-blur-sm rounded-xl shadow-lg">
				<h1 className="text-4xl sm:text-5xl font-bold text-green-900 leading-snug">
					Saúde Masculina do jeito que você precisa.
				</h1>
				<p>
					Sem salas de espera ou conversas constrangedoras.
					<br />
					Apenas tratamentos baseados na ciência, entregues direto na sua porta,
					e com acompanhamento durante todo o processo.
				</p>
				<button className="py-4 sm:px-20 sm:place-self-start bg-green-950 hover:bg-green-200 duration-300 rounded-md group">
					<span className="font-bold font-mono text-white group-hover:text-green-950 duration-300">
						Começar agora
					</span>
				</button>
			</div>
		</section>
	);
}
