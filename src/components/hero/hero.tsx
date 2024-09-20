import { hero } from "../../assets";
import { styles } from "../../utils/style";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`${styles.paddingX} ${styles.flexCenter} w-full h-[90vh] max-ss:h-[100vh] max-ss:flex-col gap-10 bg-gradient`}
    >
      <div className="w-[50%] max-ss:w-[80%]">
        <h1 className="text-white text-8xl max-md:text-6xl max-xs:text-4xl">Salom</h1>
        <p className="text-white text-4xl max-md:text-2xl mb-10">Mening ismim Sirojjiddin</p>

        <p className="text-white text-xl">
          To’liq ismim Sirojiddin Sulaymanov Nodimjon o’g’li yoshim 19da 2005
          yil 12 dekabr tavalud kunim 2023 yildan beri content creator va
          mobilograf sifatida o’z ish faolyatimni yuritmoqdaman
        </p>
      </div>

      <div className={`${styles.flexCenter} w-[50%]`}>
        <img src={hero} alt="Sirojiddin Sulaymanov" width={338} height={368} className="object-contain" />
      </div>
    </section>
  );
};

export default Hero;
