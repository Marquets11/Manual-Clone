import { FaStar, FaRegStar } from "react-icons/fa";
import { CarouselItem } from "./ui/carousel";

export default function CarouselItemRatingLayout({
	starRating,
	commentary,
	username,
}: {
	starRating: number;
	commentary: string;
	username: string;
}) {
	return (
		<CarouselItem className="sm:basis-1/2 md:basis-1/3">
			<div className="h-72 rounded-xl bg-white py-5 px-8 flex flex-col gap-4 items-center justify-between">
				<div className="flex gap-1 text-green-800">
					{Array.from({ length: starRating }).map((_, index) => (
						<FaStar key={index} />
					))}
					{Array.from({ length: 5 - starRating }).map((_, index) => (
						<FaRegStar key={index} />
					))}
				</div>
				<p className="font-thin text-green-900 text-center">{commentary}</p>
				<h3 className="font-bold text-green-950 justify-self-end">
					{username}
				</h3>
			</div>
		</CarouselItem>
	);
}
