// src/data/riders.js
import rider1 from "../assets/rider.png";
import rider2 from "../assets/rider-2.png";
import rider3 from "../assets/rider-3.png";
import rider4 from "../assets/rider-4.png";
import rider5 from "../assets/rider-5.png";
import rider6 from "../assets/rider-6.png";
import rider7 from "../assets/rider-7.png";
import rider8 from "../assets/rider-8.png";
import rider9 from "../assets/rider-9.png";
import rider10 from "../assets/rider-10.png";
import rider11 from "../assets/rider-11.png";
import rider12 from "../assets/rider-12.png";
import rider13 from "../assets/rider-13.png";
import rider14 from "../assets/rider-14.png";

const riderImages = [
  rider1, rider2, rider3, rider4, rider5, rider6, rider7,
  rider8, rider9, rider10, rider11, rider12, rider13, rider14,
];

const ridersBase = [
  { RiderName: "Adebayo Samuel", RiderId: "RH-1001" },
  { RiderName: "Oladimeji Tunde", RiderId: "RH-1002" },
  { RiderName: "Ibrahim Musa", RiderId: "RH-1003" },
  { RiderName: "Chukwuma Collins", RiderId: "RH-1004" },
  { RiderName: "Okeke Emmanuel", RiderId: "RH-1005" },
  { RiderName: "Adewale Sunday", RiderId: "RH-1006" },
  { RiderName: "Balogun Kareem", RiderId: "RH-1007" },
  { RiderName: "Eze Michael", RiderId: "RH-1008" },
  { RiderName: "Yusuf Ahmad", RiderId: "RH-1009" },
  { RiderName: "Alade Joseph", RiderId: "RH-1010" },
  { RiderName: "Ajayi Timilehin", RiderId: "RH-1011" },
  { RiderName: "Okon Patrick", RiderId: "RH-1012" },
  { RiderName: "Uchenna Victor", RiderId: "RH-1013" },
  { RiderName: "Bello Sulaiman", RiderId: "RH-1014" },
];

export const riders = ridersBase.map((r, i) => ({
  ...r,
  RiderImg: riderImages[i],
  RiderLocation: "Warri",
  rating: 4.5,
}));
