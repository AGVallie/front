interface SmartThingsIconProps {
  className?: string;
}

function SmartThingsIcon({ className = "" }: SmartThingsIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <ellipse
          stroke="#000"
          strokeWidth="2"
          ry="3.5"
          rx="3.5"
          id="svg_2"
          cy="16"
          cx="16"
          fill="#fff"
        />
        <g id="svg_9">
          <ellipse
            strokeWidth="2"
            ry="3"
            rx="3"
            id="svg_3"
            cy="6"
            cx="16"
            stroke="#000"
            fill="#fff"
          />
          <line
            id="svg_8"
            y2="11.72327"
            x2="16"
            y1="9.08176"
            x1="16"
            strokeWidth="2"
            stroke="#000"
            fill="none"
          />
        </g>
        <g transform="rotate(72 24.1761 13.022)" id="svg_12">
          <ellipse
            strokeWidth="2"
            ry="3"
            rx="3"
            id="svg_10"
            cy="11.66037"
            cx="24.1761"
            stroke="#000"
            fill="#fff"
          />
          <line
            id="svg_11"
            y2="17.38364"
            x2="24.1761"
            y1="14.74214"
            x1="24.1761"
            strokeWidth="2"
            stroke="#000"
            fill="none"
          />
        </g>
        <g transform="rotate(144 21.283 22.9591)" id="svg_15">
          <ellipse
            strokeWidth="2"
            ry="3"
            rx="3"
            id="svg_13"
            cy="21.59747"
            cx="21.28302"
            stroke="#000"
            fill="#fff"
          />
          <line
            id="svg_14"
            y2="27.32074"
            x2="21.28302"
            y1="24.67924"
            x1="21.28302"
            strokeWidth="2"
            stroke="#000"
            fill="none"
          />
        </g>
        <g transform="rotate(-72 7.8239 13.1478)" id="svg_18">
          <ellipse
            strokeWidth="2"
            ry="3"
            rx="3"
            id="svg_16"
            cy="11.78616"
            cx="7.82391"
            stroke="#000"
            fill="#fff"
          />
          <line
            id="svg_17"
            y2="17.50943"
            x2="7.82391"
            y1="14.86792"
            x1="7.82391"
            strokeWidth="2"
            stroke="#000"
            fill="none"
          />
        </g>
        <g transform="rotate(-144 10.8428 22.9591)" id="svg_21">
          <ellipse
            strokeWidth="2"
            ry="3"
            rx="3"
            id="svg_19"
            cy="21.59747"
            cx="10.84277"
            stroke="#000"
            fill="#fff"
          />
          <line
            id="svg_20"
            y2="27.32074"
            x2="10.84277"
            y1="24.67924"
            x1="10.84277"
            strokeWidth="2"
            stroke="#000"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
}

export default SmartThingsIcon;
