export default function (props) {
	return (
		<div className="absolute inset-y-0 translate-y-1/4 sm:-translate-y-1/2 left-1/2 w-full h-full">
			<video autoPlay muted loop className="w-full object-cover">
	            <source src="/output.mp4" type="video/mp4" />
	            Your browser does not support the video tag.
	        </video>
		</div>
	);
}
