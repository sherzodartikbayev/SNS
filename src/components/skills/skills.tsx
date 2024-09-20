import { Link } from "react-router-dom";
import { styles } from "../../utils/style";

const Skills = () => {
  return (
    <section
      id="skills"
      className={`${styles.paddingX} ${styles.flexCenter} flex-col gap-10 w-full h-[50vh] max-sm:h-auto py-10 bg-gradient`}
    >
      <h1 className="font-inter text-6xl text-yellow text-center">SKILLS</h1>

      <div className={`${styles.flexCenter} flex-wrap gap-10`}>
        <div className="">
          <div className="flex justify-between mb-1 w-[50vh] max-sm:w-[30vh]">
            <span className="text-xl font-inter text-white cursor-pointer">
              <Link to="/pre-production">PRE-PRODUCTION</Link>
            </span>
            <span className="text-sm font-medium text-white dark:text-white">
              90%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-yellow h-2.5 rounded-full w-[90%]"></div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-between mb-1 w-[50vh] max-sm:w-[30vh]">
            <span className="text-xl font-inter text-white cursor-pointer">
              <Link to="/post-production">POST-PRODUCTION</Link>
            </span>
            <span className="text-sm font-medium text-white dark:text-white">
              90%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-yellow h-2.5 rounded-full w-[90%]"></div>
          </div>
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-wrap gap-10`}>
        <div className="">
          <div className="flex justify-between mb-1 w-[50vh] max-sm:w-[30vh]">
            <span className="text-xl font-inter text-white cursor-pointer">
              <Link to="/production">PRODUCTION</Link>
            </span>
            <span className="text-sm font-medium text-white dark:text-white">
              90%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-yellow h-2.5 rounded-full w-[90%]"></div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-between mb-1 w-[50vh] max-sm:w-[30vh]">
          <span className="text-xl font-inter text-white cursor-pointer">
              <Link to="/eksport">EKSPORT</Link>
            </span>
            <span className="text-sm font-medium text-white dark:text-white">
              90%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-yellow h-2.5 rounded-full w-[90%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
