import { about_me } from "../../assets"
import { about } from "../../utils/constants"
import { styles } from "../../utils/style"

const About = () => {
  return (
    <section id="about" className={`${styles.paddingX} ${styles.flexCenter} max-sm:flex-wrap gap-10 w-full h-screen max-sm:h-auto py-10 bg-primary`}>
      <div className="w-[35%]">
        <img src={about_me} alt="Sirojiddin Sulaymanov" width={365} height={433} className="object-contain" />
      </div>

      <div className="w-[65%]">
        <h1 className="text-yellow text-6xl max-md:text-4xl max-xs:text-2xl">ABOUT ME</h1>
        <p className="text-yellow text-4xl max-md:text-2xl mb-10">menig soxam content creator</p>

        {about.map((item) => (
          <div className="font-inter text-white" key={item.id}>
            <h1 className="font-bold text-xl">{item.title}</h1>
            <p className="text-[16px]">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About