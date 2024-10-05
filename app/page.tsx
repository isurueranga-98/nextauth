import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import Logo from "@/components/Logo/logo";
import HomeBackground from "@/components/Background/homebackground";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <HomeBackground>
    <main className=" h-screen flex  flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] gap-10 ">
        <Logo />
      <div className="space-y-6 text-center">
        <p className="text-black text-lg">
          RESOURCES RESERVATION SYSTEM
        </p>
        <div>
          <LoginButton  asChild>
            <Button variant="default" size="lg">
              Make Your Reservation
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
    </HomeBackground>
  )
}

// from-sky-400 to-blue-800