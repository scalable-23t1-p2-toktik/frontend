import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

// TODO: Replace the "Link href="#" " to be appropriate APIs
export default function RootNavBar() {
    return (
        <div className="bg-amber-400">
            <Navbar>
                <NavbarBrand>
                    <p className="font-bold text-inherit text-3xl ">Toktik</p>
                </NavbarBrand>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">About Us</Link>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>

    );
}