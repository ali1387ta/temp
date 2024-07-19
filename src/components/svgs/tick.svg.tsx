const TickSvg = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path
        d="M20.5 6L9.5 17L4.5 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default TickSvg;
