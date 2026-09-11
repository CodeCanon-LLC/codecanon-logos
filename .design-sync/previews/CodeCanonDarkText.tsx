import * as React from "react"
import { CodeCanonDarkText } from "@codecanon/logos"

const swatch: React.CSSProperties = {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 32,
	borderRadius: 12,
	background: "#1B140F",
}

// Fixed light-on-brown wordmark for dark surfaces - never adapts.
export const OnDarkSurface = () => (
	<div style={swatch}>
		<CodeCanonDarkText width={200} height={112} />
	</div>
)

export const Sizes = () => (
	<div style={{ ...swatch, flexDirection: "column", gap: 16 }}>
		<CodeCanonDarkText width={120} height={67} />
		<CodeCanonDarkText width={240} height={134} />
	</div>
)
