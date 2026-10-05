// Current promotions shown on the Deals & Offers page.
//
// NOTE: demo data. The discounts, promo code and validity date are examples so the page can be
// built and reviewed — replace them with your real campaigns (or feed this from the API) before
// going live. The texts live in the locale files (offers.items.<id>); the figures quoted in them
// come from the catalogue below, so they stay accurate.
import { cars } from "./cars";
import { chauffeurCars } from "./chauffeur";

export const VALID_UNTIL = "31 Dec 2026";

export const offerFigures = {
  day: Math.min(...cars.map((c) => c.pricePerDay)),
  month: Math.min(...cars.map((c) => c.pricePerMonth)),
  transfer: Math.min(
    ...chauffeurCars.map((c) => c.chauffeur.rates.find((r) => r.key === "airport").price)
  ),
};

// id, link target and optional promo code; badge/figure keys are resolved against offerFigures
export const offers = [
  { id: 1, to: "/ViewAll" },
  { id: 2, to: "/MothlyCarRental", figure: "month" },
  { id: 3, to: "/ViewAll", code: "ZENITH10" },
  { id: 4, to: "/RentLuxuryCar" },
  { id: 5, to: "/CarRentalCompany" },
  { id: 6, to: "/rentCarWithDriver", figure: "transfer" },
  { id: 7, to: "/yachts" },
];
