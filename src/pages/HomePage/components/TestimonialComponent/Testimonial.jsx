import React from "react";
import {
  Card,
  Image,
  Heading,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Text,
  AspectRatio,
  HStack,
} from "@chakra-ui/react";

const testimonials = [
  {
    id:1,
    title: "ዮሃንስ ሶፍያ",
    description:
      "ምቹ ትራንስፖርት ነበር በጣም ደስ ብሎኛል።  በጊዜ ወደ ስራየ ተመልሻለሁ እንዴት እንደሚሆን እንደሚረዳ ",
    image: "https://www.youtube.com/embed/QhBnZ6NPOY0",
    price: "450 ብር",
  },
  {
    id:2,
    title: "ማርቆን ሶፍያ",
    description:
      "This table is perfect for modern, minimalist spaces. It's made of solid oak and features a sleek, clean design.",
    image: "https://via.placeholder.com/560x315",
    price: "650 ብር",
  },
];

function Testimonial() {
  return (
    <div className="testimonialContainer">
      <HStack spacing="24px">
      <Card maxW="sm">
        <CardBody>
          <AspectRatio maxW="560px" ratio={1}>
            <iframe
              title="naruto"
              src={testimonials[0].image}
              allowFullScreen
            />
          </AspectRatio>
          <Stack mt="6" spacing="3">
            <Heading size="md">{testimonials[0].title}</Heading>
            <Text>
             {testimonials[0].description}
            </Text>

          </Stack>
        </CardBody>
        <Divider />

      </Card>


      <Card maxW="sm">
        <CardBody>
          <AspectRatio maxW="560px" ratio={1}>
            <iframe
              title="naruto"
              src={testimonials[0].image}
              allowFullScreen
            />
          </AspectRatio>
          <Stack mt="6" spacing="3">
            <Heading size="md">{testimonials[0].title}</Heading>
            <Text>
             {testimonials[0].description}
            </Text>

          </Stack>
        </CardBody>
        <Divider />
    
      </Card>


      <Card maxW="sm">
        <CardBody>
          <AspectRatio maxW="560px" ratio={1}>
            <iframe
              title="naruto"
              src={testimonials[0].image}
              allowFullScreen
            />
          </AspectRatio>
          <Stack mt="6" spacing="3">
            <Heading size="md">{testimonials[0].title}</Heading>
            <Text>
             {testimonials[0].description}
            </Text>

          </Stack>
        </CardBody>
        <Divider />
    
      </Card> 
      </HStack>

    </div>
  );
}

export default Testimonial;
