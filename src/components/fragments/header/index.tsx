import { logoHollaPng } from "../../../image";
import BrandLogo from "../../elements/brandLogo";
import Button from "../../elements/button/Button";

const Header = () => {
  const navItem = [
    { label: "Beranda", href: "beranda" },
    { label: "Tentang Kami", href: "tentang-kami" },
    { label: "Menu", href: "menu" },
    { label: "Kontak", href: "kontak" },
  ];
  return (
    <header className="bg-transparent top-0 left-0 w-full absolute">
      <nav className="container mx-auto px-16 md:px-16 max-w-full flex justify-between items-center fixed z-[999] py-2 navbar-fixed">
        <BrandLogo image={logoHollaPng} label={"Holaa.Indonesia"} />

        <div className="">
          <ul className="flex items-center gap-[3vw]">
            {navItem?.map((item, index) => (
              <li key={index}>
                <a
                  className={"text-[16px] hover:text-orange-500"}
                  href={`#${item.href}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <Button
            type={"button"}
            className={
              "w-[133px] h-10 bg-transparent text-[16px] text-[#1f1235] font-normal"
            }
            label={"Masuk"}
          />
          <Button
            type={"button"}
            className={
              "w-[133px] h-10 bg-orange-500 text-white rounded-md text-[16px] font-bold hover:bg-white hover:text-orange-500 transition duration-300"
            }
            label={"Daftar"}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
