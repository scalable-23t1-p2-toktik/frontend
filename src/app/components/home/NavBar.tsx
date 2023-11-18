import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { BsFillPersonFill } from 'react-icons/bs';

// TODO: Replace the "Link href="#" " to be appropriate APIs
// TODO: Link user with the appropriate signed in user (AndrewStuber69)
export default function NavBar() {
    return (
        <div className="accent-green-600">
            <Navbar>
                <NavbarBrand>
                    <BsFillPersonFill size={50}/>
                    <p className="font-bold text-inherit text-3xl ">AndrewStuber69</p>
                </NavbarBrand>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Edit Profile</Link>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">View mode</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Logout
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>

    );
}