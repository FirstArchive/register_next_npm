import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function MyNav() {
  return (
    <Navbar isBordered className="drop-shadow-sm">
      <NavbarBrand>
        <p className="font-bold text-inherit">หญ้าเทียม growgrass</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
          ดูหญ้าเทียม
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
          สอบถามหญ้าเทียม
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          ติดต่อซัพพอร์ต
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" className="font-bold">
        ลงทะเบียน
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
