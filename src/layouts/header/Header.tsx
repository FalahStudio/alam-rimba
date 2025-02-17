import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import RimbaLogo from "./RimbaLogo";
import Routes from "./Routes";

export default function Header() {
    return (
        <Navbar
            className="py-2.5 px-4"
            maxWidth="full"
            isBlurred={false}
        >
            <NavbarContent
                className="hidden lg:flex gap-8"
                justify="start"
            >
                {Routes.position_left.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link
                            color="foreground"
                            href={item.route}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarBrand className="justify-center">
                <RimbaLogo />
            </NavbarBrand>
            <NavbarContent className="hidden lg:flex gap-8" justify="end">
                {Routes.position_right.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link color="foreground" href={item.route}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    )
}
