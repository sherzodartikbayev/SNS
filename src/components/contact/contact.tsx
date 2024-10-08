import { useRef, useState } from "react";
import { gmail, phone, telegram } from "../../assets";
import { styles } from "../../utils/style";
import Button from "../button/button";

const Contact = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const [loading, setLoading] = useState(false)

  const SendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nameRef.current && emailRef.current && messageRef.current) {
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const message = messageRef.current.value;

      const telegramMessage = `
      New message from your website:
        Name: ${name}
        Email: ${email}
        Message: ${message}
    `;

      // Telegram API ga xabar jo'natish
      const TELEGRAM_BOT_TOKEN =
        "7902329004:AAHj4Texwm-GgVwnH7LbI5zW047t8vIi3Go";
      const CHAT_ID = "-4540684439";

      const telegramURL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

      try {
        setLoading(true)
        const response = await fetch(telegramURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: telegramMessage,
          }),
        });
        
        const data = await response.json();

        if (data) {
          console.log("Xabar jo'natildi !");
        } else {
          console.log("Xatolik !!!");
        }
        setLoading(false)
      } catch (error) {
        console.error("Error occurred while sending message:", error);
      }
    }
  };

  return (
    <section
      id="contact"
      className={`${styles.paddingX} ${styles.flexCenter} flex-col gap-10 w-full h-auto max-sm:h-auto py-10 bg-gradient`}
    >
      <h1 className="font-inter font-normal text-4xl text-yellow">Contact</h1>

        <div className={`${styles.flexBetween} gap-10 max-w-[1440px] max-sm:flex-col w-full`}>
          <div className={`${styles.flexCenter} w-2/4`}>
            <form
              onSubmit={SendMessage}
              className={`${styles.flexCenter} flex-col px-10 py-10 gap-5 w-[415px] h-[420px] rounded-md bg-[#3F3F4580] max-xs:w-auto max-xs:h-auto`}
            >
              <input
                type="text"
                placeholder="Ism"
                ref={nameRef}
                className="w-full h-[49px] px-5 bg-[#3F3F4580] outline-none font-inter text-white text-lg"
              />
              <input
                type="email"
                placeholder="Gmail"
                ref={emailRef}
                className="w-full h-[49px] p-5 bg-[#3F3F4580] outline-none font-inter text-white text-lg"
              />
              <textarea
                placeholder="Message"
                ref={messageRef}
                className="w-full h-[137px] p-5 bg-[#3F3F4580] outline-none resize-none font-inter text-white text-lg"
              />
              <button
                type="submit"
                className="w-[330px] p-2 font-inter text-white text-lg bg-yellow max-sm:w-[275px]"
              >
                {loading ? "Jo'natilmoq..." : "Jo'natish"}
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
