const shared = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function GroomIcon(props) {
  return (
    <svg {...shared} {...props}>
      <path d="M14 14c0-3 4-5 10-5s10 2 10 5" />
      <path d="M13 14l-3 22c-.3 3 2 5 5 5h18c3 0 5.3-2 5-5l-3-22" />
      <path d="M19 14l5 6 5-6" />
      <path d="M22.2 22l-2.4 15M25.8 22l2.4 15" />
      <path d="M20 30l4 2.4 4-2.4" />
    </svg>
  );
}

export function BrideIcon(props) {
  return (
    <svg {...shared} {...props}>
      <path d="M17 12c0-2.8 3.1-5 7-5s7 2.2 7 5" />
      <path d="M15.5 15.5L17 12h14l1.5 3.5" />
      <path d="M15.5 15.5c-5 6-6.5 14-6 22.5 4.8 2.7 9.7 4 14.5 4s9.7-1.3 14.5-4c.5-8.5-1-16.5-6-22.5" />
      <path d="M20 16.5c1.3 5 1.3 10-.3 15M28 16.5c-1.3 5-1.3 10 .3 15" />
    </svg>
  );
}

export function RingsIcon(props) {
  return (
    <svg {...shared} {...props}>
      <path d="M8 30c6-4 10-4 16-4s10 0 16 4" />
      <path d="M9 30l2 6c4 2 8 3 13 3s9-1 13-3l2-6" />
      <circle cx="20" cy="21" r="6.4" />
      <circle cx="29" cy="21" r="6.4" />
    </svg>
  );
}

export function RegistrationIcon(props) {
  return (
    <svg {...shared} {...props}>
      <path d="M13 10h16l6 6v22a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2Z" />
      <path d="M29 10v6h6" />
      <path d="M16 24h9M16 29h13M16 34h13" />
      <path d="M33 27l3.5 3.5-9 9-4 .8.8-4z" />
    </svg>
  );
}

export function ToastIcon(props) {
  return (
    <svg {...shared} {...props}>
      <path d="M13 12h9l-1 9a3.5 3.5 0 0 1-7 0Z" />
      <path d="M16.5 21v10M13.5 33h6" />
      <path d="M35 15h-8l.8 7.5a3.5 3.5 0 0 0 7 .4Z" />
      <path d="M31.4 22.9V33M28.5 33h6" />
      <path d="M11 9l1.5 2M22 9l-1 2M27 12.5l2-1.5M36.5 12l1.5 2" />
    </svg>
  );
}
