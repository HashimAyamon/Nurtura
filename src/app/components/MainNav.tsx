import React from "react";
import Link from "next/link";

const MainNav = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative " href="/">
            HOME
          </Link>
          <Link className="navbar__link relative " href="/blog">
            Blog
          </Link>
          <Link className="navbar__link relative " href="/about-us">
            AboutUS
          </Link>
          <Link className="navbar__link relative " href="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
