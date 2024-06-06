import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary";
import Expenses from "../expenses";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    totalExpenses,
    setTotalExpenses,
    allTransactions,
    totalIncome,
    setTotalIncome,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expenses = 0;
    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expenses = expenses + parseFloat(item.amount));
    });
    setTotalExpenses(expenses);
    setTotalIncome(income);
  }, [allTransactions]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.300"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expenses Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg="blue.300" color={"black"} ml={"4"}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>

      <Summary
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Flex
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <Expenses
          data={allTransactions.filter((item) => item.type === "income")}
          type={"income"}
        />
        <Expenses
          data={allTransactions.filter((item) => item.type === "expenses")}
          type={"expenses"}
        />
      </Flex>
    </Flex>
  );
}
