import React from "react";
import CreditCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
            <p className="text-sm max-w-[300px]">
              Welcome to Coders Cafe, where technology and coffee culture unite.
              Enjoy a cozy space for coding, collaboration, and high-quality
              brews made from premium beans. Whether you’re working or relaxing,
              Coders Cafe is the perfect spot to fuel your creativity and
              passion for coffee.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +91 6398189226
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation />
                Noida, Uttar Pradesh
              </p>
            </div>
          </motion.div>

          {/* Footer links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Quick Links</h1>
            <div>
              <div className="grid grid-cols-2 gap-3">
                {/* first column section */}
                <div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                {/* second column section */}
              </div>
            </div>
          </motion.div>

          {/* Social links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow us</h1>
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
              <img
                src={CreditCards}
                alt="Payment methods"
                className="w-[80%]"
              />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright &copy; 2024 Company Name. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
