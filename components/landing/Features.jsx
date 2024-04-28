import Image from "next/image";
import Ashish from "/public/ashish.jpg";

export default function(props){
	return (
		<div className="w-full min-h-screen p-12 flex flex-col justify-around">
			<div className="w-full h-max p-4 bg-zinc-900 border border-zinc-800 flex justify-around rounded text-xs">
				<Image src={Ashish} alt="Ashish" width={100} height={100} />
			</div>
		</div>
	)
}