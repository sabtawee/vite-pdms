import React from "react";
import "../../App.css";

import pm_pra from "../../assets/images/pm_pra.png";
import pm_na from "../../assets/images/pm_na.png";
import pm_at from "../../assets/images/pm_at.png";
import pm_pre from "../../assets/images/pm_pre.png";
import ma from "../../assets/images/ma.png";
import hb_pre from "../../assets/images/hb_pre.png";
import hb_fn from "../../assets/images/hb_fn.png";


const products = [
  {
    id: 1,
    name: "pm_pra",
    href: "http://10.121.19.8:8080/",
    imageSrc: pm_pra,
  },
  {
    id: 2,
    name: "pm_na",
    href: "http://10.121.42.17:8080/",
    imageSrc: pm_na,
  },
  {
    id: 3,
    name: "pm_at",
    href: "http://10.121.19.52:8080/",
    imageSrc: pm_at,
  },
  {
    id: 4,
    name: "pm_pre",
    href: "http://10.121.19.58:8080/",
    imageSrc: pm_pre,
  },
  {
    id: 5,
    name: "ma",
    href: "http://10.121.19.56:8080/",
    imageSrc: ma,
  },
  {
    id: 6,
    name: "hb_pre",
    href: "http://10.121.42.6:8080/",
    imageSrc: hb_pre,
  },
  {
    id: 7,
    name: "hb_fn",
    href: "http://10.121.42.18:8080/",
    imageSrc: hb_fn,
  },
  // More products...
];

export default function MmsPage() {
  return (
    <div className="bg-white">
      <p className="text-center mt-8 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-5xl">
        Monitoring Monitor
      </p>
      <p className="text-center m-5 mt-1 text-3xl leading-8 font-extrabold tracking-tight text-gray-600 sm:text-2xl">
        Stepping Motor MFG [PM HB MA]
      </p>
      <div className="max-w-1xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8 bg-gray-100">
        <h2 className="sr-only"></h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-4 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 logo">
                <img
                  src={product.imageSrc}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
