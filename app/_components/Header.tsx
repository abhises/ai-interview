import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <Image src={"./logo.svg"} alt="logo" height={500} width={500}/>
          {/* <h1 className="text-base font-bold md:text-2xl">AI Interview</h1> */}
        </div>
        <Link href="/dashboard">
        <Button className="cursor-pointer">Get Started</Button>
        </Link>
      </nav>
    </div>
  );
};
