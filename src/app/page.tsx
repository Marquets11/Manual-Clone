import ApprovedBy from "@/components/homepage/ApprovedBy";
import BenefitsCards from "@/components/homepage/BenefitsCards";
import CharacteristicsCards from "@/components/homepage/CharacteristicsCards";
import CostumerRating from "@/components/homepage/CostumerRating";
import InitialSection from "@/components/homepage/InitialSection";
import TreatmentsCards from "@/components/homepage/TreatmentsCards";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col gap-7">
			<InitialSection />
			<BenefitsCards />
			<hr className="mx-5" />
			<CharacteristicsCards />
			<hr className="mx-5" />
			<TreatmentsCards />
			<hr className="mx-5" />
			<ApprovedBy />
			<CostumerRating />
		</div>
	);
}
