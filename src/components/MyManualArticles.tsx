import Image, { StaticImageData } from "next/image";
import { CarouselItem } from "./ui/carousel";

export default function MyManualArticles({
	articleTitle,
	img,
}: {
	articleTitle: string;
	img: StaticImageData;
}) {
	return (
		<CarouselItem className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
			<main className="bg-green-300 bg-opacity-60 rounded-xl cursor-pointer opacity-75 hover:opacity-100 group">
				<div className="text-green-900 py-4 px-5 h-60 flex flex-col gap-5 justify-between">
					<div>
						<h3 className="uppercase font-thin text-sm">Queda Capilar</h3>
						<h2 className="font-bold text-2xl">{articleTitle}</h2>
					</div>
					<h4 className="font-semibold text-sm">Equipe médica</h4>
				</div>
				<Image
					src={img}
					alt={articleTitle}
					className="max-h-[300px] object-cover w-full rounded-b-xl group-hover:scale-105 group-hover:rounded-3xl duration-700"
				/>
			</main>
		</CarouselItem>
	);
}
