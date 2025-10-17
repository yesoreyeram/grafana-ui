import React from "react";
import { Hello } from "@/components/hello/hello";
import { SpecialHello } from "@/components/special-hello/special-hello";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-extrabold text-xl">
      <div className="items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-extrabold text-xl mt-32">
        <Hello message="Grafana UI Experiments" />
        <div className="my-16" />
        <SpecialHello message="Grafana UI Experiments" />
      </div>
    </div>
  );
}
