import { styles } from "../../utils/style";
import ProgressBar from "../progress-bar/progress-bar";

const Skills = () => {
  return (
    <section
      id="skills"
      className={`${styles.paddingX} ${styles.flexCenter} flex-col gap-10 w-full h-auto py-10 bg-gradient`}
    >
      <h1 className="font-inter font-normal text-4xl text-yellow text-center">
        SKILLS
      </h1>

      <div className={`grid grid-cols-2 max-sm:grid-cols-1 gap-10`}>
        <ProgressBar title="PRE-PRODUCTION" width={"w-[90%]"} point='90' />
        <ProgressBar title="POST-PRODUCTION" width={"w-[95%]"} point='95' />
        <ProgressBar title="PRODUCTION" width={"w-[90%]"} point='90' />
        <ProgressBar title="EKSPORT" width={"w-[95%]"} point='95' />
      </div>
    </section>
  );
};

export default Skills;
