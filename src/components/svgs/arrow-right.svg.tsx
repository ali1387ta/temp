const ArrowRightSvg = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M3.33301 10H16.6663M16.6663 10L11.6663 5M16.6663 10L11.6663 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default ArrowRightSvg;
