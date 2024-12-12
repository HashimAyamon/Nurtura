import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-between items-center gap-8">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <Image
              src="/LOGO.png"
              alt="Logo"
              width={160}
              height={120}
              className="mx-auto md:mx-0 rounded-lg border-4 border-white shadow-lg"
            />
            <p className="mt-4 text-lg font-medium opacity-80">
              Building a brighter future, together.
            </p>
          </div>

          <div className="w-full md:w-1/3 mt-8 md:mt-0 text-center">
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
            <ul className="flex flex-col items-center md:items-start space-y-4">
              <li>
                <Link href="/" className="text-lg hover:text-pink-300 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-lg hover:text-pink-300 transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-lg hover:text-pink-300 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-lg hover:text-pink-300 transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mt-8 md:mt-0 text-center">
            <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6 text-4xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-300 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-300 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-300 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-300 transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center border-t border-white pt-6">
          <p className="text-sm font-light opacity-80">
            © {new Date().getFullYear()} Nurtura. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
