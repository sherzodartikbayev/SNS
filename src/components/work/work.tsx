import { work } from "../../utils/constants"
import { styles } from "../../utils/style"

const Work = () => {
  return (
    <section id="work" className={`${styles.paddingX} ${styles.flexCenter} flex-col w-full h-auto py-10 bg-primary`}>
      <h1 className="font-inter font-normal text-4xl text-yellow mb-10">WORK</h1>

      <div className={`grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  flex-wrap gap-5`}>
        {work.map((img) => (
          <img src={img.href} alt={img.alt} key={img.id} />
        ))}
      </div>
    </section>
  )
}

export default Work