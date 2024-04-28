import Box from './Box';
import Image from "next/image";
import GradientOne from "/public/grad_one.svg";
import { Check, CaretRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const FEATURES = [
	{
		name: "Next.js and Typescript.",
		description:
			"All templates are made using Next.js and Typescript. So, that you can directly drop in the pages to start working.",
	},
	{
		name: "3 years of updates",
		description:
			"Every purchased template will be receiving updates for 3 years straight. You'll never run into obsolete design or coding patterns.",
	},
	{
		name: "Wide Range.",
		description:
			"We'll be expanding the library to incorporate designs for every domain. Feel free to ask for design!",
	},
];

export default function DetailsBox() {
	return (
		<Box className="relative lg:row-span-2">
			<div className="absolute -bottom-48 scale-150 left-0 w-full -z-10 blur-xl -rotate-[30deg]">
				<Image
					src={GradientOne}
					alt="background gradient image"
					className="h-full object-cover"
				/>
			</div>
			<div>
				<h2 className="text-xs leading-7 text-voilet">
					Templates zone
				</h2>
				<p className="mt-2 text-xl tracking-tight sm:text-2xl">
					Deliver faster with templates
				</p>
				<p className="mt-6 text-sm leading-8">
					Want to start your projects but don't to spend time building
					the landing page again for the project. Try one of our
					templates!
				</p>
			</div>
			<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
				{FEATURES.map((feature) => (
					<div key={feature.name} className="relative pl-9">
						<dt className="inline font-medium text-voilet">
							<Check
								className="absolute left-1 top-1 h-5 w-5 text-voilet"
								aria-hidden="true"
							/>
							{feature.name}
						</dt>
						<br />
						<dd className="inline text-white text-sm">
							{feature.description}
						</dd>
					</div>
				))}
			</dl>
			<div className="mt-8">
				<a href="/templates">
					<span className="w-fit flex items-center gap-x-2 text-black font-medium lg:hover:gap-x-4 transition-all duration-800 p-2 px-3 bg-voilet rounded">
						Browse All
						<ArrowRight
							className="size-4"
							weight="bold"
							className="fill-black"
						/>
					</span>
				</a>
			</div>
		</Box>
	);
}