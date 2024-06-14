import Image from "next/image";
import ra1000 from "@/assets/ra_icon.png";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";
import CarouselItemRatingLayout from "../CarouselItemRatingLayout";

export default function CostumerRating() {
	return (
		<section className="bg-gray-200 p-5 flex flex-col gap-7">
			<div className="space-y-2">
				<h2 className="section-title">O que os nossos clientes dizem?</h2>
				<Image
					src={ra1000}
					alt="ra-1000"
					className="bg-gray-300 rounded-xl py-1 px-5 w-32"
				/>
			</div>

			<Carousel className="relative">
				<CarouselContent>
					<CarouselItemRatingLayout
						starRating={4}
						commentary="Foi tudo muito rápido e o preço é ótimo. Em menos de 3 dias o meu tratamento já estava em casa."
						username="Alexandre P."
					/>
					<CarouselItemRatingLayout
						starRating={5}
						commentary="Os meus resultados estão sendo muito positivos! Aqui eu sei que estou falando com profissionais que tratam seriamente o meu problema"
						username="Eduardo B."
					/>
					<CarouselItemRatingLayout
						starRating={5}
						commentary="A Manual está resolvendo meus problemas!"
						username="Marcelo F."
					/>
					<CarouselItemRatingLayout
						starRating={4}
						commentary="Eu estava sem tempo para ir ao dermatologista. Na Manual tive a oportunidade de ser avaliado e ainda recebi os medicamentos em casa."
						username="Yuri C."
					/>
					<CarouselItemRatingLayout
						starRating={3}
						commentary="O diferencial é que tem um médico avaliando e são tratamentos que funcionam."
						username="Silvio G."
					/>
					<CarouselItemRatingLayout
						starRating={5}
						commentary="Adorei o tratamento, desde o primeiro mês já senti diferença, e a equipe de atendimento é super atenciosa."
						username="Marcus V."
					/>
				</CarouselContent>

				<CarouselPrevious className="absolute top-1/2 left-1" />
				<CarouselNext className="absolute top-1/2 right-1" />
			</Carousel>
		</section>
	);
}
