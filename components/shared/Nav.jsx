"use client";

import { useUser, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const navigationItems = [
    {
      title: "خانه",
      href: "/",
      description: "",
    },
    {
      title: "ست های ابزار جراحی",
      description:
        "درصورت نیاز به مشاهده ست ها میتوانید کاتالوگ مارا دانلود کنید :",
      items: [
        { title: "دسته بیستوری", href: "/catalogs" },
        { title: "چاقوی چشمی", href: "/catalogs" },
        { title: "ابزار پروستات", href: "/catalogs" },
        { title: "انواع پنس ها", href: "/catalogs" },
      ],
    },
    {
      title: "بنیان آتیه جراح",
      description: "شرکت تجهیزات پزشکی بنیان آتیه جراح",
      items: [
        { title: "درباره ما", href: "/about" },
        { title: "تماس با ما", href: "/contact" },
      ],
    },
  ];

  const { user, isSignedIn } = useUser();
  const { signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/univerp.jpg" width={80} height={80} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="justify-start items-center text-right gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <Link href={item.href}>
                        <NavigationMenuLink>
                          <Button variant="ghost">{item.title}</Button>
                        </NavigationMenuLink>
                      </Link>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-xs">
                                {item.description}
                              </p>
                            </div>
                            <Link href="/catalogs">
                              <Button size="sm" className="mt-10 w-full">
                                مشاهده کاتالوگ
                              </Button>
                            </Link>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-start">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Admin Panel and Login/Logout */}
        <div className="hidden lg:flex gap-4 items-center">
          {isSignedIn ? (
            <>
              {user?.publicMetadata?.role === "admin" && (
                <Link href="/panel">
                  <Button variant="outline">پنل مدیریت</Button>
                </Link>
              )}
              <Button variant="destructive" onClick={() => signOut()}>
                خروج
              </Button>
            </>
          ) : (
            <Link href="/sign-in">
              <Button variant="default">ورود</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">منو</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-6">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    {item.href ? (
                      <Link href={item.href}>
                        <Button variant="ghost" className="w-full">
                          {item.title}
                        </Button>
                      </Link>
                    ) : (
                      <>
                        <p className="font-bold">{item.title}</p>
                        <div className="ml-4">
                          {item.items?.map((subItem) => (
                            <Link key={subItem.title} href={subItem.href}>
                              <Button
                                variant="ghost"
                                className="text-muted-foreground w-full justify-start"
                              >
                                {subItem.title}
                              </Button>
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
                {isSignedIn ? (
                  <>
                    {user?.publicMetadata?.role === "admin" && (
                      <Link href="/panel">
                        <Button variant="outline" className="w-full">
                          پنل مدیریت
                        </Button>
                      </Link>
                    )}
                    <Button
                      variant="destructive"
                      onClick={() => signOut()}
                      className="w-full"
                    >
                      خروج
                    </Button>
                  </>
                ) : (
                  <Link href="/sign-in">
                    <Button variant="default" className="w-full">
                      ورود
                    </Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
