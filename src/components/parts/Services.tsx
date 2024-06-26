import React from "react";
import { Award } from "lucide-react";
import { Avatar, Card, Heading, Inset } from "@radix-ui/themes";
import bg1 from "../../assets/images/view-futuristic-mystical-other-worldly-sky.jpg";
import bg2 from "../../assets/images/sunset-sky-reflects-solar-panel-sustainable-power-generation-generative-ai.jpg";
import bg3 from "../../assets/images/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative.jpg";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Services() {
  const [startAnimate, setStartAnimate] = React.useState<number | undefined>(
    undefined
  );

  return (
    <div className="my-20">
      <h1 className="text-7xl my-20 text-center">Our Services</h1>
      <div
        className="flex flex-col gap-24 bg-no-repeat bg-cover py-10 h-96 relative"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <div className="grid grid-cols-4 gap-2 container place-content-center place-items-center text-[var(--accent-1)]">
          <div className="flex flex-col items-center text-center">
            <Avatar
              radius="full"
              variant="solid"
              size={"8"}
              fallback={<Award />}
            />
            15 Years experience in solar energy manufacturing industry.
          </div>
          <div className="flex items-center flex-col text-center">
            <Avatar
              radius="full"
              variant="solid"
              size={"8"}
              fallback={<Award />}
            />
            Our products have ISO9001, CE, ROHS, TUV, ISO, FC certifications.
          </div>
          <div className="flex flex-col items-center text-center">
            <Avatar
              radius="full"
              variant="solid"
              size={"8"}
              fallback={<Award />}
            />
            We have our own patent products.
          </div>
          <div className="flex flex-col items-center text-center">
            <Avatar
              radius="full"
              variant="solid"
              size={"8"}
              fallback={<Award />}
            />
            Customize the solar system and LED lighting solutions.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 container  -mt-28 inset-x-0">
        {items.map((i, index) => (
          <div key={index} className="group">
            <Card
              onMouseEnter={() => setStartAnimate(index)}
              onMouseLeave={() => setStartAnimate(undefined)}
            >
              <Inset>
                <img className="h-48 lg:h-72 w-full" src={i.image} />
              </Inset>

              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: index == startAnimate ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 10,
                }}
                className={cn(
                  "absolute inset-0 bg-[var(--accent-1)] p-4 text-sm lg:text-lg text-center",
                  startAnimate == index ? "block" : "hidden"
                )}
              >
                {i.description}
              </motion.div>
            </Card>
            <Heading
              mt={"1"}
              size={"3"}
              className="group-hover:text-emerald-600 z-40"
            >
              {i.title}
            </Heading>
          </div>
        ))}
      </div>
    </div>
  );
}

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    image: bg1,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    image: bg2,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    image: bg3,
  },
];
