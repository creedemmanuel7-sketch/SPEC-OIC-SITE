"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import the map to avoid SSR issues with Leaflet
const MapInner = dynamic(() => import("./MapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center text-gray-500">
        <Loader2 className="w-8 h-8 animate-spin mb-2" />
        <p>Chargement de la carte...</p>
      </div>
    </div>
  ),
});

export default function MapComponent() {
  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
      <MapInner />
    </div>
  );
}
