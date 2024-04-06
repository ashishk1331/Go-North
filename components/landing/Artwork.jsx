export default function (props) {
	return (
		<div className="absolute top-0 left-1/2 w-full h-full">
			<video autoPlay muted loop className="w-full h-full object-cover">
	            <source src="/output.mp4" type="video/mp4" />
	            Your browser does not support the video tag.
	        </video>
		</div>
	);
}
