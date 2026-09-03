// Rental partner companies shown on the home page and the Car Rental Companies page.
//
// IMPORTANT: these are placeholder partners, not real businesses. The names, branches,
// fleet sizes and contact details are invented so the page can be built and reviewed —
// swap them for your real partner data (or feed this from the API) before going live.
// Do not publish invented figures under the name of a real rental company.
import logoMarina from "../images/companies/marina-auto-rental.png";
import logoDeira from "../images/companies/deira-drive.png";
import logoDesert from "../images/companies/desert-road.png";
import logoSkyline from "../images/companies/skyline-car-rental.png";
import logoPalm from "../images/companies/palm-coast-rentals.png";
import logoBarsha from "../images/companies/barsha-motors.png";
import logoCreek from "../images/companies/creekside-car-hire.png";

export const companies = [
  {
    id: 1,
    slug: "marina-auto-rental",
    name: "Marina Auto Rental",
    logo: logoMarina,
    classes: ["Luxury cars", "Sports cars", "Convertibles"],
    area: "Dubai Marina & JBR",
    branches: 3,
    fleetSize: 120,
    since: 2014,
    delivery: "Free delivery in Dubai",
    hours: "Open 8am – 11pm daily",
    phone: 97143211001,
  },
  {
    id: 2,
    slug: "deira-drive",
    name: "Deira Drive Rent A Car",
    logo: logoDeira,
    classes: ["Economy cars", "Mid-size sedans", "Monthly rentals"],
    area: "Deira & Bur Dubai",
    branches: 2,
    fleetSize: 210,
    since: 2011,
    delivery: "Free delivery in Dubai",
    hours: "Open 24 hours",
    phone: 97143211002,
  },
  {
    id: 3,
    slug: "desert-road",
    name: "Desert Road Rent A Car",
    logo: logoDesert,
    classes: ["4x4 & SUVs", "Full-size SUVs", "Economy cars"],
    area: "Al Quoz & Hatta road",
    branches: 2,
    fleetSize: 95,
    since: 2016,
    delivery: "Free delivery in Dubai and Sharjah",
    hours: "Open 7am – 10pm daily",
    phone: 97143211003,
  },
  {
    id: 4,
    slug: "skyline-car-rental",
    name: "Skyline Car Rental",
    logo: logoSkyline,
    classes: ["Luxury SUVs", "Luxury sedans", "Chauffeur service"],
    area: "Downtown Dubai & DIFC",
    branches: 4,
    fleetSize: 160,
    since: 2009,
    delivery: "Free delivery across the UAE",
    hours: "Open 24 hours",
    phone: 97143211004,
  },
  {
    id: 5,
    slug: "palm-coast-rentals",
    name: "Palm Coast Rentals",
    logo: logoPalm,
    classes: ["Convertibles", "Sports cars", "Electric cars"],
    area: "Palm Jumeirah & Al Sufouh",
    branches: 2,
    fleetSize: 70,
    since: 2018,
    delivery: "Free hotel delivery",
    hours: "Open 9am – 9pm daily",
    phone: 97143211005,
  },
  {
    id: 6,
    slug: "barsha-motors",
    name: "Barsha Motors Rental",
    logo: logoBarsha,
    classes: ["Economy cars", "7-seaters", "Long-term leasing"],
    area: "Al Barsha & Mall of the Emirates",
    branches: 3,
    fleetSize: 240,
    since: 2013,
    delivery: "Free delivery in Dubai",
    hours: "Open 8am – 10pm daily",
    phone: 97143211006,
  },
  {
    id: 7,
    slug: "creekside-car-hire",
    name: "Creekside Car Hire",
    logo: logoCreek,
    classes: ["Economy cars", "Mid-size sedans", "Airport pickup"],
    area: "Dubai Creek & DXB Terminal 3",
    branches: 2,
    fleetSize: 130,
    since: 2015,
    delivery: "Free airport delivery",
    hours: "Open 24 hours",
    phone: 97143211007,
  },
];

export const getCompanyById = (id) =>
  companies.find((c) => String(c.id) === String(id));
