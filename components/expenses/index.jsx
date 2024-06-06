import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Expenses({ type, data }) {
  return (
    <Box
      flex={1}
      w="full"
      bg={"white"}
      mr={"4"}
      mt={"10"}
      p={"5"}
      pb={"4"}
      border={"1px solid"}
      borderColor={"gray.400"}
      borderRadius={"12"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"md"} color={"gray.400"}>
          {type === "income" ? "Income" : "Expenses"}
        </Heading>
      </Flex>
      {data?.map((item) => (
        <Flex
          key={item.id}
          bg={type === "expenses" ? "orange.400" : "blue.400"}
          mt={"4"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid"}
          borderColor={"gray.400"}
          borderRadius={"8"}
          p={"4"}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Text ml="4" fontWeight="bold" color="gray.600">
              {item.description}
            </Text>
          </Flex>
          <Text color="white">${item.amount}</Text>
        </Flex>
      ))}
    </Box>
  );
}
