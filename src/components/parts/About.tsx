import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Inset,
  Section,
  Text,
} from "@radix-ui/themes";
import img1 from "../../assets/images/long-shot-la-salve-bridge-night-with-highway-lights-unique-bridge-arc-bilbao-spain.jpg";
import { CircleArrowRight } from "lucide-react";
import Reveal from "@/lib/Reveal";

export function About() {
  return (
    <Reveal>
      <Box
        className="animate-reveal_animate"
        mt={"9"}
        style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}
      >
        <Box p={{ initial: "4", lg: "9" }} className="bg-slate-50/80">
          <Heading size={"9"} align={"center"} mb={"9"}>
            About Us
          </Heading>
          <Container p={"4"}>
            <Grid columns={{ sm: "1", md: "2" }} gap={"6"}>
              <Card>
                <Inset className="h-64 md:h-72">
                  <img
                    className="md:h-full insex-0 absolute  w-full"
                    src={img1}
                    alt=""
                  />
                </Inset>
              </Card>

              <Flex gap={"5"} direction={"column"}>
                <Box>
                  <Text size={{ initial: "1", md: "5", lg: "5", xl: "5" }}>
                    Established by Dr. Shamsusdeen in Sokoto, Haido Electrics
                    has been dedicated to continuous innovation and sustainable
                    growth since its inception. Specializing in solar solutions,
                    advanced street lighting, security inverters, and CCTV
                    installations, we are committed to improving communities
                    through green energy solutions and efficient technologies.
                    With a focus on quality and customer satisfaction, Haido
                    Electrics leverages innovative technology, state-of-the-art
                    production facilities, and a skilled R&D team to deliver
                    high-performance solar products and reliable services. Our
                    mission is to empower global users with dependable energy
                    solutions that enhance safety, efficiency, and environmental
                    sustainability.{" "}
                  </Text>
                </Box>
                <Box>
                  <Button size={"1"}>
                    Know More <CircleArrowRight height={14} width={14} />
                  </Button>
                </Box>
              </Flex>
            </Grid>
          </Container>
          <Partners />
        </Box>
      </Box>
    </Reveal>
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
    <Section>
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <Heading size={"8"} align={"center"} color="gray">
          PARTNERS
        </Heading>
        <Container mt={"6"}>
          <Grid columns={{ initial: "2", lg: "8" }} gap={"4"}>
            {press.map((logo, idx) => (
              <img
                key={idx}
                src={`https://cdn.magicui.design/press/${logo}.svg`}
                className="px-2 dark:brightness-0 dark:invert"
                alt={logo}
              />
            ))}
          </Grid>
        </Container>
      </Flex>
    </Section>
  );
}
