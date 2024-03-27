import { TwitterLogo, At } from "@phosphor-icons/react/dist/ssr";
import Ashish from "/public/ashish.jpg";

export default function (props) {
	return (
		<header className="fixed top-0 left-0 w-full flex items-center justify-around sm:justify-between p-4 z-30 text-xs">
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
						asnuragsri
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
			</div>
		</header>
	);
}

/*
			<ul className="space-y-5">
				<li className="max-w-lg flex items-center gap-x-2 sm:gap-x-4 me-11">
					<span className="w-10 aspect-square rounded-full bg-gray-200 overflow-hidden">
						<User className="fill-black" />
						<img src={Ashish.src} alt="" className="w-full object-fit" />
					</span>
					<div className="bg-[#101010] border border-gray-200 rounded-2xl p-4 space-y-3">
						<span className="text-sm">Anurag add more! This looks empty.</span>
					</div>
				</li>
			</ul>
*/
