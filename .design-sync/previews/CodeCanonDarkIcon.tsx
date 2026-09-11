import * as React from "react"
import { CodeCanonDarkIcon } from "@codecanon/logos"

const swatch: React.CSSProperties = {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 32,
	borderRadius: 12,
	background: "#1B140F",
}

// Fixed light-on-brown palette, built for placement on dark surfaces
// regardless of any ".dark" ancestor - unlike CodeCanonIcon it never adapts.
export const OnDarkSurface = () => (
	<div style={swatch}>
		<CodeCanonDarkIcon width={96} height={96} />
	</div>
)

export const Sizes = () => (
	<div style={{ ...swatch, gap: 16 }}>
		<CodeCanonDarkIcon width={32} height={32} />
		<CodeCanonDarkIcon width={64} height={64} />
		<CodeCanonDarkIcon width={112} height={112} />
	</div>
)
