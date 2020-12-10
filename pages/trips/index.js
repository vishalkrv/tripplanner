import { Button, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { FaRegCopy, FaEdit, FaArchive } from "react-icons/fa";
import { useStoreActions, useStoreState } from "easy-peasy";
import Layout from "../../components/layout";
import MaterialTable from "material-table";
import { useEffect } from "react";

export default function Trips() {
  const tripAction = useStoreActions((actions) => actions.trips);
  const tripState = useStoreState((state) => state.trips);

  useEffect(() => {
    tripAction.getTripList();
  }, []);
  return (
    <Layout isLogin={true} title="Trips">
      <Flex direction="column" w="100%">
        <Flex justifyContent="flex-end" gridGap={3} pr={5}>
          <Button variant="solid" colorScheme="pink">
            Create
          </Button>
          <Tooltip label="Clone">
            <IconButton
              icon={<FaRegCopy />}
              variant="outline"
              colorScheme="pink"
            >
              Clone
            </IconButton>
          </Tooltip>
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
            options={{ pageSize: 10 }}
            columns={[
              { title: "Title", field: "title" },
              { title: "Description", field: "description" },
              { title: "Destination", field: "destination" },
              { title: "Days", field: "days" },
              { title: "Travelers", field: "travelers", type: "numeric" },
              { title: "Estimated Cost", field: "cost" },
              { title: "Keywords", field: "keywords" },
            ]}
            data={tripState.tripList}
          />
        </Flex>
      </Flex>
    </Layout>
  );
}
