import { ButtonProps } from "../../types";

const Button = ({ title, link, img, alt, color }: ButtonProps) => {
  return (
    <a
      href={link}
      className={`text-white w-[235px] bg-[${color}] hover:bg-[${color}]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 cursor-pointer`}
    >
      <img
        src={img}
        alt={alt}
        width={40}
        height={40}
        className="object-contain mr-3"
      />
      {title}
    </a>
  );
};

export default Button;
