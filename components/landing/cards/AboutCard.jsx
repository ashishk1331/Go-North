import Box from "./Box";
import Image from "next/image";
import GradientTwo from "/public/grad_two.svg";
import Ashish from "/public/ashish.jpg";
import Anurag from "/public/anurag.jpg";
import { TwitterLogo, GithubLogo, Check } from "@phosphor-icons/react/dist/ssr";

const FEATURES = [
	{
		name: "A Small Team",
		description:
			"We want to concentrate on products rather than on gathering a crowd. Also, it all started from our dorm rooms and our laptops.",
	},
	{
		name: "Want our design sense",
		description:
			"We would love to collaborate with you and help you convert your ideas to reality. Hire us!",
	},
];

const PROFILES = [
	{
		name: "Ashish Khare",
		title: "Founder",
		avatar: Ashish,
		socials: {
			twitter: "https://twitter.com/ashishk1331",
			github: "https://github.com/ashishk1331",
		},
	},
	{
		name: "Anurag Srivastav",
		title: "Co-Founder",
		avatar: Anurag,
		socials: {
			twitter: "https://twitter.com/itsAnurag_sri",
			github: "https://github.com/anurag-327",
		},
	},
];

export default function AboutBox() {
	return (
		<Box className="relative lg:row-span-2">
			<div className="absolute -bottom-48 scale-[1.75] left-0 w-full -z-10 blur-xl -rotate-[75deg]">
				<Image
					src={GradientTwo}
					alt="background gradient image"
					className="h-full object-cover"
				/>
			</div>
			<div>
				<h2 className="text-xs leading-7 text-voilet">About Us</h2>
				<p className="mt-2 text-xl tracking-tight sm:text-2xl">
					A simple two-people team
				</p>
				<p className="mt-6 text-sm leading-8">
					We love making interfaces and websites that strike the user,
					that this feels good and smooth. We love the build process,
					because all you can do is watch bundler compiling resources.
					It's the zen of web bulding.
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

			<div className="my-8 flex flex-col gap-y-8">
				<p className="mt-2 text-xl tracking-tight sm:text-2xl">
					Team Members
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
					{PROFILES.map((person, index) => (
						<div
							key={index}
							className="grid sm:flex sm:items-center gap-y-3 gap-x-4"
						>
							<Image
								className="rounded-lg w-20 aspect-square"
								src={person.avatar}
								alt="Avatar for Ashish Khare."
							/>
							<div className="sm:flex sm:flex-col sm:h-full">
								<div>
									<h3 className="font-medium">
										{person.name}
									</h3>
									<p className="mt-1 text-xs uppercase text-gray-200">
										{person.title}
									</p>
								</div>
								<div className="mt-2 sm:mt-auto space-x-2.5">
									<a
										className="inline-flex justify-center items-center text-gray-500 rounded-full hover:text-gray-800"
										href={person.socials.twitter}
									>
										<TwitterLogo
											className="flex-shrink-0 size-3.5"
											weight="fill"
										/>
									</a>
									<a
										className="inline-flex justify-center items-center text-gray-500 rounded-full hover:text-gray-800"
										href={person.socials.github}
									>
										<GithubLogo
											className="flex-shrink-0 size-3.5"
											weight="fill"
										/>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Box>
	);
}
