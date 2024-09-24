import { gmail, phone, telegram } from "../../assets";
import { styles } from "../../utils/style";
import Button from "../button/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className={`${styles.paddingX} ${styles.flexCenter} flex-col gap-10 w-full h-auto max-sm:h-auto py-10 bg-gradient`}
    >
      <h1 className="font-inter font-normal text-4xl text-yellow">Contact</h1>

      <div className={`${styles.flexCenter} max-sm:flex-col w-full gap-10`}>
        <div className={`${styles.flexCenter} w-[50%]`}>
          <form
            id="myForm"
            className={`${styles.flexCenter} flex-col p-5 gap-5 w-[415px] h-[420px] rounded-md bg-[#3F3F4580] max-xs:w-auto max-xs:h-auto`}
          >
            <input
              type="text"
              placeholder="Ism"
              id="name"
              className="w-[327px] h-[49px] p-3 bg-[#3F3F4580] outline-none font-inter text-white text-lg max-xs:w-auto"
            />
            <input
              type="email"
              placeholder="Gmail"
              id="email"
              className="w-[327px] h-[49px] p-3 bg-[#3F3F4580] outline-none font-inter text-white text-lg max-xs:w-auto"
            />
            <textarea
              placeholder="Message"
              id="message"
              className="w-[327px] h-[137px] p-3 bg-[#3F3F4580] outline-none resize-none font-inter text-white text-lg max-xs:w-[275px]"
            />
            <button
              type="button"
              className="w-[330px] p-2 font-inter text-white text-lg bg-yellow max-sm:w-[275px]"
            >
              Jo'natish
            </button>
          </form>
        </div>
        <div className={`${styles.flexCenter} flex-col gap-5 w-[50%]`}>
          <Button
            title="Sirojiddin Sulaymanov"
            img={telegram}
            alt="telegram icon"
            link="https://t.me/sns7562"
            color="#111025"
          />
          <Button
            title="sisu56744@gmail.com"
            img={gmail}
            alt="telegram icon"
            link=""
            color="#111025"
          />
          <Button
            title="+998-90-810-75-62"
            img={phone}
            alt="phone icon"
            color="#111025"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
