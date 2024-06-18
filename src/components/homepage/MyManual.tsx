import MyManualArticles from "../MyManualArticles";
import { Carousel, CarouselContent } from "../ui/carousel";
import imgArticle01 from "@/assets/my_manual_1.webp";
import imgArticle02 from "@/assets/my_manual_2.webp";
import imgArticle03 from "@/assets/my_manual_3.webp";
import imgArticle04 from "@/assets/my_manual_4.webp";

export default function MyManual() {
	return (
		<section className="px-5 flex flex-col gap-6">
			<div>
				<h3 className="text-xs font-bold mb-2 uppercase">Meu Manual</h3>
				<h1 className="section-title">
					Seus guias pessoais de saúde. Especialistas, informações e tópicos
					relevantes sempre a sua disposição.
				</h1>
			</div>
			<Carousel>
				<CarouselContent className="gap-5 md:mx-auto">
					<MyManualArticles
						articleTitle="Tratamentos alternativos para queda capilar funcionam?"
						img={imgArticle01}
					/>
					<MyManualArticles
						articleTitle="Minoxidil: tudo o que você precisa saber sobre ele."
						img={imgArticle02}
					/>
					<MyManualArticles
						articleTitle="Calvície masculina ou Alopecia Androgenética: um guia."
						img={imgArticle03}
					/>
					<MyManualArticles
						articleTitle="Minoxidil: tudo o que você precisa saber sobre ele."
						img={imgArticle04}
					/>
				</CarouselContent>
			</Carousel>
		</section>
	);
}
