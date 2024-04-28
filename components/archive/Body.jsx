import Ashish from "/public/ashish.jpg";
import Anurag from "/public/anurag.jpg";
import { Circle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function (props) {
	return (
		<div className="relative flex items-center gap-16 my-12 overflow-hidden">
			<Profile_Ashish />
			<Profile_Anurag />
			<Arrow />
		</div>
	);
}

function Profile_Ashish(props) {
	return (
		<div className="w-full flex flex-col items-left gap-2">
			<div className="flex items-center gap-2">
				<span className="font-medium text-light_blue">
					Ashish Khare
				</span>
				<Circle weight="fill" className="h-2 w-2" />
				<span>Partner</span>
				<Circle weight="fill" className="h-2 w-2" />
				<span className="font-medium text-light_blue">Robber</span>
			</div>
			<div className="relative rounded-md overflow-hidden w-full">
				<Image
					src={Ashish}
					alt="Portrait of Ashish."
					className="w-full object-cover aspect-square"
				/>
				<div className="h-full aspect-square rounded-full bg-light_blue absolute left-0 -translate-x-1/2 top-0 blur-3xl mix-blend-soft-light opacity-25" />
			</div>
		</div>
	);
}

function Profile_Anurag(props) {
	return (
		<div className="w-full flex flex-col items-left gap-2">
			<div className="flex flex-row-reverse items-center gap-2">
				<span className="font-medium text-light_blue">
					Anurag Srivastav
				</span>
				<Circle weight="fill" className="h-2 w-2" />
				<span>Partner</span>
				<Circle weight="fill" className="h-2 w-2" />
				<span className="font-medium text-light_blue">Realist</span>
			</div>
			<div className="relative rounded-md overflow-hidden w-full">
				<Image
					src={Anurag}
					alt="Portrait of Ashish."
					className="w-full object-cover aspect-square"
				/>
				<div className="h-full aspect-square rounded-full bg-light_blue absolute right-0 translate-x-1/2 top-0 blur-3xl mix-blend-soft-light opacity-25" />
				{/*<div className="h-full aspect-square rounded-full bg-maroon absolute right-0 translate-x-1/2 top-0 blur-3xl mix-blend-soft-light opacity-35" />*/}
			</div>
		</div>
	);
}

function Arrow(props) {
	return (
		<svg
			className="absolute inset-0 w-full h-full fill-transparent mix-blend-color-dodge stroke-light_blue"
			width="1092"
			height="776"
			viewBox="0 0 1092 776"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g>
				<path
					d="M188.685 -110.833L188.685 -110.833C184.813 -101.481 183.802 -91.1914 185.781 -81.2654C187.76 -71.3395 192.64 -62.2239 199.802 -55.0727L363.653 108.778L33.1186 439.312C14.6858 457.745 4.33046 482.745 4.3305 508.813C4.3304 534.881 14.6859 559.881 33.1187 578.314L366.481 911.677C384.914 930.11 409.914 940.465 435.982 940.465C462.05 940.465 487.051 930.11 505.483 911.677L836.018 581.143L999.871 744.996C1007.03 752.148 1016.14 757.017 1026.06 758.988C1035.98 760.959 1046.26 759.945 1055.61 756.073C1064.96 752.207 1072.95 745.655 1078.57 737.246C1084.2 728.837 1087.2 718.949 1087.21 708.833V708.831L1087.21 -91.2374C1087.21 -97.9586 1085.89 -104.615 1083.32 -110.825C1080.75 -117.035 1076.98 -122.678 1072.23 -127.431C1067.47 -132.183 1061.83 -135.952 1055.62 -138.523C1049.41 -141.093 1042.76 -142.414 1036.04 -142.41C1036.03 -142.41 1036.03 -142.41 1036.03 -142.41L235.967 -142.411C225.846 -142.416 215.95 -139.419 207.533 -133.797C199.117 -128.176 192.557 -120.184 188.685 -110.833Z"
					strokeWidth="8"
				/>
			</g>
		</svg>
	);
}
