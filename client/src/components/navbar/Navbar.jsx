import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import DropDownNavbar from "./DropDownNavbar";
import DropDownNavbarUser from "./DropDownNavbarUser";
import { AuthContext } from "../../state/AuthContext/AuthContext";
import { useContext } from "react";
import WeekNavigator from "./WeekNavigator";

const NavbarTop = () => {
  const { token, user } = useContext(AuthContext);

  return (
    <Navbar isBordered>
      <NavbarBrand className="flex gap-2">
        <p className="text-[26px]">Gym</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex">
        <NavbarItem>
          <WeekNavigator />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <p>{user ? user.name : null}</p>
        <NavbarItem>{token ? <DropDownNavbarUser /> : <DropDownNavbar />}</NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarTop;
