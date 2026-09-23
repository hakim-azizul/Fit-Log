import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black border-cyan-200/10 border mt-auto">
      <footer className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src={Logo} width={16} height={16} alt="Logo" />
            <Link
              href="/"
              className="text-sm font-medium font-oswald text-white"
            >
              FITLOG
            </Link>
          </div>
          <div>
            <p className="text-sm text-gray-400 text-center md:text-right">
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
