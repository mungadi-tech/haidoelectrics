import { cn, useScrollDetect } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { AlignJustify, ArrowRight, Diamond, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import img1 from "../../assets/images/beautiful-urban-view.jpg";
import img2 from "../../assets/images/long-shot-la-salve-bridge-night-with-highway-lights-unique-bridge-arc-bilbao-spain.jpg";
import img3 from "../../assets/images/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative.jpg";
import img4 from "../../assets/images/sunset-sky-reflects-solar-panel-sustainable-power-generation-generative-ai.jpg";
import img5 from "../../assets/images/view-futuristic-mystical-other-worldly-sky.jpg";
import sys1 from "../../assets/images/s2.png";
import sys2 from "../../assets/images/s3.png";
import sys3 from "../../assets/images/p.png";
import sys4 from "../../assets/images/s1.png";
import sys5 from "../../assets/images/s2.png";
import sys6 from "../../assets/images/s2.png";
import sys7 from "../../assets/images/s2.png";
import { useRef, useState } from "react";
import {
  Box,
  Button,
  Em,
  Flex,
  Heading,
  IconButton,
  Inset,
  Popover,
  Separator,
  Text,
} from "@radix-ui/themes";
import {
  Menu,
  MenuItem,
  ProductItem,
} from "../ui/navigation-menu";

const images = [
  {
    img: img1,
    comp: (
      <div className="absolute inset-x-0 md:top-40 gap-2 px-10 justify-between flex flex-col md:flex-row">
        <div className="flex flex-col gap-2 mt-24">
          <Heading size={"9"} className="mt-24">
            SINCE <span className="text-[var(--accent-9)]">2020</span>
          </Heading>
          <Text> Empowering Your Future with Electrical, Solar, and Security Solutions</Text>
          <div className="mt-2 md:mt-8">
            <Button size={{ lg: "4" }}>
              More Haido Solar <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between lg:gap-4 w-80 lg:w-96">
          <div className="flex flex-col gap-2">
            <Heading size={"7"}>5+</Heading>
            <div className="flex justify-between items-center ">
              <Text>Years in Solar Industry</Text>
              <IconButton>
                <Diamond />
              </IconButton>
            </div>
          </div>
          <Separator
            size={"4"}
            my={"3"}
            style={{ backgroundColor: "var(--accent-1)" }}
          />

          <div className="flex flex-col gap-2">
            <Heading size={"7"}>20+</Heading>
            <div className="flex justify-between items-center ">
              <Text>State Delivery</Text>
              <IconButton>
                <Diamond />
              </IconButton>
            </div>
          </div>
          <Separator
            size={"4"}
            my={"3"}
            style={{ backgroundColor: "var(--accent-1)" }}
          />

          <div className="flex flex-col gap-2">
            <Heading size={"7"}>200+</Heading>
            <div className="flex justify-between items-center ">
              <Text>Installations</Text>
              <IconButton>
                <Diamond />
              </IconButton>
            </div>
          </div>
          <Separator
            size={"4"}
            my={"3"}
            style={{ backgroundColor: "var(--accent-1)" }}
          />

          <div className="flex flex-col gap-2">
            <Heading size={"7"}>100+</Heading>
            <div className="flex justify-between items-center ">
              <Text>Electric Products</Text>
              <IconButton>
                <Diamond />
              </IconButton>
            </div>
          </div>
          <Separator
            size={"4"}
            my={"3"}
            style={{ backgroundColor: "var(--accent-1)" }}
          />
        </div>
      </div>
    ),
  },
  {
    img: img2,
    comp: (
      <div className="absolute justify-center inset-0 mx-auto text-center md:top-56 md:px-10 h-full w-full md:container  items-center">
        <div className="md:px-20 mt-48 md:mt-32 container">
          <Heading size={"9"} mb={"6"} className="mt-24">
            Mission
          </Heading>
          <div className="md:bg-slate-900/30 bg-slate-900/90 backdrop-blur-sm p-4">
            <Text size={{ md: "6" }}>
              <Em className="p-1">
              To provide innovative, reliable, and cost-effective electrical, solar, and security solutions that enhance our customers' lives, protect their properties, and contribute to a sustainable future
              </Em>
            </Text>
          </div>
        </div>
      </div>
    ),
  },
  {
    img: img3,
    comp: (
      <div className="absolute justify-center inset-0 mx-auto text-center md:top-56 md:px-10 h-full w-full md:container  items-center">
        <div className="md:px-20 mt-48 md:mt-32 container">
          <Heading size={"9"} mb={"6"} className="mt-24">
          Excellence
          </Heading>
          <div className="md:bg-slate-900/30 bg-slate-900/90 backdrop-blur-sm p-4">
            <Text size={{ md: "6" }}>
              <Em className="p-1">
              Delivering high-quality services and products
              </Em>
            </Text>
          </div>
        </div>
      </div>
    ),
  },
  {
    img: img4,
    comp: (
      <div className="absolute justify-center inset-0 mx-auto text-center md:top-56 md:px-10 h-full w-full md:container  items-center">
        <div className="md:px-20 mt-48 md:mt-32 container">
          <Heading size={"9"} mb={"6"} className="mt-24">
          Integrity
          </Heading>
          <div className="md:bg-slate-900/30 bg-slate-900/90 backdrop-blur-sm p-4">
            <Text size={{ md: "6" }}>
              <Em className="p-1">
              Honesty, transparency, and trustworthiness
- Sustainability: Promoting eco-friendly solutions and practices

              </Em>
            </Text>
          </div>
        </div>
      </div>
    ),
  },
  {
    img: img5,
    comp: (
      <div className="absolute justify-center inset-0 mx-auto text-center md:top-56 md:px-10 h-full w-full md:container  items-center">
        <div className="md:px-20 mt-48 md:mt-32 container">
          <Heading size={"9"} mb={"6"} className="mt-24">
          Customer Focus
          </Heading>
          <div className="md:bg-slate-900/30 bg-slate-900/90 backdrop-blur-sm p-4">
            <Text size={{ md: "6" }}>
              <Em className="p-1">
              Tailoring our services to meet individual needs
        
              </Em>
            </Text>
          </div>
        </div>
      </div>
    ),
  },
];

function Navbar({
  className,
  isScrolling,
}: {
  className?: string;
  isScrolling: boolean;
}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("z-50 ", className)}>
      <div className="hidden md:block">
        <Menu setActive={setActive}>
        <MenuItem
            isScrolling={isScrolling}
            setActive={setActive}
            active={active}
            item="Electrical"
          >
            <div className="overflow-auto text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Smart Meters"
                href=""
                src={sys1}
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Energy Storage System ESS"
                href=""
                src={sys2}
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Electric Vehicle Charging Stations"
                href=""
                src={sys3}
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="High-Efficiency Motors"
                href=""
                src={sys4}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Power Quality Analyzers"
                href=""
                src={sys5}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Circuit Breakers and Switchgear"
                href=""
                src={sys6}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Electrical Distribution Boards"
                href=""
                src={sys7}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Industrial Automation Systems"
                href=""
                src={sys7}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
               <ProductItem
                title="LED Lighting Systems"
                href=""
                src={sys7}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Surge Protection Devices SPDs"
                href=""
                src={sys7}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              /> 
            </div>
          </MenuItem>
          <MenuItem
            isScrolling={isScrolling}
            setActive={setActive}
            active={active}
            item="Solar Power System"
          >
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="High-Efficiency Solar Panels"
                href="https://algochurn.com"
                src={sys1}
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Solar Inverters"
                href="https://tailwindmasterkit.com"
                src={sys2}
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Solar Battery Storage System"
                href="https://gomoonbeam.com"
                src={sys3}
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Solar System Water Pumps"
                href="https://userogue.com"
                src={sys4}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Solar Street Lights"
                href="https://userogue.com"
                src={sys5}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Solar Home Systems"
                href="https://userogue.com"
                src={sys6}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Solar Charge Controller"
                href="https://userogue.com"
                src={sys7}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem
            isScrolling={isScrolling}
            setActive={setActive}
            active={active}
            item="CCTV"
          >
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="IP Cameras (4K, PTZ, and Night Vision)"
                href="https://algochurn.com"
                src={sys1}
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title=" CCTV Recorders (NVRs and DVRs)"
                href="https://tailwindmasterkit.com"
                src={sys2}
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Video Management Software (VMS)"
                href="https://gomoonbeam.com"
                src={sys3}
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title=" Access Control Systems"
                href="https://userogue.com"
                src={sys4}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title=" Intrusion Detection Systems
"
                href="https://userogue.com"
                src={sys5}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Smart Doorbells with Cameras
"
                href="https://userogue.com"
                src={sys6}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Wireless CCTV Systems"
                href="https://userogue.com"
                src={sys7}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <Box>
            <Link
              href="/docs"
              className={cn("text-white", isScrolling && "text-primary")}
            >
              About Us
            </Link>
          </Box>
          <Box>
            <Link
              className={cn("text-white", isScrolling && "text-primary")}
              href="/docs"
            >
              Contact Us
            </Link>
          </Box>
        </Menu>
      </div>
      <div
        className={cn(
          "md:hidden relative top-10  w-full bg-transparent flex justify-end p-4 shadow-md",
          isScrolling && "fixed top-0 bg-[var(--accent-1)]"
        )}
      >
        <div>
          <Popover.Root>
            <Popover.Trigger>
              <Button radius="full" size={"3"}>
                <AlignJustify width="16" height="16" />
              </Button>
            </Popover.Trigger>
            <Popover.Content width="360px">
              <Flex className="flex-col gap-4 rounded-none">
                <Link
                  className="hover:bg-primary p-2 hover:text-white"
                  href="/docs"
                >
                  Solar & LED Light
                </Link>
                <Link
                  className="hover:bg-primary p-2 hover:text-white"
                  href="/docs"
                >
                  Solar Power System
                </Link>
                <Link
                  className="hover:bg-primary p-2 hover:text-white"
                  href="/docs"
                >
                  Solutions
                </Link>
                <Link
                  className="hover:bg-primary p-2 hover:text-white"
                  href="/docs"
                >
                  About Us
                </Link>
                <Link
                  className="hover:bg-primary p-2 hover:text-white"
                  href="/docs"
                >
                  Contact Us
                </Link>
              </Flex>
            </Popover.Content>
          </Popover.Root>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { isScrolling } = useScrollDetect();

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <Inset className="z-10 fixed w-full text-white">
        <div
          className={cn(
            "p-2 border-b border-slate-600 justify-between items-center",
            isScrolling ? "hidden" : "flex "
          )}
        >
          <Link to="/" className="text-primary-50">
            <Heading size={"5"}>HAIDO</Heading>
          </Link>
          <Flex gap={"9"}>
            <div className="md:flex grid gap-1 md:gap-10 text-primary-50 text-xs items-center md:flex-row">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/20 p-2 rounded-full">
                  <Phone className="text-primary-50 h-4 w-4" />
                </div>

                <div className="flex flex-col">
                  <span>+234(0)8033323030</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-secondary/20 p-2 rounded-full">
                  <Mail className="text-primary-50 h-4 w-4" />
                </div>
                <span>haidoelectrics@gmail.com</span>
              </div>
            </div>
          </Flex>
        </div>

        <motion.div
          initial={{
            opacity: isScrolling ? 0 : 1,
          }}
          animate={{
            opacity: 1,
          }}
        ></motion.div>
      </Inset>
      <Navbar
        isScrolling={isScrolling}
        className={cn(
          "fixed w-full mt-12 md:shadow-md  md:bg-slate-50/10",
          isScrolling && "md:bg-[var(--accent-1)] mt-0"
        )}
      />
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div
              className="relative h-[50rem] lg:h-[55rem] w-full bg-cover text-[var(--accent-1)]"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={() => {
                plugin.current.reset, plugin.current.play();
              }}
              style={{ backgroundImage: `url(${image.img})` }}
            >
              {image.comp}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
