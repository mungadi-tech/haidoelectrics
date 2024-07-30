"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Link } from "@tanstack/react-router";
import sol1 from "../../assets/images/l1.png";
import sol2 from "../../assets/images/s5.png";
import sol3 from "../../assets/images/c1.jpg";
import sol4 from "../../assets/images/view-futuristic-mystical-other-worldly-sky.jpg";
import sol5 from "../../assets/images/l2.png";
import sol6 from "../../assets/images/s8.png";
import sol7 from "../../assets/images/long-shot-la-salve-bridge-night-with-highway-lights-unique-bridge-arc-bilbao-spain.jpg";
import sol8 from "../../assets/images/c3.jpg";
import sol9 from "../../assets/images/s7.png";
import sol10 from "../../assets/images/s8.png";
import sol11 from "../../assets/images/c4.jpg";
import sol12 from "../../assets/images/s1.png";
import sol13 from "../../assets/images/s2.png";
import sol14 from "../../assets/images/s3.png";
import sol15 from "../../assets/images/s4.png";
const ProjectParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[250vh] py-4 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <div className="text-7xl text-center my-10">Solutions</div>
        <motion.div className="flex flex-row-reverse space-x-reverse md:space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-2 md:py-4 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Solar Power <br />
        System & Lighting Solutions
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
      A leading provider of comprehensive electrical, solar, and security solutions, offering installation, repair, estimation, and supply services to meet the diverse needs of our clients. Our team of expert electricians, solar professionals, and security specialists is dedicated to delivering high-quality, efficient, and sustainable solutions that exceed customer expectations.

      </p>
    </div>
  );
};

const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

export function Solutions() {
  return <ProjectParallax products={products} />;
}
const products = [
  {
    title: "Moonbeam",
    link: "//",
    thumbnail: sol1,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: sol2,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: sol3,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: sol4,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: sol5,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: sol6,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: sol7,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: sol8,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: sol9,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: sol10,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: sol11,
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: sol12,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: sol13,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: sol14,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: sol15,
  },
];
