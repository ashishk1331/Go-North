import { CaretRight } from "@phosphor-icons/react/dist/ssr";

const ITEMS = [
	{
		title: "templates",
		href: "/templates"
	},
	{
		title: "about",
		href: "/about"
	}
];

export default function (props) {
	return (
		<nav className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex items-center justify-around sm:justify-between p-4 z-30 text-xs">
			<ul className="flex flex-col items-left gap-y-3">
				{ITEMS.map((item, index) => (
					<NavItem key={index} {...item} />
				))}
			</ul>
		</nav>
	);
}

function NavItem(props) {
	const { title, href } = props;

	return (
		<li>
			<a href={"#" + title}>
				<span className="flex items-center gap-x-1 lg:hover:gap-x-3 lg:hover:text-voilet transition-all duration-800">
					<CaretRight className="w-3 h-3" weight="bold" />
					{title}
				</span>
			</a>
		</li>
	);
}
