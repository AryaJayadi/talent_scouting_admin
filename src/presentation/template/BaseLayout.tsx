import {Outlet} from "react-router";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu.tsx";
import {Link} from "react-router-dom";
import React from "react";
import {cn} from "@/lib/utils.ts";

export const BaseLayout = () => {
    const components: { title: string; href: string; description: string }[] = [
        {
            title: "Get Company by ID",
            href: "/api/get",
            description:
                "Fetches a company based on the provided ID.",
        },
        {
            title: "Get All Companies",
            href: "/api/getAll",
            description:
                "Retrieves a list of all companies.",
        },
        {
            title: "Insert Company",
            href: "/company/insert",
            description:
                "Inserts a new company into the database.",
        },
        {
            title: "Delete Company by ID",
            href: "/api/delete",
            description:
                "Deletes a company based on the provided ID.",
        },
        {
            title: "Insert Companies in Bulk",
            href: "/company/insert/bulk",
            description:
                "Uploads a file and inserts multiple companies in bulk.",
        },
    ]

    return (
        <div className="w-full h-full">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/public"
                                        >
                                            {/*<Icons.logo className="h-6 w-6" />*/}
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                shadcn/ui
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Beautifully designed components that you can copy and
                                                paste into your apps. Accessible. Customizable. Open
                                                Source.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem to="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem to="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem to="/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        to={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link legacyBehavior passHref to="/docs">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Documentation
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="m-4 w-full h-full">
                <Outlet />
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";