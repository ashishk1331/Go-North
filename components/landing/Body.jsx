import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Circle } from "@phosphor-icons/react/dist/ssr";
import A from "./Artwork.jsx";

export default function (props) {
	return (
		<div id="body" className="relative w-full min-h-screen flex flex-col justify-around overflow-hidden">
			<div className="flex flex-col items-center space-y-6">
				<span className="relative uppercase flex items-center gap-1 z-10 text-2xl">
					<ArrowUpRightIcon className="w-6 h-6" />
					Go North
					<Circle
						weight="fill"
						className="absolute top-0 right-0 translate-x-full w-2 h-2 animate-pulse"
					/>
				</span>
				<span className="z-10 ml-2">An India based design agency.</span>
			</div>
			<A />
		</div>
	);
}
