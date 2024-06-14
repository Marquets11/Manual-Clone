"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export default function CharacteristicCardLayout({
	cardTitle,
	cardSubTitle,
	cardImage,
	delayToAnimate = 0,
}: {
	cardTitle: string;
	cardSubTitle?: string;
	cardImage: StaticImageData;
	delayToAnimate?: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 1.5, delay: delayToAnimate }}
			className="bg-gray-200 w-full max-h-[464px] rounded-xl px-5 pt-5 flex flex-col gap-3"
		>
			<h3 className="font-semibold text-xl text-black">{cardTitle}</h3>
			<p className="font-extralight text-green-950 text-justify leading-relaxed">
				{cardSubTitle}
			</p>
			<Image
				src={cardImage}
				alt={cardTitle}
				className="w-56 place-self-center"
			/>
		</motion.div>
	);
}
