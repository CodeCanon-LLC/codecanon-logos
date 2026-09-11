import * as React from "react"
import { SalezLightText } from "@codecanon/logos"

const swatch: React.CSSProperties = {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 32,
	borderRadius: 12,
	background: "#FAF7F2",
}

// Fixed dark-brown wordmark for light surfaces - never adapts.
export const OnLightSurface = () => (
	<div style={swatch}>
		<SalezLightText width={200} height={112} />
	</div>
)

export const Sizes = () => (
	<div style={{ ...swatch, flexDirection: "column", gap: 16 }}>
		<SalezLightText width={120} height={67} />
		<SalezLightText width={240} height={134} />
	</div>
)
