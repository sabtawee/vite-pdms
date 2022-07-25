import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

import MC from "../../assets/images/MC.jpg";
import PC from "../../assets/images/PC.jpg";
import QC from "../../assets/images/QC.jpg";
import PD from "../../assets/images/PD.jpg";
import ENG from "../../assets/images/ENG.jpg";
import PE from "../../assets/images/PE.jpg";
import MP from "../../assets/images/MP.jpg";
import ISO from "../../assets/images/ISO.jpg";
import SIC from "../../assets/images/SIC.jpg";

const products = [
  {
    id: 1,
    name: "MATERIAL CONTROL",
    href: "/materialcontrol",
    imageSrc: MC,
  },
  {
    id: 2,
    name: "PLANNING",
    href: "/planningsystem",
    imageSrc: PC,
  },
  {
    id: 3,
    name: "QUALITY CONTROL",
    href: "/qualitycontrol",
    imageSrc: QC,
  },
  {
    id: 4,
    name: "PRODUCTION",
    href: "/productiondepartment",
    imageSrc: PD,
  },
  {
    id: 5,
    name: "ENGINEER",
    href: "/engineer",
    imageSrc: ENG,
  },
  {
    id: 6,
    name: "PRODUCTION ENG'R",
    href: "/productionengineer",
    imageSrc: PE,
  },
  {
    id: 7,
    name: "MANPOWER",
    href: "#",
    imageSrc: MP,
  },
  {
    id: 8,
    name: "ISO/TS",
    href: "#",
    imageSrc: ISO,
  },
  {
    id: 9,
    name: "SIC",
    href: "#",
    imageSrc: SIC,
  },
  // More products...
];

export default function HomePage() {
  return (
    <div className="bg-white md:h-full">
      <p className="text-center mt-8 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-5xl">
        Production Data Management System
      </p>
      <p className="text-center m-5 mt-1 text-3xl leading-8 font-extrabold tracking-tight text-gray-600 sm:text-2xl">
        Stepping Motor MFG [PM HB MA]
      </p>
      <div className="max-w-1xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8 bg-gray-100">
        <h2 className="sr-only"></h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-4 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 logo">
                <img
                  src={product.imageSrc}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
