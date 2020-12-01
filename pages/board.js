import { Button, Flex } from "@chakra-ui/react";
import Layout from "../components/layout";
import MaterialTable from "material-table";
import { useStoreState, useStoreActions } from "easy-peasy";

export default function Board() {
  const user = useStoreState((state) => state.user);
  const userAction = useStoreActions((actions) => actions.user);

  return (
    <Layout isLogin={true} title="Trips">
      <Flex direction="column" w="100%">
        <Flex justifyContent="flex-end" gridGap={10} pr={5}>
          <Button variant="solid" colorScheme="pink">
            Add {user.name}
          </Button>
          <Button
            variant="outline"
            colorScheme="pink"
            onClick={() => userAction.setName("Dunoya test")}
          >
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
              { title: "Budget", field: "budget" },
              { title: "Keyword", field: "keyword" },
            ]}
            data={[
              {
                title: "African Safari",
                description: "Looking for a guided safari to hunt antelope",
                destination: "South Africa",
                days: "7 Nights",
                travelers: 2,
                budget: "$12,000",
                keyword: "African Safari",
              },
              {
                title: "Grand Canyon Hiking",
                description:
                  "Desire a unique hiking trip of grand canyon to experience out of the way locations",
                destination: "Utah",
                days: "4 Nights",
                travelers: 3,
                cost: "$1,000",
                keyword: "Grand Canyon Hiking",
              },
            ]}
            title="Trip Board"
          />
        </Flex>
      </Flex>
    </Layout>
  );
}
