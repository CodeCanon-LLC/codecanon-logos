import * as React from "react"
import { SalezDarkIcon } from "@codecanon/logos"

const swatch: React.CSSProperties = {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 32,
	borderRadius: 12,
	background: "#1B140F",
}

// Fixed light-on-brown palette, built for placement on dark surfaces
// regardless of any ".dark" ancestor - unlike SalezIcon it never adapts.
export const OnDarkSurface = () => (
	<div style={swatch}>
		<SalezDarkIcon width={96} height={96} />
	</div>
)

export const Sizes = () => (
	<div style={{ ...swatch, gap: 16 }}>
		<SalezDarkIcon width={32} height={32} />
		<SalezDarkIcon width={64} height={64} />
		<SalezDarkIcon width={112} height={112} />
	</div>
)
