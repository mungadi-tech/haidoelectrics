import Reveal from "@/lib/Reveal";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Separator,
} from "@radix-ui/themes";
import { MessageCircleQuestion } from "lucide-react";

export function Faq() {
  return (
    <Reveal>
      <Container my={"9"} p={"4"}>
        <Grid columns={"2"} gap={"9"}>
          <Box>
            <Heading size={"8"}>FAQ</Heading>
            <Flex align={"center"} mt={"2"}>
              <span className="p-0.5 bg-primary w-10" />
              <Separator size={"4"} />
            </Flex>
            <Flex my={"4"} direction={"column"} gap={"4"}>
              <Flex gap={"2"} align={"center"}>
                <IconButton variant="soft" radius="full">
                  <MessageCircleQuestion />
                </IconButton>
                <Link className="hover:underline">Product Info</Link>
              </Flex>
              <Flex gap={"2"} align={"center"}>
                <IconButton variant="soft" radius="full">
                  <MessageCircleQuestion />
                </IconButton>
                <Link className="hover:underline">Solar Power System</Link>
              </Flex>
              <Flex gap={"2"} align={"center"}>
                <IconButton variant="soft" radius="full">
                  <MessageCircleQuestion />
                </IconButton>
                <Link className="hover:underline">Solar & LED Light</Link>
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Heading size={"8"}>Blog</Heading>
            <Flex align={"center"} mt={"2"}>
              <span className="p-0.5 bg-primary w-10" />
              <Separator size={"4"} />
            </Flex>
            <Flex my={"4"} direction={"column"} gap={"4"}>
              <Link className="hover:underline">
                Solar Panels and Accessories Lead a New Chapter in Off-Grid
                Living
              </Link>
            </Flex>
          </Box>
        </Grid>
      </Container>
    </Reveal>
  );
}
