import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Circle } from "@phosphor-icons/react/dist/ssr";
import Topo from "/public/topography.svg";
import Image from "next/image";

export default function (props) {
	return (
		<header className="relative w-full flex items-center justify-between px-4 py-8 overflow-hidden">
			<Logo label="left" />
			<Logo label="projects" />
			<Logo label="go north" />
			<Logo label="contact" />
			<Logo label="right" />
			<Image src={Topo} alt="topography map" className="absolute" />
		</header>
	);
}

function Logo(props) {
	return (
		<span className="relative uppercase flex items-center gap-1 z-10 font-medium">
			<ArrowUpRightIcon />
			{props.label}
			<Circle weight="fill" className="absolute top-0 right-0 translate-x-full w-2 h-2" />
		</span>
	);
}
