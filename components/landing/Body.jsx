import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Circle } from "@phosphor-icons/react/dist/ssr";

export default function (props) {
	return (
		<div className="w-full min-h-screen flex flex-col justify-around">
			<div className="flex flex-col items-center space-y-6">
				<span className="relative uppercase flex items-center gap-1 z-10 text-2xl">
					<ArrowUpRightIcon className="w-6 h-6"/>
					Go North
					<Circle
						weight="fill"
						className="absolute top-0 right-0 translate-x-full w-2 h-2 animate-pulse"
					/>
				</span>
			</div>
		</div>
	);
}
