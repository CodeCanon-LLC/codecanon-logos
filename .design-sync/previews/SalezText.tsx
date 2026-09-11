import * as React from "react"
import { SalezText } from "@codecanon/logos"

const swatch: React.CSSProperties = {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 32,
	borderRadius: 12,
}

// Adaptive wordmark: same --color-salez-letter/diacritic custom
// properties as the icon, falling back to light-mode colors by default and
// dark-mode colors under a ".dark" ancestor.
export const OnLight = () => (
	<div style={{ ...swatch, background: "#FAF7F2" }}>
		<SalezText width={200} height={112} />
	</div>
)

export const OnDark = () => (
	<div className="dark" style={{ ...swatch, background: "#1B140F" }}>
		<SalezText width={200} height={112} />
	</div>
)
