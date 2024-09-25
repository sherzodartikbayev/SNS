import { about_me } from "../../assets"
import { about } from "../../utils/constants"
import { styles } from "../../utils/style"

const About = () => {
  return (
    <section id="about" className={`${styles.paddingX} ${styles.flexCenter}  w-full h-auto max-sm:h-auto py-20 bg-primary`}>
      <div className={`${styles.flexCenter} max-sm:flex-col max-w-[1440px] gap-10`}>
        <div className="w-[35%]">
          <img src={about_me} alt="Sirojiddin Sulaymanov" width={365} height={433} className="object-contain" />
        </div>
        <div className="w-[65%]">
          <h1 className="font-inter text-yellow text-3xl font-medium max-md:text-3xl max-xs:text-2xl">ABOUT ME</h1>
          <p className="font-inter text-yellow text-xl font-light leading-6 tracking-widest max-md:text-sm mb-10">menig soxam content creator</p>
          {about.map((item) => (
            <div className="font-inter text-white " key={item.id}>
              <h1 className="font-bold text-base leading-5">{item.title}</h1>
              <p className="font-light text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About