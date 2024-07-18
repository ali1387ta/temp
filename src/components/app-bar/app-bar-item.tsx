"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const AppBarItem = ({ icon, lable, href }: { icon: React.ReactElement; lable: string; href: string }) => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(href === pathname);
  }, [href, pathname]);

  return (
    <Link href={href} className="flex grow flex-col items-center justify-center gap-2">
      <span className={"transition-all " + (isActive ? "text-primary" : "text-zinc-500")}>{icon}</span>
      <p className={"text-sm font-bold " + (isActive ? "" : "hidden")}>{lable}</p>
    </Link>
  );
};

export default AppBarItem;
