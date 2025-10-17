import React from "react";
import { Hello } from "@/components/hello/hello";
import { SpecialHello } from "@/components/special-hello/special-hello";
import { VerySpecialHello } from "@/components/very-special-hello/very-special-hello";
import { HelloGrafana } from "@/components/hello-grafana/hello-grafana";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-extrabold text-xl">
      <div className="flex flex-col text-center align-middle justify-center w-full items-center gap-5 mt-16">
        <Hello message="Grafana UI experiments" />
        <SpecialHello message="Grafana UI experiments" />
        <VerySpecialHello message="Grafana UI experiments" />
        <HelloGrafana />
      </div>
    </div>
  );
}
