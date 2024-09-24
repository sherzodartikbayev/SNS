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
        <ProgressBar title="PRE-PRODUCTION" point={"90%"} link="/pre-production" />
        <ProgressBar
          title="POST-PRODUCTION"
          point={"95%"}
          link="/post-production"
        />
        <ProgressBar title="PRODUCTION" point={"90%"} link="/production" />
        <ProgressBar title="EKSPORT" point={"95%"} link="/eksport" />
      </div>
    </section>
  );
};

export default Skills;
