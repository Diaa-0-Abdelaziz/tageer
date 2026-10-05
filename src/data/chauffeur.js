// Chauffeur-driven (rent a car with driver) catalogue.
// Every offer is built on a car from the main catalogue, so photos, specs, supplier and
// contact details stay in one place (data/cars.js). Prices are AED and are derived from the
// car's daily rate plus the driver, so a bigger car always costs more than a smaller one.
//
// NOTE: like the rest of the demo data, contact details are placeholders and the
// languages / included-items below are typical for Dubai chauffeur services — replace them
// with the supplier's real terms (or feed this from the API) before going live.
import { cars } from "./cars";

const round = (n, step) => Math.round(n / step) * step;

const LANGUAGES = [
  ["English", "Arabic"],
  ["English", "Arabic", "Hindi"],
  ["English", "Urdu", "Hindi"],
  ["English", "Arabic", "Russian"],
  ["English", "Tagalog"],
];

const AIRPORT_TRANSFER = { economy: 150, luxury: 380 };

const toChauffeur = (car, index) => {
  const luxury = car.category === "luxury";
  const hourly = Math.max(90, round(car.pricePerDay * 0.22 + 70, 10));
  const halfDay = round(car.pricePerDay * 0.5 + 280, 50);
  const fullDay = round(car.pricePerDay * 0.85 + 480, 50);
  const airport = AIRPORT_TRANSFER[car.category] + (car.seats > 5 ? 60 : 0);
  return {
    ...car,
    chauffeur: {
      minHours: luxury ? 3 : 2,
      languages: LANGUAGES[index % LANGUAGES.length],
      rates: [
        { key: "hourly", label: "Per hour", detail: `${luxury ? 3 : 2} hrs minimum`, price: hourly },
        { key: "halfDay", label: "Half day", detail: "5 hours", price: halfDay },
        { key: "fullDay", label: "Full day", detail: "10 hours", price: fullDay },
        { key: "airport", label: "Airport transfer", detail: "One way within Dubai", price: airport },
      ],
      included: [
        "Professional, licensed chauffeur",
        "Fuel and Salik tolls",
        "Comprehensive insurance",
        "Complimentary bottled water",
        luxury ? "Wi-Fi on board" : "Child seat on request",
        "Free waiting time at airport pickups (up to 60 minutes)",
      ],
      extraHourPrice: hourly,
      overtimeNote: "Hours beyond the booked package are charged at the hourly rate.",
    },
  };
};

// sports cars are two-seaters meant to be driven by the renter, so they are not offered with a driver
export const chauffeurCars = cars.filter((c) => c.category !== "sport").map(toChauffeur);
export const getChauffeurCarById = (id) =>
  chauffeurCars.find((c) => String(c.id) === String(id));
