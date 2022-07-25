import React from "react";
import "../../App.css";

import pr_SMW_index from "../../assets/images/pr_SMW_index.jpg";
import pr_smartwos from "../../assets/images/pr_smartwos.jpg";
import pr_smartsetup_index from "../../assets/images/pr_smartsetup_index.jpg";
import pr_printlabel from "../../assets/images/pr_printlabel.jpg";
import pr_packingweight from "../../assets/images/pr_packingweight.jpg";
import pr_productionresult from "../../assets/images/pr_productionresult.jpg";

const products = [
  {
    id: 1,
    name: "pr_SMW_index",
    href: "http://10.121.42.48:8085/",
    imageSrc: pr_SMW_index,
  },
  {
    id: 2,
    name: "pr_smartwos",
    href: "#",
    imageSrc: pr_smartwos,
  },
  {
    id: 3,
    name: "pr_smartsetup_index",
    href: "/smartsetup",
    imageSrc: pr_smartsetup_index,
  },
  {
    id: 4,
    name: "pr_printlabel",
    href: "#",
    imageSrc: pr_printlabel,
  },
  {
    id: 5,
    name: "pr_packingweight",
    href: "http://10.121.42.48:8111/",
    imageSrc: pr_packingweight,
  },
  {
    id: 6,
    name: "pr_productionresult",
    href: "#",
    imageSrc: pr_productionresult,
  },
  // More products...
];

export default function PrdPage() {
  return (
    <div className="bg-white">
      <p className="text-center mt-8 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-5xl">
        Production Department
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
