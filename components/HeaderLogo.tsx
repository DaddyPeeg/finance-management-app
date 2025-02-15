import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="images/logo.svg" alt="Logo" height={38} width={38} />
        <p className="font-semibold text-white text-2xl ml-2.5">
          Finance Management App
        </p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
