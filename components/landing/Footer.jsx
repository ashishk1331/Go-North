import { Copyright, TwitterLogo, At } from "@phosphor-icons/react/dist/ssr";

export default function (props) {
	return (
		<footer className="fixed bottom-0 p-4 w-full left-0 text-sm flex flex-col gap-y-3 sm:flex-row items-center justify-between transition-all">
			<span><Copyright className="inline" /> 2024 Go North. All rights reserved.</span>
			<span className="flex items-center space-x-3">
				<At />
				<TwitterLogo weight="fill" />
				<a
					href="https://twitter.com/AshishK1331"
					className="hover:underline"
				>
					ashishk
				</a>
				<a
					href="https://twitter.com/itsAnurag_sri"
					className="hover:underline"
				>
					asnuragsri
				</a>
			</span>
		</footer>
	);
}
