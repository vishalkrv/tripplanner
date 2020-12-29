import { Button, Flex } from "@chakra-ui/react";
import Layout from "../components/layout";
import MaterialTable from "material-table";

export default function Trips() {
  return (
    <Layout isLogin={true} title="Trips">
      <Flex direction="column" w="100%">
        <Flex justifyContent="flex-end" gridGap={10} pr={5}>
          <Button variant="solid" colorScheme="pink">
            Create
          </Button>
          <Button variant="outline" colorScheme="pink">
            Clone
          </Button>
          <Button variant="outline" colorScheme="pink">
            Edit
          </Button>
          <Button variant="outline" colorScheme="pink">
            Archive
          </Button>
        </Flex>
        <Flex direction="column" boxShadow="md" rounded="md" mt={5} pr={5}>
          <MaterialTable
            options={{ pageSize: 7 }}
            columns={[
              { title: "Title", field: "title" },
              { title: "Description", field: "description" },
              { title: "Destination", field: "destination" },
              { title: "Days", field: "days" },
              { title: "Travelers", field: "travelers", type: "numeric" },
              { title: "Estimated Cost", field: "cost" },
              { title: "Keywords", field: "keywords" },
            ]}
            data={[
              {
                title: "Family Disneyland adventure",
                description:
                  "Budget Friendly trip to see the highlights of Disneyland ",
                destination: "Florida",
                days: "4 Nights",
                travelers: 4,
                cost: "$2,000 to $2,750",
                keywords: "Florida, Disney, Family",
              },
              {
                title: "Weekend wine testing in Virgina",
                description:
                  "Exciting trips for couples to explore the mountains of Virginia and taste local wines",
                destination: "Virginia",
                days: "3 Nights",
                travelers: 2,
                cost: "$1,000 to $1,500",
                keywords: "Wine, Virgina, Romance, Mountains",
              },
              {
                title: "Family Disneyland adventure",
                description:
                  "Budget Friendly trip to see the highlights of Disneyland ",
                destination: "Florida",
                days: "4 Nights",
                travelers: 4,
                cost: "$2,000 to $2,750",
                keywords: "Florida, Disney, Family",
              },
              {
                title: "Weekend wine testing in Virgina",
                description:
                  "Exciting trips for couples to explore the mountains of Virginia and taste local wines",
                destination: "Virginia",
                days: "3 Nights",
                travelers: 2,
                cost: "$1,000 to $1,500",
                keywords: "Wine, Virgina, Romance, Mountains",
              },
              {
                title: "Family Disneyland adventure",
                description:
                  "Budget Friendly trip to see the highlights of Disneyland ",
                destination: "Florida",
                days: "4 Nights",
                travelers: 4,
                cost: "$2,000 to $2,750",
                keywords: "Florida, Disney, Family",
              },
              {
                title: "Weekend wine testing in Virgina",
                description:
                  "Exciting trips for couples to explore the mountains of Virginia and taste local wines",
                destination: "Virginia",
                days: "3 Nights",
                travelers: 2,
                cost: "$1,000 to $1,500",
                keywords: "Wine, Virgina, Romance, Mountains",
              },
            ]}
            title=""
          />
        </Flex>
      </Flex>
    </Layout>
  );
}
