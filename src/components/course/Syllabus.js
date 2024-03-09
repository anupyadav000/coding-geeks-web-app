import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Topic from "./Topic";

const Column1 = [
  [
    ["C++ STL"],
    ["Vector", "Map", "Stack", "Queue", "Pair", "Set", "Priority Queue"],
  ],
  [
    ["Time Complexity and Space Complexity"],
    ["Asymptotic Notations", "Amortized Analysis"],
  ],
  [["Recursion"], ["On String", "On Array", "On Tree", "On Linkedlist"]],
  [["Backtracking"], ["Pruning In Backtracking Problems"]],
];
const Column2 = [
  [
    ["Dynamic Programing"],
    [
      "Linear Dp",
      "String and Dp",
      "Dp with Tree and Graph",
      "Knapsack based Dp",
      "Dp with bits manipulation",
      "Dp on math problems",
      "Classical dp problems",
      "Grid based dp",
      "Multidimensional Dp",
      "Digit problems with dp",
      "Interval problems with dp",
    ],
  ],
  [["Ad-hoc Technique"], ["Sliding Window", "Hashing", "2-Pointer"]],
  [["Searching"], ["Binary Search", "Ternary Search", "Seaching in 2D array"]],
  [
    ["Greedy Technique"],
    ["Sort/Array", "Hash/Multi-set", "Strings", "Heap", "Stack"],
  ],
];
const Column3 = [
  [["Depth First Search"], ["On Tree", "On Graph"]],
  [["Breadth First Search"], ["On Tree", "On Graph"]],
  [
    ["Graph Algorithms"],
    [
      "Union Find",
      "Cycle Find",
      "Cycle Find",
      "Topological Sort",
      "Dijkstras and Bellman Ford",
      "Finding Shortest Path",
      "Tarjan’s Algorithm",
      "Minimum Spanning Tree",
      "Travelling Salesman Problem (TSP)",
      "Kosaraju’s Algorithm",
    ],
  ],
  [["Advanced DSA"], ["Trie", "Segment Tree", "AVL Tree"]],
];

function Syllabus() {
  return (
    <Box margin="auto" width="100%" mt="100px" mb="100px">
      <Text textAlign="center" fontSize="50px" fontWeight="700">
        Syllabus
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-around"
        m="auto"
        mt="50px"
      >
        <Flex
          flexDirection="column"
          width={{ base: "80%", md: "25%" }}
          m="auto"
        >
          <Text fontSize="30px" fontWeight="500" textAlign="center" mb="20px">
            Basic
          </Text>
          {Column1.map((topicText, ind) => {
            return <Topic topicData={topicText} key={ind}></Topic>;
          })}
        </Flex>
        <Flex
          flexDirection="column"
          width={{ base: "80%", md: "25%" }}
          m="auto"
        >
          <Text fontSize="30px" fontWeight="500" textAlign="center" mb="20px">
            Intermediate
          </Text>
          {Column2.map((topicText, ind) => {
            return <Topic topicData={topicText} key={ind}></Topic>;
          })}
        </Flex>
        <Flex
          flexDirection="column"
          width={{ base: "80%", md: "25%" }}
          m="auto"
        >
          <Text fontSize="30px" fontWeight="500" textAlign="center" mb="20px">
            Advanced
          </Text>
          {Column3.map((topicText, ind) => {
            return <Topic topicData={topicText} key={ind}></Topic>;
          })}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Syllabus;
