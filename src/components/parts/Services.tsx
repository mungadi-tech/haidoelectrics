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
import bg1 from "../../assets/images/electric.jpg";
import bg2 from "../../assets/images/serve.jpg";
import bg3 from "../../assets/images/c3.jpg";
import bg4 from "../../assets/images/estimation.jpg";
import bg5 from "../../assets/images/supply.jpg";
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
              <Text align={"center"} size={"3"}>
                5 Years experience in solar energy industry.
              </Text>
            </Flex>
            <Flex direction={"column"} align={"center"} justify={"center"}>
              <div className="md:p-10 p-5 bg-primary rounded-full">
                <Award />
              </div>
              <Text align={"center"} size={"3"}>
                Our Products have 2 Years Warranty.
              </Text>
            </Flex>
            <Flex direction={"column"} align={"center"} justify={"center"}>
              <div className="md:p-10 p-5 bg-primary rounded-full">
                <Award />
              </div>
              <Text align={"center"} size={"3"}>
                Home Delevery and Installation.
              </Text>
            </Flex>
            <Flex direction={"column"} align={"center"} justify={"center"}>
              <div className="md:p-10 p-5 bg-primary rounded-full">
                <Award />
              </div>
              <Text align={"center"} size={"3"}>
                Project Estimation
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
    title: "Electrical Installation",
    description:
      " Residential, Commercial, and Industrial",
    image: bg2,
  },
  {
    title: "Electrical Repair",
    description:
      " Fault finding, troubleshooting, and maintenance",
    image: bg1,
  },
  {
    title: "Estimation",
    description:
      "Accurate quotes for electrical, solar, and security projects",
    image: bg4,
  },
  {
    title: "Supply",
    description:
      "Top-quality electrical, solar, and security equipment",
    image: bg5,
  },
  {
    title: "CCTV Installation",
    description:
      "Design, installation, and configuration of CCTV systems for residential and commercial properties",
    image: bg3,
  },
];
