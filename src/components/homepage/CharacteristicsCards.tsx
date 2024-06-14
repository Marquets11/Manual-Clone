import CharacteristicCardLayout from "../CharacteristicCardLayout";
import ed_phone from "@/assets/ed_phone.webp";
import ed_delivery from "@/assets/ed_delivery.webp";
import ed_support from "@/assets/ed_support.webp";

export default function CharacteristicsCards() {
	return (
		<section className="px-5">
			<h2 className="section-title">
				O jeito mais prático de cuidar da sua saúde
			</h2>
			<div className="mt-4 flex max-xl:flex-col justify-around gap-4">
				<CharacteristicCardLayout
					cardTitle="Consultas online"
					cardSubTitle="Em poucos minutos, você responde a um questionário de saúde para que os médicos possam realizar uma avaliação clínica do seu caso."
					cardImage={ed_phone}
				/>
				<CharacteristicCardLayout
					cardTitle="Tratamentos aprovados"
					cardSubTitle="Fórmulas manipuladas por farmácias autorizadas pela ANVISA, para você ter as melhores opções de tratamentos para o seu caso."
					cardImage={ed_delivery}
					delayToAnimate={0.3}
				/>
				<CharacteristicCardLayout
					cardTitle="Acompanhamento clínico"
					cardSubTitle="Suporte clínico ilimitado para que tenha a melhor experiência com seu tratamento.
        Se tiver dúvidas sobre as medicações, quiser orientações sobre efeitos colaterais ou precisar de ajuda, os especialistas estarão à disposição."
					cardImage={ed_support}
					delayToAnimate={0.6}
				/>
			</div>
		</section>
	);
}
