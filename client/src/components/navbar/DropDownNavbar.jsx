import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function DropDownNavbar() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar size="sm" className="cursor-pointer text-neutral-800" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Action event example">
        <DropdownItem key="login" href="/login">
          Login
        </DropdownItem>
        <DropdownItem as={Link} to="/create-account" key="create">
          Create account
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
