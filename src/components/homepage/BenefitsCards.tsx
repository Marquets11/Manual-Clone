"use client";
import {
	FaBoxOpen,
	FaPlusSquare,
	FaHistory,
	FaRegComments,
} from "react-icons/fa";
import BenefitCardLayout from "../BenefitCardLayout";

export default function BenefitsCards() {
	return (
		<section className="px-5 flex md:justify-around gap-2 overflow-auto scrollbar-none">
			<BenefitCardLayout
				iconCard={FaPlusSquare}
				normalFontText="Tratamentos elaborados e vendidos por farmácias de manipulação"
				boldFontText="certificadas pela Anvisa."
			/>
			<BenefitCardLayout
				iconCard={FaBoxOpen}
				normalFontText="Entrega"
				boldFontText="rápida e gratuita."
			/>
			<BenefitCardLayout
				iconCard={FaHistory}
				normalFontText="Planos flexíveis."
				boldFontText="Cancele quando quiser."
			/>
			<BenefitCardLayout
				iconCard={FaRegComments}
				normalFontText="Acompanhamento"
				boldFontText="clínico."
			/>
		</section>
	);
}
