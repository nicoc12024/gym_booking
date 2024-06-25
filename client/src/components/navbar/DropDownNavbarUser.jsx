import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext/AuthContext";

export default function DropDownNavbarUser() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout();
      navigate("/", { replace: true });
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar size="sm" className="cursor-pointer text-neutral-800" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Action event example">
        <DropdownItem key="user" as={Link} to="/user">
          Home
        </DropdownItem>
        <DropdownItem key="perfil" as={Link} to="/profile">
          Perfil
        </DropdownItem>
        <DropdownItem as={Link} key="account" to="/account">
          Cuenta
        </DropdownItem>
        <DropdownItem key="logout" onClick={handleLogout}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
