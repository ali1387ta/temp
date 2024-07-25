const MissionsSvg = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path
        d="M7.5 9H17.5M7.5 13H17.5M7.5 17H12.5M16.5 2V5M8.5 2V5M7.5 22H17.5C19.7091 22 21.5 20.2091 21.5 18V7.5C21.5 5.29086 19.7091 3.5 17.5 3.5H7.5C5.29086 3.5 3.5 5.29086 3.5 7.5V18C3.5 20.2091 5.29086 22 7.5 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export default MissionsSvg;
