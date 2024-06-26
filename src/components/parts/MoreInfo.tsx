import {
  Badge,
  Button,
  Card,
  Flex,
  Heading,
  Inset,
  Section,
  Separator,
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

export function MoreInfo() {
  const date = new Date().toLocaleString();
  return (
    <Section>
      <div className="text-7xl text-center text-balance mb-20">
        Find The Information you Need
      </div>
      <div className="container grid lg:grid-cols-2 gap-10">
        <div>
          <Heading size={"8"}>News</Heading>
          <div className="flex items-center mt-2">
            <div className="p-0.5 bg-primary w-10" />
            <Separator size={"4"} />
          </div>

          <Flex gap={"2"} direction={"column"} mt={"4"}>
            <Card>
              <div className="grid grid-cols-2 gap-4">
                <Inset>
                  <img
                    src={img1}
                    alt=""
                    className="w-96 lg:w-72 absolute inset-0 rounded-none"
                  />
                </Inset>
                <div className="p-2 relative">
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div className="flex justify-between mt-4 items-center">
                    <Badge variant="soft" radius="full">
                      {date}
                    </Badge>
                    <Button>
                      <span>Know more</span>

                      <MoreHorizontal />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="grid grid-cols-2 gap-4">
                <Inset>
                  <img
                    src={img1}
                    alt=""
                    className="w-96 lg:w-72 absolute inset-0 rounded-none"
                  />
                </Inset>
                <div className="p-2 relative">
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div className="flex justify-between mt-4 items-center">
                    <Badge variant="soft" radius="full">
                      {date}
                    </Badge>
                    <Button>
                      <span>Know more</span>

                      <MoreHorizontal />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Flex>
        </div>

        <div>
          <Heading size={"8"}>Projects</Heading>
          <div className="flex items-center mt-2">
            <div className="p-0.5 bg-primary w-10" />
            <Separator size={"4"} />
          </div>

          <Flex mt={"4"} direction={"column"}>
            <ProjectsCarousel />
          </Flex>
        </div>
      </div>
    </Section>
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
