import React from "react";
import Link from "next/link";

const MainNav = () => {
  return (
    <div>
      <br />
      <div className="container">
        <div className=" flex w-fit gap-11 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative " href="/">
            HOME
          </Link>
          <Link className="navbar__link relative " href="/blog">
            Blog
          </Link>
          <Link className="navbar__link relative " href="/about-us">
            AboutUs
          </Link>
          <Link className="navbar__link relative " href="/contact-us">
            ContactUs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
