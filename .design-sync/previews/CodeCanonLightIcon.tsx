import * as React from "react"
import { CodeCanonLightIcon } from "@codecanon/logos"

const swatch: React.CSSProperties = {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 32,
	borderRadius: 12,
	background: "#FAF7F2",
}

// Fixed dark-brown palette, built for placement on light surfaces - the
// counterpart to CodeCanonDarkIcon, never adapts to a ".dark" ancestor.
export const OnLightSurface = () => (
	<div style={swatch}>
		<CodeCanonLightIcon width={96} height={96} />
	</div>
)

export const Sizes = () => (
	<div style={{ ...swatch, gap: 16 }}>
		<CodeCanonLightIcon width={32} height={32} />
		<CodeCanonLightIcon width={64} height={64} />
		<CodeCanonLightIcon width={112} height={112} />
	</div>
)
