import { MapPinIcon } from "@heroicons/react/24/solid";

export default function (props) {
	return <div className="w-full flex items-center justify-between p-12 px-24">
		<div className="w-fit flex flex-col items-left gap-4">
			<MapPinIcon />
			<p>123 Sample St, Sydney NSW 2000 AU</p>
			<a href="#">Get directions</a>
		</div>
		<div className="w-fit flex flex-col items-left gap-2">
			<MapPinIcon />
			<p>123 Sample St, Sydney NSW 2000 AU</p>
			<a href="#">Get directions</a>
		</div>
		<div className="w-fit flex flex-col items-left gap-2">
			<MapPinIcon />
			<p>123 Sample St, Sydney NSW 2000 AU</p>
			<a href="#">Get directions</a>
		</div>
	</div>;
}
