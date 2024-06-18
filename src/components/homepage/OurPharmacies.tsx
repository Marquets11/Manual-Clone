"use client";
import genericPharmacies from "@/assets/generic_pharmacies.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurPharmacies() {
	return (
		<section className="bg-gray-200 rounded-md mx-5 p-5 flex flex-col gap-2 items-center text-green-900 font-thin text-center md:flex-row md:gap-6 lg:p-10 md:text-start">
			<Image src={genericPharmacies} alt="generic_pharmacies" />
			<main>
				<div className="my-4">
					<h3 className="font-bold md:text-xl">
						Conheça as farmácias credenciadas:
					</h3>
					<p className="font-semibold">
						A <span className="uppercase">Manual</span> não é uma farmácia.
						Todos produtos adquiridos são manipulados por farmácias credenciadas
						de acordo com as normas da Anvisa.
					</p>
				</div>
				<motion.div
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					className="pharmacy-info"
				>
					<h4 className="font-bold">
						De Freitas Zanqui Farmácia Personalizada Ltda
					</h4>
					<h5>CNPJ: 34.446.018/0001-33</h5>
					<h6>Resp. Técnico: Sonia Aparecida Fazan de Freitas Zanqui</h6>
				</motion.div>
				<motion.div
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					className="pharmacy-info"
				>
					<h4 className="font-bold">
						Roselis Farmácia e Laboratório de Manipulação
					</h4>
					<h5>CNPJ: 04.799.666/0001-02</h5>
					<h6>Resp. Técnico: Rozelis Aparecida Lopes</h6>
				</motion.div>
				<motion.div
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					className="pharmacy-info"
				>
					<h4 className="font-bold">Zanqui & Zanqui Fcia Drog Ltda</h4>
					<h5>CNPJ: 47.849.823/0004-00</h5>
					<h6>Resp. Técnico: Dr Fernando Pivato Alves Lima</h6>
				</motion.div>
				<motion.div
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					className="pharmacy-info"
				>
					<h4 className="font-bold">Zanqui & Zanqui Fcia Drog Ltda</h4>
					<h5>CNPJ: 47.849.823/0002-30</h5>
					<h6>Resp. Técnico: Anieli Xavier Neves</h6>
				</motion.div>
				<motion.div
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					className="pharmacy-info"
				>
					<h4 className="font-bold">Zanqui & Zanqui Fcia Drog Ltda</h4>
					<h5>CNPJ: 47.849.823/0001-50</h5>
					<h6>Resp. Técnico: Mauricio Augusto Cincotto</h6>
				</motion.div>

				<div className="my-4">
					<h5 className="font-bold">Seja uma farmácia credenciada:</h5>
					<a href="/" className="underline hover:text-green-500 max-sm:text-sm">
						sejafarmaciaparceira@manual.com.br
					</a>
					<p>
						Veja mais informações sobre todas as farmácias credenciais{" "}
						<a href="/" className="underline hover:text-green-500">
							aqui
						</a>
						.
					</p>
				</div>
			</main>
		</section>
	);
}
