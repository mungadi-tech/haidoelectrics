import { Button, Card, Heading, Text } from "@radix-ui/themes";
import React from "react";
import img1 from "../../assets/images/long-shot-la-salve-bridge-night-with-highway-lights-unique-bridge-arc-bilbao-spain.jpg";
import { CircleArrowRight } from "lucide-react";

export function About() {
  return (
    <div
      className="mt-20 mb-40 bg-cover relative"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="bg-slate-50/80 h-full w-full py-20">
        <h1 className="text-7xl my-10 text-center">About Us</h1>
        <div className="grid grid-cols-2 gap-24 container">
          <Card>
            <img className="absolute inset-0 h-full w-full" src={img1} alt="" />
          </Card>

          <div className="flex flex-col gap-10">
            <Text size={{ initial: "3", md: "6", lg: "6", xl: "6" }}>
              Established in 2009, Anern has been adhering to the concept of
              continuous self-transcendence and seeking common growth. Committed
              to making the world better with green energy solutions, efficient
              lighting, and energy-saving technologies. Through innovative
              technology, advanced production equipment and an excellent R&D
              team, Anern has provided high-quality solar energy products and
              satisfactory services to more than 10,000 users around the world.
            </Text>
            <div>
              <Button size={"4"}>
                Know More <CircleArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <Partners />
      </div>
    </div>
  );
}

const press = [
  "TheNewYorkTimes",
  "TheWashingtonPost",
  "Forbes",
  "Bloomberg",
  "BusinessInsider",
  "TechCrunch",
  "TheGuardian",
  "Wired",
];

export function Partners() {
  return (
    <section className="flex flex-col justify-center items-center py-14 mt-20">
      <Heading
        size={"8"}
        className="text-center text-sm font-semibold text-gray-500"
      >
        PARTNERS
      </Heading>
      <div className="container relative mt-6 grid grid-cols-2 lg:grid-cols-8 gap-4 justify-center items-center">
        {press.map((logo, idx) => (
          <img
            key={idx}
            src={`https://cdn.magicui.design/press/${logo}.svg`}
            className="px-2 dark:brightness-0 dark:invert"
            alt={logo}
          />
        ))}
      </div>
    </section>
  );
}
