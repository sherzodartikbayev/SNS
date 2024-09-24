import { Link } from "react-router-dom";
import { eksport } from "../../utils/constants";
import { styles } from "../../utils/style";
import { back } from "../../assets";

const Eksport = () => {
  return (
    <div
      className={`${styles.paddingX} ${styles.flexStart} flex-col w-full h-auto py-32 bg-primary`}
    >
      <div className={`${styles.flexCenter} w-full gap-16 max-md:gap-5 mb-10`}>
        <div className={`${styles.flexCenter} bg-yellow w-[70px] h-[70px]`}>
          <Link to={"/"}>
            <img src={back} alt="back icon" className="object-contain" />
          </Link>
        </div>
        <div className={`${styles.flexCenter} w-full h-[70px] bg-yellow`}>
          <h1 className="font-inter font-normal text-2xl max-sm:text-xl text-primary tracking-widest">
            EKSPORT
          </h1>
        </div>
      </div>

      <h2 className="font-inter font-bold text-4xl max-sm:text-2xl text-white uppercase leading-10 mb-10">
        Post-production (Montaj va tahrirlash)
      </h2>

      <div className="">
        {eksport.map((text) => (
          <p
            key={text.id}
            className="font-inter font-normal text-3xl max-sm:text-xl leading-10 uppercase text-white mb-2"
          >
            • {text.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Eksport;
