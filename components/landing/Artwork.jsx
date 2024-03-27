"use client";

import Spline from "@splinetool/react-spline";

export default function (props) {
	return (
		<div className="absolute top-0 left-1/2 w-full h-full">
			<Spline
				scene="https://prod.spline.design/AXxqcbVKyKraHjNS/scene.splinecode"
				className="h-full -translate-y-1/2"
			/>
		</div>
	);
}
