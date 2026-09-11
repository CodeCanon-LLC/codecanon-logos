import * as React from "react"
import { CodeCanonIcon } from "@codecanon/logos"

const swatch: React.CSSProperties = {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 32,
	borderRadius: 12,
}

// Adaptive mark: reads --color-codecanon-primary/secondary, falling back to
// the light-mode palette by default and the dark-mode palette whenever an
// ancestor carries the "dark" class - no separate dark import needed.
export const OnLight = () => (
	<div style={{ ...swatch, background: "#FAF7F2" }}>
		<CodeCanonIcon width={96} height={96} />
	</div>
)

export const OnDark = () => (
	<div className="dark" style={{ ...swatch, background: "#1B140F" }}>
		<CodeCanonIcon width={96} height={96} />
	</div>
)

export const AtDefaultSize = () => (
	<div style={{ ...swatch, background: "#FAF7F2", gap: 8 }}>
		<CodeCanonIcon />
		<span style={{ fontFamily: "system-ui, sans-serif", fontSize: 13, color: "#5B3B2C" }}>
			24px default (props pass through to the &lt;svg&gt;)
		</span>
	</div>
)
