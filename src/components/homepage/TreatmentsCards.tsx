import TreatmentCardLayout from "../TreatmentCardLayout";
import hairFall from "@/assets/ed_hairfall.webp";
import lightFat from "@/assets/ed_lightfat.webp";
import disfuncional from "@/assets/ed_disfuncional.webp";
import sleepBetter from "@/assets/ed_sleepbetter.webp";

export default function TreatmentsCards() {
	return (
		<section className="px-5">
			<h3 className="text-xs font-bold mb-2 uppercase">Tratamentos</h3>
			<h1 className="section-title">
				Tratamentos baseados na ciência, personalizados para você
			</h1>
			<div className="mt-5 grid md:grid-cols-2 grid-rows-2 gap-4">
				<TreatmentCardLayout
					titleCard="Queda Capilar"
					descriptionCard="Agora queda de cabelo tem solução. Existem tratamentos comprovados clinicamente que são eficazes em 9/10 homens."
					imageCard={hairFall}
				/>
				<TreatmentCardLayout
					titleCard="Emagrecimento"
					descriptionCard="Crie hábitos saudáveis e emagreça com ajuda de medicações prescritas por médicos e acompanhamento com nutricionistas."
					imageCard={lightFat}
				/>
				<TreatmentCardLayout
					titleCard="Disfunção erétil"
					descriptionCard="Melhore o desempenho sexual com tratamentos comprovados e realizados com discrição - da prescrição à entrega."
					imageCard={disfuncional}
				/>
				<TreatmentCardLayout
					titleCard="Sono"
					descriptionCard="Melhore seu sono criando um plano personalizado com tratamentos cientificamente comprovados e acompanhamento de especialistas."
					imageCard={sleepBetter}
				/>
			</div>
		</section>
	);
}
