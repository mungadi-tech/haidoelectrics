import { Link } from "@tanstack/react-router";
import { MapPin, MessageSquare, Phone } from "lucide-react";

const department = [
  { name: "Hybrid Solar Inverter" },
  { name: "Solar Battery" },
  { name: "Solar Panel" },
  { name: "Off/On Grid Solar System" },
  { name: "Solar Storage System" },
  { name: "Low Frequency Solar Inverter" },
  { name: "Solar Controller" },
  { name: "Solar Power System Solutions" },
  { name: "Solar Power System Projects" },
];
const flinks = [
  { name: "About Us", url: "about/" },
  { name: "Products", url: "products/" },
  { name: "Services", url: "services/" },
  { name: "Contact Us", url: "contact/" },
];

const fservices = [
  { name: "Solar Light" },
  { name: "Solar Street Light" },
  { name: "Solar Light" },
  { name: "Solar Light Solutions" },
  { name: "Solar Light Projects" },
];
export const Footer = () => {
  return (
    <footer className="text-white text-sm bg-primary">
      <div className="p-4">
        <div className="grid md:grid-cols-5 gap-4 p-4">
          <img src={""} className="w-[70%]" alt="" />
          <div>
            <h1 className="text-2xl mb-4 font-mono">Solar Power System</h1>
            <ul className="flex flex-col gap-4 font-serif">
              {department.map((d) => (
                <li key={d.name} className="flex gap-2 ">
                  <span>{d.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl mb-4 font-mono">Solar & LED Light</h1>
            <ul className="flex flex-col gap-4 font-serif">
              {fservices.map((d) => (
                <li key={d.name} className="flex gap-2 ">
                  <span>{d.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl mb-4 font-mono">Links</h1>
            <ul className="flex flex-col gap-4 font-serif">
              {flinks.map((d) => (
                <li key={d.name} className="">
                  <Link to={d.url} className="flex gap-2">
                    <span>{d.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-2xl mb-4 font-mono">Have a question?</h1>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2 font-serif items-center">
                <MapPin className="text-white h-6 w-6" />
                No. 1 Agaie Road, K7 Mall, Sokoto State, Nigeria 840212
              </li>
              <li className="flex gap-2 items-center font-serif">
                <Phone className="text-white h-6 w-6" />
                <div className="flex flex-col">
                  <span>+234(0)7020334144</span>
                  <span>+234(0)8032844178</span>
                </div>
              </li>
              <li className="flex items-center gap-2 font-serif">
                <MessageSquare className="text-white h-6 w-6" />
                <span>info@haidoelectrics.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center my-14">
          &copy; Copyright{" "}
          <span className="font-bold text-secondary"> Haido Electrics. </span>
          All Rights Reserved
          <p>
            Designed by{" "}
            <span className="font-bold">Brightedge Technology Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
