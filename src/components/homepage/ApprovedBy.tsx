import Image from "next/image";
import doctorProfile from "@/assets/doctor_profile.png";

export default function ApprovedBy() {
	return (
		<section className="flex flex-col md:flex-row gap-3 md:justify-center items-center px-5">
			<Image
				src={doctorProfile}
				alt="doctor-profile"
				className="rounded-full object-cover w-14 h-14 bg-green-800 bg-opacity-65"
			/>
			<div className="md:my-auto">
				<h3 className="font-bold text-green-950 text-sm text-center md:text-start">
					Aprovado por especialistas líderes em nossas áreas de tratamento
				</h3>
				<p className="text-sm font-thin text-green-950 text-center md:text-start leading-relaxed">
					Aqui na Manual você tem acesso a um time de médicos e farmacêuticos
					especialistar sempre que precisar.
				</p>
			</div>
		</section>
	);
}
