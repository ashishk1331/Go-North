import { Copyright } from "@phosphor-icons/react/dist/ssr";

export default function (props) {
	return (
		<footer className="fixed bottom-0 p-4 w-full left-0 text-xs flex flex-col gap-y-3 sm:flex-row items-center justify-between transition-all">
			<span><Copyright className="inline" /> 2024 Go North. All rights reserved.</span>
		</footer>
	);
}
