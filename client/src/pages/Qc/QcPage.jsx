import React from "react";
import "../../App.css";

import qc_cocdata from "../../assets/images/qc_cocdata.jpg";
import qc_dmccheck from "../../assets/images/qc_dmccheck.jpg";
import qc_sortingdata from "../../assets/images/qc_sortingdata.jpg";

const products = [
  {
    id: 1,
    name: "qc_cocdata",
    href: "#",
    imageSrc: qc_cocdata,
  },
  {
    id: 2,
    name: "qc_dmccheck",
    href: "#",
    imageSrc: qc_dmccheck,
  },
  {
    id: 3,
    name: "qc_sortingdata",
    href: "#",
    imageSrc: qc_sortingdata,
  },
  // More products...
];

export default function McPage() {
  return (
    <div className="bg-white">
      <p className="text-center mt-8 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-5xl">
        Quality Control
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