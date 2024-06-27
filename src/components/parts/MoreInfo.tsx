import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Inset,
  Separator,
  Text,
} from "@radix-ui/themes";
import { MoreHorizontal } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "../../assets/images/beautiful-urban-view.jpg";
import Reveal from "@/lib/Reveal";

export function MoreInfo() {
  const date = new Date().toLocaleString();
  return (
    <Reveal>
      <Container p={"4"}>
        <Heading size={"9"} align={"center"} mb={"9"}>
          Find The Information you Need
        </Heading>
        <Grid columns={{ initial: "1", md: "2" }} gap={"9"}>
          <Box>
            <Heading size={"8"}>News</Heading>
            <Flex align={"center"} mt={"2"}>
              <span className="p-0.5 bg-primary w-10" />
              <Separator size={"4"} />
            </Flex>

            <Flex gap={"6"} direction={"column"} mt={"4"}>
              <Card variant="ghost">
                <Grid columns={{ md: "2", sm: "1" }} gap={"4"}>
                  <Inset>
                    <img src={img1} alt="" className="h-full" />
                  </Inset>
                  <Flex p={"2"} direction={"column"}>
                    <Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </Text>
                    <Flex
                      justify={"between"}
                      direction={{ initial: "row", lg: "column", md: "row" }}
                      gap={"2"}
                      mt={"4"}
                    >
                      <Badge size={"3"} variant="soft" radius="full">
                        {date}
                      </Badge>
                      <Button>
                        Know more <MoreHorizontal />
                      </Button>
                    </Flex>
                  </Flex>
                </Grid>
              </Card>
              <Card variant="ghost">
                <Grid columns={{ md: "2", sm: "1" }} gap={"4"}>
                  <Inset>
                    <img src={img1} alt="" className="h-full" />
                  </Inset>
                  <Flex p={"2"} direction={"column"}>
                    <Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </Text>
                    <Flex
                      justify={"between"}
                      direction={{ initial: "row", lg: "column", md: "row" }}
                      gap={"2"}
                      mt={"4"}
                    >
                      <Badge size={"3"} variant="soft" radius="full">
                        {date}
                      </Badge>
                      <Button>
                        Know more <MoreHorizontal />
                      </Button>
                    </Flex>
                  </Flex>
                </Grid>
              </Card>
            </Flex>
          </Box>

          <Box>
            <Heading size={"8"}>Projects</Heading>
            <Flex align={"center"} mt={"2"}>
              <span className="p-0.5 bg-primary w-10" />
              <Separator size={"4"} />
            </Flex>
            <Container p={"6"}>
              <ProjectsCarousel />
            </Container>

            <Container px="7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              iusto architecto alias non nisi earum, obcaecati quia ab
              accusantium id recusandae, soluta placeat repellendus deleniti
              error odit veritatis accusamus labore.
            </Container>
            <Container px="7" py={"1"}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              iusto architecto alias non nisi earum, obcaecati quia ab
            </Container>
          </Box>
        </Grid>
      </Container>
    </Reveal>
  );
}

export function ProjectsCarousel() {
  return (
    <Carousel className="w-[90%] mx-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <Inset>
                  <img src={img1} alt="" className="" />
                </Inset>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
