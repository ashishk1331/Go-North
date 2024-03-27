import { User } from "@phosphor-icons/react/dist/ssr";
import Ashish from "/public/ashish.jpg";

export default function (props) {
	return (
		<header className="fixed top-0 left-0 w-full flex items-center justify-between p-4">
			<ul className="space-y-5">
				<li className="max-w-lg flex items-center gap-x-2 sm:gap-x-4 me-11">
					<span className="w-10 aspect-square rounded-full bg-gray-200 overflow-hidden">
						{/*<User className="fill-black" />*/}
						<img src={Ashish.src} alt="" className="w-full object-fit" />
					</span>
					{/* Card */}
					<div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3">
						<span className="text-sm">Anurag add more! This looks empty.</span>
					</div>
					{/* End Card */}
				</li>
			</ul>
		</header>
	);
}
