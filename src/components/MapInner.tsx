"use client";

import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useTranslations } from "next-intl";

// Fix for default marker icons in Leaflet with Next.js
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const branches = [
  // Siège / Notsè
  { id: 1, name: "Guichet Notsè (Siège)", lat: 6.9535, lng: 1.1661, address: "Notsè, Haho", phone: "(+228) 70 44 70 12" },
  { id: 2, name: "Guichet Asrama", lat: 6.8167, lng: 1.4833, address: "Asrama, Haho", phone: "(+228) 70 44 70 12" },
  { id: 3, name: "Guichet Tado", lat: 7.0333, lng: 1.5833, address: "Tado, Moyen-Mono", phone: "(+228) 70 44 70 12" },
  { id: 4, name: "Guichet Carrefour (Nangbeto)", lat: 7.4261, lng: 1.4287, address: "Nangbeto", phone: "(+228) 70 44 70 12" },
  
  // Agence Atakpamé
  { id: 5, name: "Guichet Atakpamé", lat: 7.5284, lng: 1.1278, address: "Atakpamé, Ogou", phone: "(+228) XX XX XX XX" },
  { id: 6, name: "Guichet Wahala", lat: 7.2167, lng: 1.1667, address: "Wahala, Haho", phone: "(+228) XX XX XX XX" },
  { id: 7, name: "Guichet Agbélouvé", lat: 6.5833, lng: 1.2500, address: "Agbélouvé, Zio", phone: "(+228) XX XX XX XX" },
  
  // Agence Kpékplémé
  { id: 8, name: "Guichet Kpékplémé", lat: 7.6833, lng: 1.3333, address: "Kpékplémé, Anié", phone: "(+228) XX XX XX XX" },
  { id: 9, name: "Guichet Hahomégbé", lat: 7.3333, lng: 1.0500, address: "Hahomégbé", phone: "(+228) XX XX XX XX" },
  { id: 10, name: "Guichet Akparè", lat: 7.4167, lng: 1.2333, address: "Akparè, Ogou", phone: "(+228) XX XX XX XX" },
  { id: 11, name: "Guichet Gléi", lat: 7.3833, lng: 1.2000, address: "Gléi, Ogou", phone: "(+228) XX XX XX XX" },
  { id: 12, name: "Guichet Tohoun", lat: 7.0167, lng: 1.6333, address: "Tohoun, Moyen-Mono", phone: "(+228) XX XX XX XX" },
  { id: 13, name: "Guichet Moréta (En construction)", lat: 7.6333, lng: 1.4000, address: "Moréta", phone: "(+228) XX XX XX XX" },
];

export default function MapInner() {
  const t = useTranslations("Network");

  return (
    <MapContainer 
      center={[7.8, 1.0]} 
      zoom={7} 
      scrollWheelZoom={false} 
      className="w-full h-full rounded-2xl shadow-lg z-0"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      
      {branches.map((branch) => (
        <Marker key={branch.id} position={[branch.lat, branch.lng]} icon={customIcon}>
          <Popup className="custom-popup">
            <div className="p-1">
              <h3 className="font-bold text-spec-blue mb-1 text-base">{branch.name}</h3>
              <p className="text-sm text-gray-600 mb-1 flex items-start gap-1">
                📍 {branch.address}
              </p>
              <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                📞 {branch.phone}
              </p>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-spec-blue text-white py-1.5 px-3 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {/* Fallback to simple string if translation not ready */}
                {t.has("directions") ? t("directions") : "Itinéraire"}
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
