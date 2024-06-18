import ApprovedBy from "@/components/homepage/ApprovedBy";
import BenefitsCards from "@/components/homepage/BenefitsCards";
import CharacteristicsCards from "@/components/homepage/CharacteristicsCards";
import CostumerRating from "@/components/homepage/CostumerRating";
import Footer from "@/components/homepage/Footer";
import InitialSection from "@/components/homepage/InitialSection";
import MyManual from "@/components/homepage/MyManual";
import OurPharmacies from "@/components/homepage/OurPharmacies";
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
			<MyManual />
			<hr className="mx-5" />
			<OurPharmacies />
			<Footer />
		</div>
	);
}
