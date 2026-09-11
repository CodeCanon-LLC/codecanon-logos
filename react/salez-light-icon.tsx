import { PRIMARY_DEFAULT_COLOR } from "@/config"
import * as React from "react"

const SVGComponent = (props: React.ComponentProps<"svg">) => {
  const styles = `
    .salez-primary { stroke: var(--color-salez-primary, ${PRIMARY_DEFAULT_COLOR}); }
  `

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="none"
      width="24px"
      height="24px"
      {...props}
    >
      <defs>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </defs>
      <g className="salez-primary" strokeWidth={10} strokeLinejoin="round">
        <rect
          x={-130}
          y={-170}
          width={260}
          height={340}
          rx={12}
          fill="#FFFFFF"
          transform="translate(256 272) rotate(-10)"
        />
        <rect
          x={-130}
          y={-170}
          width={260}
          height={340}
          rx={12}
          fill="#FFFFFF"
          transform="translate(256 264) rotate(-5)"
        />
        <rect x={126} y={86} width={260} height={340} rx={12} fill="#FFFFFF" />
      </g>
      <g transform="translate(152 112) scale(2.1)">
        <g
          fill="none"
          stroke="#7E6347"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </g>
      </g>
      <g fill="#CBB9AD">
        <rect x={152} y={196} width={208} height={12} rx={6} />
        <rect x={152} y={220} width={168} height={12} rx={6} />
        <rect x={152} y={244} width={128} height={12} rx={6} />
      </g>
      <g>
        <rect x={152} y={284} width={208} height={34} fill="#E2D7D0" />
        <g stroke="#CBB9AD" strokeWidth={8}>
          <path d="M152 318h208M152 352h208M152 386h208" />
        </g>
        <g stroke="#CBB9AD" strokeWidth={8}>
          <path d="M256 284v112M316 284v112" />
        </g>
        <rect
          x={152}
          y={284}
          width={208}
          height={112}
          fill="none"
          stroke="#BFAEA2"
          strokeWidth={8}
        />
      </g>
    </svg>
  )
}

export default SVGComponent
