import { phone, telegram } from "../../assets";
import { styles } from "../../utils/style";
import { format } from "date-fns";
import Button from "../button/button";

const Footer = () => {
  const date = format(new Date(), "yyyy");

  return (
    <footer
      className={`${styles.paddingX} py-10 bg-primary`}
    >
      <div className={`${styles.flexBetween} gap-5 max-lg:flex-col w-full mx-auto max-w-[1440px]`}>
        <div className="max-lg:text-center flex-col w-2/4 max-sm:w-full">
          <h1 className="font-inter text-white">Barcha huquqlar himoyalangan.</h1>
          <p className="font-inter text-white">@ {date} - Web-Pro.</p>
        </div>
        <div className={`${styles.flexCenter} max-sm:flex-col max-sm:w-auto`}>
          <Button
            title="Sherzod Artikbayev"
            img={telegram}
            alt="telegram icon"
            link="https://t.me/sherzod_artikbayev"
            color="#121327"
          />
          <Button
            title="+998-33-436-05-20"
            img={phone}
            alt="telegram icon"
            color="#121327"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
