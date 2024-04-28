export default function Box({ className, children }) {
	return (
		<div
			className={
				"z-0 w-full bg-zinc-950 border-2 border-zinc-800 lg:pr-8 lg:pt-4 p-6 lg:p-8 rounded-md overflow-hidden " +
				className
			}
		>
			{children}
		</div>
	);
}