import { TwitterLogo, At, CaretRight } from "@phosphor-icons/react/dist/ssr";
import Ashish from "/public/ashish.jpg";

export default function (props) {
	return (
		<header
			className="absolute lg:fixed z-10 top-0 left-0 w-full flex items-center justify-around sm:justify-between p-4 text-xs"
		>
			<div className="flex flex-col items-left gap-y-3">
				<span className="flex items-center space-x-3">
					<At />
					<TwitterLogo weight="fill" />
					<a
						href="https://twitter.com/AshishK1331"
						className="hover:underline hover:text-voilet transition-colors"
					>
						ashishk
					</a>
					<a
						href="https://twitter.com/itsAnurag_sri"
						className="hover:underline hover:text-voilet transition-colors"
					>
						anuragsri
					</a>
				</span>
				<span>
					<a
						href="https://go-north-ten.vercel.app/"
						className="underline text-voilet"
					>
						another version
					</a>{" "}
					by anurag
				</span>
				<span className="hidden lg:inline-block">
					<a href="#body" className="underline text-voilet cursor-pointer">
						to top
					</a>
				</span>
			</div>
		</header>
	);
}
