import AboutCard from "./cards/AboutCard";
import AnubhutiCard from "./cards/AnubhutiCard";
import DetailsCard from "./cards/DetailsCard";
import TemplateCard from "./cards/TemplateCard";
import Box from "./cards/Box";

import TemplateOne from "/public/template_one.png";
import TemplateTwo from "/public/template_two.png";

export default function Templates() {
	return (
		<div className="z-50 w-full flex flex-col space-y-8 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
			<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-8 flex-1">
				<DetailsCard />
				<TemplateCard
					imageSource={TemplateOne}
					title="Dashboard Template"
				/>
				<TemplateCard
					imageSource={TemplateTwo}
					title="Portfolio Template"
				/>

				{/*Second Section*/}
				<AnubhutiCard />
				<AboutCard />
				<Box>
					<div className="flex h-full flex-1 text-sm leading-6">
						<span className="m-auto">
							Adding more soon...
						</span>
					</div>
				</Box>
			</div>
		</div>
	);
}
