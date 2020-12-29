import { Box, Icon } from "@chakra-ui/react";
import { IoIosHome } from "react-icons/io";
import { FaPassport } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";

const menu = [
  {
    name: "Home",
    path: "/dashboard",
    icon: IoIosHome,
  },
  {
    name: "Trips",
    path: "/trips",
    icon: FaPassport,
  },
  {
    name: "Catalog",
    path: "/catalog",
    icon: GrCatalog,
    // TODO: Change this
  },
  {
    name: "Trip Board",
    path: "/board",
    icon: MdDashboard,
  },
];

export default function Sidebar() {
  const MenuButton = ({ name, icon, path }) => (
    <Box display="flex" alignItems="center" justifyContent="center" h={20} cursor="pointer" _hover={{
      background: "gray.600",
    }}>
      <Box as={Link} href={path}>
        <Icon as={icon} w={30} h={30} color="gray.500" />
      </Box>
    </Box>
  );
  return (
    <Box h="100vh" bg="gray.700" w="70px" pos="fixed">
      {menu.map((item) => (
        <MenuButton key={item.path} {...item}></MenuButton>
      ))}
    </Box>
  );
}
