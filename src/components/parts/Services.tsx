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
import bg1 from "../../assets/images/sunset-sky-reflects-solar-panel-sustainable-power-generation-generative-ai.jpg";
import bg2 from "../../assets/images/serve.jpg";
import bg3 from "../../assets/images/c3.jpg";
import bg4 from "../../assets/images/l2.png";
import bg5 from "../../assets/images/view-futuristic-mystical-other-worldly-sky.jpg";
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
    title: "Solar Solutions",
    description:
      "We provide end-to-end solar energy solutions, from design and installation to maintenance and support. Our team of experts ensures that your solar energy system is optimized for maximum efficiency and performance.",
    image: bg1,
  },
  {
    title: "Solar Hybrid Inverters",
    description:
      "Our solar hybrid inverters combine the best of solar and traditional energy sources to provide seamless power solutions. Designed with the latest technologies, our inverters ensure reliable and efficient energy management for your home or business.",
    image: bg2,
  },
  {
    title: "CCTV Systems",
    description:
      "Enhance your security with our state-of-the-art CCTV systems. We offer a variety of cameras and surveillance solutions to keep your property safe and secure, providing peace of mind with 24/7 monitoring.",
    image: bg3,
  },
  {
    title: "Street Lights",
    description:
      "Illuminate your streets with our energy-efficient LED street lights. Our products are designed to provide superior lighting performance while reducing energy consumption and maintenance costs.",
    image: bg5,
  },
  {
    title: "Security Lights",
    description:
      "Protect your property with our advanced security lighting solutions. Our range includes motion-activated lights, floodlights, and other security lighting options that deter intruders and enhance safety.",
    image: bg4,
  },
];
