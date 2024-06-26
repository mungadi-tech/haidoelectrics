import { cn, useScrollDetect } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Diamond, Mail, MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import img1 from "../../assets/images/beautiful-urban-view.jpg";
import img2 from "../../assets/images/long-shot-la-salve-bridge-night-with-highway-lights-unique-bridge-arc-bilbao-spain.jpg";
import img3 from "../../assets/images/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative.jpg";
import img4 from "../../assets/images/sunset-sky-reflects-solar-panel-sustainable-power-generation-generative-ai.jpg";
import img5 from "../../assets/images/view-futuristic-mystical-other-worldly-sky.jpg";
import React from "react";
import {
  Button,
  Em,
  Heading,
  IconButton,
  Separator,
  Text,
} from "@radix-ui/themes";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const images = [
  {
    img: img1,
    comp: (
      <div className="absolute inset-x-0 top-40 gap-2 px-10 justify-between flex">
        <div className="flex flex-col gap-2 mt-24">
          <Heading size={"9"}>SINCE 2024</Heading>
          <Text>Solar Solutions, Go Solar with Haido Electrics</Text>
          <div className="mt-8">
            <Button size={"4"}>
              More Haido Solar <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between lg:gap-4 w-80 lg:w-96">
          <div className="flex flex-col gap-2">
            <Heading size={"7"}>10+</Heading>
            <div className="flex justify-between items-center ">
              <Text>Years in SOlar Industry</Text>
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
            <Heading size={"7"}>10+</Heading>
            <div className="flex justify-between items-center ">
              <Text>Years in SOlar Industry</Text>
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
            <Heading size={"7"}>10+</Heading>
            <div className="flex justify-between items-center ">
              <Text>Years in SOlar Industry</Text>
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
            <Heading size={"7"}>10+</Heading>
            <div className="flex justify-between items-center ">
              <Text>Years in SOlar Industry</Text>
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
            <Heading size={"7"}>10+</Heading>
            <div className="flex justify-between items-center ">
              <Text>Years in SOlar Industry</Text>
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
      <div className="absolute justify-center inset-0 mx-auto text-center top-56 px-10 h-full w-full container  items-center">
        <div className="px-20 container">
          <Heading size={"9"} mb={"6"}>
            Haido Electrics.
          </Heading>
          <div className="bg-slate-900/30 p-4">
            <Text size={"6"}>
              <Em className=" p-1">
                Anern has 10+ years of experience in the lighting industry. We
                have introduced advanced production equipment, a specialized
                production line, excellent R & D team, for you to customize
                solar lighting and led lighting solutions. Our products are
                ISO9001, CE ROHS, TUV, ISO, FC approved, meeting various
                certification requirements for different countries.
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
      <div className="absolute justify-center inset-0 mx-auto text-center top-56 px-10 h-full w-full container  items-center">
        <div className=" px-20 container">
          <Heading size={"9"} mb={"6"}>
            Solar Street Light.
          </Heading>
          <div className="bg-slate-900/30 p-4">
            <Text size={"6"}>
              <Em className=" p-1">
                Anern has 10+ years of experience in the lighting industry. We
                have introduced advanced production equipment, a specialized
                production line, excellent R & D team, for you to customize
                solar lighting and led lighting solutions. Our products are
                ISO9001, CE ROHS, TUV, ISO, FC approved, meeting various
                certification requirements for different countries.
              </Em>
            </Text>
          </div>
          <div>
            <Button size={"4"} mt={"6"}>
              More on Solar Street Light <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    img: img4,
    comp: (
      <div className="absolute justify-center inset-0 mx-auto text-center top-56 px-10 h-full w-full container  items-center">
        <div className=" px-20 container">
          <Heading size={"9"} mb={"6"}>
            Solar Panel.
          </Heading>
          <div className="bg-slate-900/30 p-4">
            <Text size={"6"}>
              <Em className=" p-1">
                Anern has 10+ years of experience in the lighting industry. We
                have introduced advanced production equipment, a specialized
                production line, excellent R & D team, for you to customize
                solar lighting and led lighting solutions. Our products are
                ISO9001, CE ROHS, TUV, ISO, FC approved, meeting various
                certification requirements for different countries.
              </Em>
            </Text>
          </div>
          <div>
            <Button size={"4"} mt={"6"}>
              More on Solar Panel <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    img: img5,
    comp: (
      <div className="absolute justify-center inset-0 mx-auto text-center top-56 px-10 h-full w-full container  items-center">
        <div className=" px-20 container">
          <Heading size={"9"} mb={"6"}>
            Hybrid Solar Inverter.
          </Heading>
          <div className="bg-slate-900/30 p-4">
            <Text size={"6"}>
              <Em className=" p-1 ">
                Anern has 10+ years of experience in the lighting industry. We
                have introduced advanced production equipment, a specialized
                production line, excellent R & D team, for you to customize
                solar lighting and led lighting solutions. Our products are
                ISO9001, CE ROHS, TUV, ISO, FC approved, meeting various
                certification requirements for different countries.
              </Em>
            </Text>
          </div>

          <div>
            <Button size={"4"} mt={"6"}>
              More on Hybrid Solar Inverter <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    ),
  },
];

export function MenuNavigation() {
  return (
    <NavigationMenu className="container">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={buttonVariants()}>
            Solar & LED Light
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <MessageCircle className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={buttonVariants()}>
            Solar Power System
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={buttonVariants()}>
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <MessageCircle className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs">
            <NavigationMenuLink className={buttonVariants()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs">
            <NavigationMenuLink className={buttonVariants()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Header() {
  const { isScrolling } = useScrollDetect();

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="">
      <Carousel plugins={[plugin.current]} className="w-full">
        <div className="fixed z-50 w-full top-0 inset-x-0 ">
          <div
            className={cn(
              "p-2 border-b border-slate-600 justify-between ",
              isScrolling ? "hidden" : "flex"
            )}
          >
            <Link to="/" className="text-primary-50">
              <Heading size={"8"}>HAIDOELECTRICS</Heading>
            </Link>
            <div className="flex gap-10 ">
              <div className="md:flex grid gap-1 md:gap-10 text-primary-50 text-xs items-center md:flex-row">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <Phone className="text-primary-50 h-4 w-4" />
                  </div>

                  <div className="flex flex-col">
                    <span>+234(0)7020334144</span>
                    <span>+234(0)8032844178</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <Mail className="text-primary-50 h-4 w-4" />
                  </div>
                  <span>info@haidoelectrics.com</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{
              opacity: isScrolling ? 0 : 1,
            }}
            animate={{
              opacity: 1,
            }}
            className={cn(
              "w-full p-4 @container shadow-md top-0",
              isScrolling ? "relative bg-[var(--accent-1)]" : "md:mt-10  fixed"
            )}
          >
            <MenuNavigation />
          </motion.div>
        </div>

        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className="relative h-[45rem] lg:h-[55rem] w-full bg-cover text-[var(--accent-1)]"
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
    </div>
  );
}
