// Yacht charter catalogue.
//
// IMPORTANT: like data/cars.js and data/companies.js this is demo data. The vessel names,
// operators, specs, prices and contact details are invented so the pages can be built and
// reviewed — the photos only illustrate each class of yacht. Replace everything with your
// real charter partners (or feed it from the API) before going live.
// Prices are AED per hour, typical for Dubai charters (fuel, captain and crew included).
import imgSportFisher from "../images/yachts/dubai-marina-yachts.jpg";
import imgGulfCruiser from "../images/yachts/helios.jpg";
import imgMarinaSuper from "../images/yachts/mine-games.jpg";
import imgGrandExplorer from "../images/yachts/nautilus.jpg";
import imgOceanSport from "../images/yachts/ocean-pearl.jpg";
import imgVoyager from "../images/yachts/sequel-p.jpg";
import imgMarinaView from "../images/yachts/dubai-marina-view.jpg";

const contact = (n) => ({
  whatsapp: 971501234600 + n,
  email: "charters@zenith.example",
  call: 97143211100 + n,
});

const INCLUDED = [
  "Licensed captain and crew",
  "Fuel for the booked hours",
  "Soft drinks, water and ice",
  "Life jackets and safety equipment",
  "Music system and sunbathing area",
  "Towels and on-board restroom",
];

const yacht = ({ id, hourly, minHours = 2, img, extraImages = [], ...rest }) => ({
  id,
  img,
  images: [img, ...extraImages],
  minHours,
  rates: [
    { key: "hourly", label: "Per hour", detail: `${minHours} hrs minimum`, price: hourly },
    { key: "fourHours", label: "4 hours", detail: "Save 5%", price: Math.round((hourly * 4 * 0.95) / 50) * 50 },
    { key: "fullDay", label: "Full day", detail: "8 hours, save 15%", price: Math.round((hourly * 8 * 0.85) / 50) * 50 },
  ],
  included: INCLUDED,
  ...contact(id),
  ...rest,
});

export const yachts = [
  yacht({
    id: 1, slug: "marina-sport-fisher-42", title: "Marina Sport Fisher 42 ft", img: imgSportFisher,
    extraImages: [imgMarinaView],
    lengthFt: 42, capacity: 10, cabins: 1, crew: 2, hourly: 450, departure: "Dubai Marina",
    operator: "Marina Blue Charters", bestFor: "Fishing trips and small groups",
    description:
      "A fast, stable sport-fishing boat that works just as well for a family sunset cruise. It is small enough to " +
      "dock in the Marina's tighter berths and fast enough to reach the fishing grounds past the Palm in under half an hour.",
    highlights:
      "Rod holders, a bait station and tackle are on board, and the open cockpit gives everyone a place to stand. " +
      "The crew will take you past Ain Dubai, the Marina skyline and Palm Jumeirah at a relaxed cruising pace.",
    features: ["Fishing rods and tackle", "Air-conditioned salon", "Bluetooth sound system", "Sun deck with seating", "Swim ladder"],
  }),
  yacht({
    id: 2, slug: "gulf-cruiser-90", title: "Gulf Cruiser 90 ft", img: imgGulfCruiser,
    lengthFt: 90, capacity: 25, cabins: 3, crew: 4, hourly: 1800, departure: "Dubai Harbour",
    operator: "Harbour Gate Yachts", bestFor: "Corporate outings and birthdays",
    description:
      "A three-deck motor yacht with a large air-conditioned lounge, a shaded upper deck and a flybridge for the best " +
      "view of the skyline. It carries up to 25 guests comfortably and is the usual choice for birthdays and team days out.",
    highlights:
      "Three cabins allow guests to rest or change during longer charters, and the aft deck has space for a buffet. " +
      "Charters leave from Dubai Harbour and normally include a loop past Palm Jumeirah and the Atlantis resort.",
    features: ["Air-conditioned lounge", "Three cabins", "Flybridge with seating", "Swim platform", "Full galley kitchen", "Karaoke system"],
  }),
  yacht({
    id: 3, slug: "marina-superyacht-120", title: "Marina Superyacht 120 ft", img: imgMarinaSuper,
    lengthFt: 120, capacity: 40, cabins: 5, crew: 6, hourly: 3500, minHours: 3, departure: "Dubai Marina",
    operator: "Gold Coast Marine", bestFor: "Weddings and large events",
    description:
      "A 120-foot superyacht with a full-width main saloon, a sun deck with a Jacuzzi and five cabins. At up to 40 " +
      "guests it is built for weddings, proposals and company events that need a venue rather than just a boat.",
    highlights:
      "Dedicated stewards serve from the on-board galley, and the aft deck can be set for a seated dinner. Decoration, " +
      "live music and a photographer can all be arranged through the operator ahead of the charter.",
    features: ["Jacuzzi on the sun deck", "Five cabins with en-suite bathrooms", "Dedicated stewards", "Dining area for 24", "Indoor and outdoor bar", "Water toys"],
  }),
  yacht({
    id: 4, slug: "grand-explorer-150", title: "Grand Explorer 150 ft", img: imgGrandExplorer,
    lengthFt: 150, capacity: 50, cabins: 7, crew: 9, hourly: 5000, minHours: 4, departure: "Port Rashid",
    operator: "Gulf Horizon Yachting", bestFor: "Private parties and VIP charters",
    description:
      "The largest vessel in the fleet. Seven cabins, a cinema room and a full-beam owner's suite make it as much a " +
      "floating villa as a yacht, with room for 50 guests on day charters and overnight stays on request.",
    highlights:
      "A professional crew of nine looks after the cabin, deck and kitchen. Overnight charters to Sir Bani Yas and the " +
      "Abu Dhabi coast can be quoted separately, and the yacht can be configured for a seated gala dinner.",
    features: ["Cinema room", "Owner's suite", "Seven cabins", "Helideck-ready foredeck", "Jet skis and paddle boards", "Chef on board"],
  }),
  yacht({
    id: 5, slug: "ocean-sport-80", title: "Ocean Sport 80 ft", img: imgOceanSport,
    lengthFt: 80, capacity: 20, cabins: 3, crew: 3, hourly: 1500, departure: "Jumeirah Beach",
    operator: "Blue Horizon Yachts", bestFor: "Couples, photo shoots and sunset cruises",
    description:
      "A sleek, low-profile sport yacht with panoramic glazing and a spacious sun pad. It looks as good as it " +
      "performs, which is why it is popular for photo shoots, engagements and sunset trips along Jumeirah Beach.",
    highlights:
      "Three cabins and a wide beach platform make it practical for a full day, and the speed means you can see the " +
      "Burj Al Arab, Palm Jumeirah and the Marina in a single charter.",
    features: ["Panoramic glass windows", "Beach platform with swim steps", "Three cabins", "Premium sound system", "Large sun pad", "Wi-Fi on board"],
  }),
  yacht({
    id: 6, slug: "sequel-voyager-110", title: "Sequel Voyager 110 ft", img: imgVoyager,
    lengthFt: 110, capacity: 30, cabins: 4, crew: 5, hourly: 2600, minHours: 3, departure: "Dubai Harbour",
    operator: "Harbour Gate Yachts", bestFor: "Family celebrations and long day charters",
    description:
      "A classic long-range motor yacht with four cabins, a formal dining saloon and wide teak decks. It rides very " +
      "steadily, so it suits long day charters and guests who prefer comfort over speed.",
    highlights:
      "The upper saloon seats the whole party for lunch while the foredeck stays open for sunbathing. A chef is " +
      "available for BBQ or three-course menus, and the crew will brief guests on safety before departure.",
    features: ["Formal dining saloon", "Four cabins", "Teak sun deck", "Chef and catering option", "Tender boat", "Snorkelling gear"],
  }),
];

export const getYachtById = (id) => yachts.find((y) => String(y.id) === String(id));
