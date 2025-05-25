import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import {
  CircleUserRound,
  Codesandbox,
  Search,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const menuItems = [
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Sales",
      href: "/sales",
    },
  ];

  return (
    <nav className="w-full max-w-screen-xl mx-auto py-4">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Codesandbox />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex flex-row gap-4 uppercase font-medium">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink href={item.href}>
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger>
              <Search />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-4 m-4">
              <Input placeholder="Search" />
            </PopoverContent>
          </Popover>

          <Link href={"/cart"}>
            <ShoppingCart />
          </Link>

          <Popover>
            <PopoverTrigger>
              <CircleUserRound />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-4 m-4">
              <Button variant="outline">CREATE ACCOUNT</Button>
              <Button variant="outline">SIGN IN</Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
