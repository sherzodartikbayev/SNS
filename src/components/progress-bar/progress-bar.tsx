import { Link } from "react-router-dom";
import { ProgressBarProps } from "../../types";

const ProgressBar = ({ title, link, point }: ProgressBarProps) => {
  return (
    <div className="">
      <div className="flex justify-between mb-1 w-[50vh] max-sm:w-[30vh]">
        <span className="text-[20px] font-inter text-white cursor-pointer">
          <Link to={`${link}`}>{title}</Link>
        </span>
        <span className="text-[18px] font-inter text-white dark:text-white">
          {point + "%"}
        </span>
      </div>
      <div className="w-full bg-black rounded-full h-2.5">
        <div className={`bg-yellow h-2.5 rounded-full w-[${point}%]`}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
