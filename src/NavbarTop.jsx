import {Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react"
import Logo from "./images/wheel.png"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

export const SDSLogo = () => {
  return (
    <Image
    alt="SDS Logo"
    className="w-10 h-10 mr-2"
    src={Logo}
    />
  );
};

export default function TopNav() {
  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <SDSLogo />
        <p className="font-bold text-inherit">SDS</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="/home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <HashLink color="foreground" to="/home#pricing">
            Pricing
          </HashLink>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/about">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="warning" to="/book-lesson" variant="flat">
            Book Now
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
