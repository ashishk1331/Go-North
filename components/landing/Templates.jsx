import AboutCard from "./cards/AboutCard";
import AnubhutiCard from "./cards/AnubhutiCard";
import DetailsCard from "./cards/DetailsCard";
import Box from "./cards/Box";

export default function Templates() {
	return (
		<div className="z-50 w-full flex flex-col space-y-8 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
			<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-8 flex-1">
				<DetailsCard />
				<Box />
				<Box />

				{/*Second Section*/}
				<AnubhutiCard />
				<AboutCard />
				<Box />
			</div>
		</div>
	);
}