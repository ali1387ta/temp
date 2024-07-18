const LaunchPoolSvg = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} width="24" height="24" fill="none" viewBox="0 0 24 24">
      <g stroke="currentColor" stroke-width="1.5">
        <path d="M14.5 14.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"></path>
        <path
          stroke-linejoin="round"
          d="M5.632 11.103A6 6 0 0111.325 7h1.35a6 6 0 015.692 4.103l1 3C20.663 17.988 17.771 22 13.675 22h-3.35c-4.096 0-6.988-4.012-5.693-7.897l1-3z"
        ></path>
        <path
          stroke-linejoin="round"
          d="M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7z"
        ></path>
      </g>
    </svg>
  );
};

export default LaunchPoolSvg;
