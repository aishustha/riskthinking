"use client";
import { useState, useEffect } from "react";
import { AssetData } from "./types";
import L from "leaflet";
import parse from "csv-parser";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [map, setMap] = useState<L.Map | null>(null);
  const [assets, setAssets] = useState<AssetData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("../../../public/data.csv");
      const text = await res.text();
      const data: AssetData[] = [];
      parse(text, { headers: true })
        .on("data", (row: AssetData) => {
          data.push(row as AssetData);
        })
        .on("end", () => {
          setAssets(data);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!map) return;

    // Add tile layer to the map
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Add markers to the map
    assets.forEach((asset) => {
      const marker = L.circleMarker([asset.lat, asset.long], {
        color: getColor(asset["Risk Rating"]),
        radius: 5,
      })
        .bindTooltip(
          `Asset Name: ${asset["Asset Name"]}<br>Business Category: ${asset["Business Category"]}`
        )
        .addTo(map);
    });
  }, [map, assets]);

  const getColor = (riskRating: string) => {
    // return color based on risk rating
  };

  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      ref={(el) => {
        if (el && !map) {
          const mapInstance = L.map(el).setView([51.505, -0.09], 13);
          setMap(mapInstance);
        }
      }}
    />
  );
};

export default Map;
