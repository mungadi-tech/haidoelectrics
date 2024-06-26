import { Box, Heading, IconButton, Section, Separator } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import { MessageCircleQuestion } from "lucide-react";

export function Faq() {
  return (
    <Section>
      <div className="container grid grid-cols-2 gap-10">
        <Box>
          <Heading size={"8"}>FAQ</Heading>
          <div className="flex items-center mt-2">
            <div className="p-0.5 bg-primary w-10" />
            <Separator size={"4"} />
          </div>
          <ul className="my-4 flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <IconButton variant="soft" radius="full">
                <MessageCircleQuestion />
              </IconButton>
              Product Info
            </li>
            <li className="flex items-center gap-2">
              <IconButton variant="soft" radius="full">
                <MessageCircleQuestion />
              </IconButton>
              Solar Power System
            </li>
            <li className="flex items-center gap-2">
              <IconButton variant="soft" radius="full">
                <MessageCircleQuestion />
              </IconButton>
              Solar & LED Light
            </li>
          </ul>
        </Box>
        <Box>
          <Heading size={"8"}>Blog</Heading>
          <div className="flex items-center mt-2">
            <div className="p-0.5 bg-primary w-10" />
            <Separator size={"4"} />
          </div>
          <div className="my-4 flex flex-col gap-4">
            <Link to="/" className="hover:underline">
              Solar Panels and Accessories Lead a New Chapter in Off-Grid Living
            </Link>
            <Link to="/" className="hover:underline">
              Discover One-Stop Solar Energy Solutions with Haido Electrics
            </Link>
          </div>
        </Box>
      </div>
    </Section>
  );
}
