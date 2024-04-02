import React from "react";
import { navigation } from "../data/data";

function Footer() {
  return (
    <div className="bg-gray-800 h-full">
      <div className=" flex flex-col p-4 max-w-7xl mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center justify-center">
          {navigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-300 px-3 py-2 text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div
          className="flex flex-col items-center justify-center gap-2 text-white mt-6 lg:items-start"
          id="contact"
        >
          <h2 className="text-3xl font-bold text-center ">Contact</h2>
          <p className="text-center">
            345/164 Supalai Prime Rama 9, Rama 9 Rd., Bangkapi, Huai Khwang,
            Bangkok, 10310
          </p>
          <p>
            Email: <a href="mailto:b.surarat@gmail.com">b.surarat@gmail.com</a>
          </p>
          <p>
            <a href="tel:0629155634">Tel: 062-915-5634</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
