import * as React from "react";
export default function Fusion() {
	return (
		<div
			style={{
				position: "relative",
				paddingBottom: "100%",
				height: 0,
				marginBottom: "80px",
			}}
		>
			<iframe
				title="Demo"
				src="https://examples-fusion.vercel.app"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					minHeight: "500px",
					border: "1px solid #eee",
					borderRadius: "8px",
				}}
				allow="clipboard-write"
			/>
		</div>
	);
}
