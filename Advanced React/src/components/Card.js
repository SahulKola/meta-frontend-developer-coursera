import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <VStack
        align="flex-start"
        bg="white"
        borderRadius="3xl"
        overflow="hidden"
      >
        <Image src={imageSrc} borderRadius="2xl" width="100%"></Image>
        <VStack align="flex-start" paddingInline="5" paddingBlock="2">
          <Heading color="#000" as="h1" size="lg">
            {title}
          </Heading>
          <Text color="#aaa">{description}</Text>
          <HStack align="center" justifyContent="center" pb={4}>
            <Text color="#000">See More</Text>
            <FontAwesomeIcon color="#000" icon={faArrowRight} size="sm" />
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Card;
