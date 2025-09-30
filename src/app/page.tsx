"use client";
import { Suspense } from "react";
import CosmicJourney from "@/components/CosmicJourney";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <CosmicJourney />
    </Suspense>
  );
}


