import { Link } from "react-router-dom";
import { ProgressBarProps } from "../../types";

const ProgressBar = ({ title, link, point }: ProgressBarProps) => {
  return (
    <div className="">
      <div className="flex justify-between mb-1 w-[300px] max-sm:w-[250px] max-xs:w-[250px]">
        <span className="font-inter font-extralight text-white text-lg max-sm:text-sm cursor-pointer">
          <Link to={`${link}`}>{title}</Link>
        </span>
        <span className="font-inter font-extralight text-white text-lg max-sm:text-md">
          {point}
        </span>
      </div>
      <div className="w-full bg-black rounded-full h-2.5">
        <div className={`bg-yellow h-2.5 rounded-full w-[${point}]`}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
