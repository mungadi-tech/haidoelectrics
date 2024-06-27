import React from "react";
import { Award } from "lucide-react";
import {
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Inset,
  Text,
} from "@radix-ui/themes";
import bg1 from "../../assets/images/view-futuristic-mystical-other-worldly-sky.jpg";
import bg2 from "../../assets/images/sunset-sky-reflects-solar-panel-sustainable-power-generation-generative-ai.jpg";
import bg3 from "../../assets/images/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative.jpg";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Reveal from "@/lib/Reveal";

export function Services() {
  const [startAnimate, setStartAnimate] = React.useState<number | undefined>(
    undefined
  );

  return (
    <Reveal className="my-20">
      <Heading size={"9"} align={"center"}>
        Our Services
      </Heading>
      <div
        className="flex mt-14 flex-col gap-24 bg-no-repeat bg-cover py-10 md:h-96 h-72 relative"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <Container p={"4"} className="text-white">
          <Grid columns={"4"} gap={"2"} align={"center"} justify={"center"}>
            <Flex direction={"column"} align={"center"} justify={"center"}>
              <div className="md:p-10 p-5 bg-primary rounded-full">
                <Award />
              </div>
              <Text align={"center"} size={"1"}>
                15 Years experience in solar energy manufacturing industry.
              </Text>
            </Flex>
            <Flex direction={"column"} align={"center"} justify={"center"}>
              <div className="md:p-10 p-5 bg-primary rounded-full">
                <Award />
              </div>
              <Text align={"center"} size={"1"}>
                15 Years experience in solar energy manufacturing industry.
              </Text>
            </Flex>
            <Flex direction={"column"} align={"center"} justify={"center"}>
              <div className="md:p-10 p-5 bg-primary rounded-full">
                <Award />
              </div>
              <Text align={"center"} size={"1"}>
                15 Years experience in solar energy manufacturing industry.
              </Text>
            </Flex>
            <Flex direction={"column"} align={"center"} justify={"center"}>
              <div className="md:p-10 p-5 bg-primary rounded-full">
                <Award />
              </div>
              <Text align={"center"} size={"1"}>
                15 Years experience in solar energy manufacturing industry.
              </Text>
            </Flex>
          </Grid>
        </Container>
      </div>
      <Container p={"4"}>
        <Grid columns={"3"} gap={"2"} className="md:-mt-36 -mt-20">
          {items.map((i, index) => (
            <div key={index} className="group">
              <Card
                onMouseEnter={() => setStartAnimate(index)}
                onMouseLeave={() => setStartAnimate(undefined)}
              >
                <Inset>
                  <img className="h-24 md:h-48 lg:h-72 w-full" src={i.image} />
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
                size={"1"}
                align={"center"}
                className="group-hover:text-emerald-600 z-40"
              >
                {i.title}
              </Heading>
            </div>
          ))}
        </Grid>
      </Container>
    </Reveal>
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
