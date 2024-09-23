import { styles } from "../../utils/style";
import ProgressBar from "../progress-bar/progress-bar";

const Skills = () => {
  return (
    <section
      id="skills"
      className={`${styles.paddingX} ${styles.flexCenter} flex-col gap-10 w-full h-[50vh] max-sm:h-auto py-10 bg-gradient`}
    >
      <h1 className="font-inter text-6xl text-yellow text-center">SKILLS</h1>

      <div className={`${styles.flexCenter} flex-wrap gap-10`}>
        <ProgressBar title="PRE-PRODUCTION" point={90} link="/pre-production" />
        <ProgressBar title="POST-PRODUCTION" point={95} link="/post-production" />
      </div>

      <div className={`${styles.flexCenter} flex-wrap gap-10`}>
        <ProgressBar title="PRODUCTION" point={90} link="/pre-production" />
        <ProgressBar title="EKSPORT" point={95} link="/eksport" />
      </div>
    </section>
  );
};

export default Skills;
