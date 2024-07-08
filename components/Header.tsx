import React, { Suspense } from "react";
import HeaderLogo from "./HeaderLogo";
import Navigation from "./Navigation";
import { ClerkLoaded, SignedIn, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import WelcomeMsg from "./WelcomeMsg";
import Filters from "./Filters";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center justify-between w-full">
            <HeaderLogo />
            <div className="flex items-center gap-x-8">
              <Navigation />
              <div>
                <ClerkLoaded>
                  <SignedIn>
                    <UserButton
                      appearance={{
                        elements: {
                          userButtonAvatarBox: "w-10 h-10",
                        },
                      }}
                    />
                  </SignedIn>
                </ClerkLoaded>
                <ClerkLoading>
                  <Loader2 className="size-8 animate-spin text-slate-400" />
                </ClerkLoading>
              </div>
            </div>
          </div>
        </div>
        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  );
};

export default Header;
