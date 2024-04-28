import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Box from "./Box";

export default function TemplateCard({ imageSource, title }){
	return (
		<Box className="relative group h-56 lg:h-auto">
			<div className="absolute inset-0 w-full -z-10 lg:group-hover:scale-125 transition-all duration-700">
				<Image
					src={imageSource}
					alt="Screenshot image of Anubhuti website."
					className="h-full object-cover"
				/>
			</div>
			<div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black -z-10" />
			<div className="h-full flex flex-col-reverse z-20">
				<a href="https://www.anubhuti24.in/">
					<span className="w-fit flex items-center gap-x-2 font-medium lg:hover:gap-x-4 transition-all duration-800 p-2 px-3 rounded">
						{title}
						<ArrowRight
							className="size-4"
							weight="bold"
							className="fill-voilet"
						/>
					</span>
				</a>
			</div>
		</Box>		
	)
}