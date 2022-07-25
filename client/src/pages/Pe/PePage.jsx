import React from "react";
import "../../App.css";

import pe_diecontrol from "../../assets/images/pe_diecontrol.jpg";
import pe_drawing from "../../assets/images/pe_drawing.jpg";
import pe_mmsdata from "../../assets/images/pe_mmsdata.jpg";
import pe_sparepart from "../../assets/images/pe_sparepart.jpg";
import pe_todolist from "../../assets/images/pe_todolist.jpg";

const products = [
  {
    id: 1,
    name: "pe_drawing",
    href: "http://10.121.42.48:8081/",
    imageSrc: pe_drawing,
  },
  {
    id: 2,
    name: "pe_mmsdata",
    href: "/monitoringmonitor",
    imageSrc: pe_mmsdata,
  },
  {
    id: 3,
    name: "pe_diecontrol",
    href: "#",
    imageSrc: pe_diecontrol,
  },
  {
    id: 4,
    name: "pe_sparepart",
    href: "#",
    imageSrc: pe_sparepart,
  },
  {
    id: 5,
    name: "pe_todolist",
    href: "http://10.121.42.48:8103/",
    imageSrc: pe_todolist,
  },
  // More products...
];

export default function PePage() {
  return (
    <div className="bg-white">
      <p className="text-center mt-8 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-5xl">
        Production Engineer Dept.
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
