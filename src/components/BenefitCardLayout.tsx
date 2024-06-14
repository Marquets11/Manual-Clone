import { motion } from "framer-motion";
import { ElementType } from "react";

export default function BenefitCardLayout({
	iconCard: Icon,
	normalFontText,
	boldFontText,
	delayToAnimate = 0,
}: {
	iconCard: ElementType;
	normalFontText?: string;
	boldFontText?: string;
	delayToAnimate?: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ type: "spring", damping: 30, delay: delayToAnimate }}
			className="bg-gray-200 rounded-xl p-4 flex flex-col gap-3 min-w-64 max-w-64 min-h-40"
		>
			<Icon className="scale-125 mx-auto" />
			<p className="text-green-950 font-extralight text-center my-auto">
				{normalFontText} <span className="font-bold">{boldFontText}</span>
			</p>
		</motion.div>
	);
}
