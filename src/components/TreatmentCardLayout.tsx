"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export default function TreatmentCardLayout({
	titleCard,
	descriptionCard,
	imageCard,
}: {
	titleCard: string;
	descriptionCard: string;
	imageCard: StaticImageData;
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8, delay: 0.5 }}
			className="bg-gray-200 rounded-xl p-5 flex flex-col gap-5"
		>
			<Image src={imageCard} alt={titleCard} className="w-96 md:w-64 mx-auto" />
			<h2 className="font-bold mx-auto text-2xl text-green-950">{titleCard}</h2>
			<p className="font-thin text-green-950 text-center">{descriptionCard}</p>
			<button className="bg-transparent border-2 border-green-950 rounded-full hover:scale-90 hover:bg-green-950 duration-300 group p-3">
				<span className="text-green-950 font-bold group-hover:text-gray-200">
					Veja os tratamentos
				</span>
			</button>
		</motion.div>
	);
}
