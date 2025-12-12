// src/data/riders.js

// Cloudinary Rider URLs
const riderImages = [
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446870/rider_may6r0.png",
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446866/rider-2_qcmj8r.jpg",
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446867/rider-3_rxb7pm.jpg",
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446867/rider-6_ajia7k.jpg",
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446868/rider-5_tzp3ez.jpg",
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446868/rider-7_qz3qhb.jpg",
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446868/rider-8_lxvwp0.jpg",
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446868/rider-9_odm9du.jpg",
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446868/rider-10_e08fcp.jpg",
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446868/rider-11_skglqh.jpg",
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446869/rider-12_hgofgg.jpg",
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446869/rider-13_pyzb3f.jpg",
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446869/rider-14_dqgjoq.jpg",
  // Rider 15
  "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765467981/rider-15_mjakmp.png",
];

// Rider base info (you can swap in real names anytime)
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
  { RiderName: "Rider Fifteen", RiderId: "RH-1015" },
];

export const riders = ridersBase.map((r, i) => ({
  ...r,
  RiderImg: riderImages[i],
  RiderLocation: "Warri",
  rating: 4.5,
}));
