import { Button, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { FaEdit, FaArchive } from "react-icons/fa";
import Layout from "../../components/layout";
import MaterialTable from "material-table";
import { useRouter } from "next/router";

export default function Board() {
  const router = useRouter();
  return (
    <Layout isLogin={true} title="Trips">
      <Flex direction="column" w="100%">
        <Flex justifyContent="flex-end" gridGap={3} pr={5}>
          <Button variant="solid" colorScheme="pink">
            Add
          </Button>
          <Tooltip label="Edit">
            <IconButton icon={<FaEdit />} variant="outline" colorScheme="pink">
              Edit
            </IconButton>
          </Tooltip>
          <Tooltip label="Archive">
            <IconButton
              icon={<FaArchive />}
              variant="outline"
              colorScheme="pink"
            >
              Archive
            </IconButton>
          </Tooltip>
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
