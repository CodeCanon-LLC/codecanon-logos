import * as React from "react"
import { SalezLightIcon } from "@codecanon/logos"

const swatch: React.CSSProperties = {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 32,
	borderRadius: 12,
	background: "#FAF7F2",
}

// Fixed dark-brown palette, built for placement on light surfaces - the
// counterpart to SalezDarkIcon, never adapts to a ".dark" ancestor.
export const OnLightSurface = () => (
	<div style={swatch}>
		<SalezLightIcon width={96} height={96} />
	</div>
)

export const Sizes = () => (
	<div style={{ ...swatch, gap: 16 }}>
		<SalezLightIcon width={32} height={32} />
		<SalezLightIcon width={64} height={64} />
		<SalezLightIcon width={112} height={112} />
	</div>
)
