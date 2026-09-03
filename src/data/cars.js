// Single source of truth for the demo car catalogue.
// Every car has a unique id — the home carousels link to /CarList/:id and the
// details page looks the car up here, so each listing shows its own photos and specs.
//
// NOTE: whatsapp / call / email are placeholders in a valid UAE format. Replace them
// with the real supplier contact details (or feed the whole catalogue from the API)
// before going live. Rates are AED and reflect typical Dubai market pricing.
import { companies } from "./companies";
import imgRangeRoverSport from "../images/fleet/range-rover-sport.jpg";
import imgGClass from "../images/fleet/mercedes-g-class.jpg";
import imgX5 from "../images/fleet/bmw-x5.jpg";
import imgCayenne from "../images/fleet/porsche-cayenne.jpg";
import imgQ8 from "../images/fleet/audi-q8.jpg";
import imgLx600 from "../images/fleet/lexus-lx-600.jpg";
import imgPatrol from "../images/fleet/nissan-patrol.jpg";
import imgSunny from "../images/fleet/nissan-sunny.jpg";
import imgYaris from "../images/fleet/toyota-yaris.jpg";
import imgAccent from "../images/fleet/hyundai-accent.jpg";
import imgPegas from "../images/fleet/kia-pegas.jpg";
import imgAttrage from "../images/fleet/mitsubishi-attrage.jpg";
import imgCorolla from "../images/fleet/toyota-corolla.jpg";
import imgMalibu from "../images/fleet/chevrolet-malibu.jpg";

// Extra gallery shots per car. A car with no extras simply shows its card photo.
import gBmwX52 from "../images/fleet/gallery/bmw-x5-2.jpg";
import gChevroletMalibu2 from "../images/fleet/gallery/chevrolet-malibu-2.jpg";
import gHyundaiAccent2 from "../images/fleet/gallery/hyundai-accent-2.jpg";
import gKiaPegas2 from "../images/fleet/gallery/kia-pegas-2.jpg";
import gKiaPegas3 from "../images/fleet/gallery/kia-pegas-3.jpg";
import gLexusLx6002 from "../images/fleet/gallery/lexus-lx-600-2.jpg";
import gMercedesGClass2 from "../images/fleet/gallery/mercedes-g-class-2.jpg";
import gMercedesGClass3 from "../images/fleet/gallery/mercedes-g-class-3.jpg";
import gNissanPatrol2 from "../images/fleet/gallery/nissan-patrol-2.jpg";
import gNissanPatrol3 from "../images/fleet/gallery/nissan-patrol-3.jpg";
import gNissanSunny2 from "../images/fleet/gallery/nissan-sunny-2.jpg";
import gNissanSunny3 from "../images/fleet/gallery/nissan-sunny-3.jpg";
import gPorscheCayenne2 from "../images/fleet/gallery/porsche-cayenne-2.jpg";
import gRangeRoverSport2 from "../images/fleet/gallery/range-rover-sport-2.jpg";
import gRangeRoverSport3 from "../images/fleet/gallery/range-rover-sport-3.jpg";
import gToyotaCorolla2 from "../images/fleet/gallery/toyota-corolla-2.jpg";
import gToyotaCorolla3 from "../images/fleet/gallery/toyota-corolla-3.jpg";
import gToyotaYaris2 from "../images/fleet/gallery/toyota-yaris-2.jpg";
import gToyotaYaris3 from "../images/fleet/gallery/toyota-yaris-3.jpg";

const extraShots = {
  "bmw-x5": [gBmwX52],
  "chevrolet-malibu": [gChevroletMalibu2],
  "hyundai-accent": [gHyundaiAccent2],
  "kia-pegas": [gKiaPegas2, gKiaPegas3],
  "lexus-lx-600": [gLexusLx6002],
  "mercedes-g-class": [gMercedesGClass2, gMercedesGClass3],
  "nissan-patrol": [gNissanPatrol2, gNissanPatrol3],
  "nissan-sunny": [gNissanSunny2, gNissanSunny3],
  "porsche-cayenne": [gPorscheCayenne2],
  "range-rover-sport": [gRangeRoverSport2, gRangeRoverSport3],
  "toyota-corolla": [gToyotaCorolla2, gToyotaCorolla3],
  "toyota-yaris": [gToyotaYaris2, gToyotaYaris3],
};
const gallery = (slug) => extraShots[slug] || [];

// Hourly rates are derived from the daily rate so they stay consistent.
const hourly = (perDay) => [
  { hours: 2, price: Math.round((perDay * 0.35) / 5) * 5 },
  { hours: 5, price: Math.round((perDay * 0.55) / 5) * 5 },
  { hours: 8, price: Math.round((perDay * 0.75) / 5) * 5 },
];

const contact = (n) => ({
  whatsapp: 971501234500 + n,
  email: "booking@tajeer.ae",
  call: 97143211000 + n,
});

const supplierLogo = (name) =>
  (companies.find((c) => c.name === name) || {}).logo;

const car = ({ id, slug, img, pricePerDay, supplier, ...rest }) => ({
  id,
  slug,
  img,
  images: [img, ...gallery(slug)],
  pricePerDay,
  hourly: hourly(pricePerDay),
  supplier,
  supplierLogo: supplierLogo(supplier),
  ...contact(id),
  ...rest,
});

export const cars = [
  car({
    id: 1,
    slug: "range-rover-sport",
    title: "Range Rover Sport",
    img: imgRangeRoverSport,
    category: "luxury",
    brand: "Land Rover",
    model: "Range Rover Sport HSE",
    year: 2024,
    color: "Varesine Blue",
    bodyType: "Luxury SUV",
    doors: 5,
    seats: 5,
    engine: "3.0L turbocharged inline-6",
    power: "395 hp",
    transmission: "8-speed automatic, all-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 250,
    supplier: "Skyline Car Rental",
    pricePerDay: 1200, pricePerWeek: 7500, pricePerMonth: 22000, deposit: 5000, minDays: 2,
    description:
      "The Range Rover Sport is the car most people picture when they think of a luxury SUV in Dubai. " +
      "It rides high enough to make speed bumps and sand drifts irrelevant, but the air suspension keeps it " +
      "quiet and flat on the Sheikh Zayed Road. Inside there is a 13-inch curved display, massaging front " +
      "seats and enough boot space for four large cases.",
    highlights:
      "The mild-hybrid inline-six pulls hard from low revs without the fuel bill of a V8, and the adaptive " +
      "air suspension drops the car at motorway speed and raises it again for kerbs and desert tracks. " +
      "Adaptive cruise, a 360-degree camera and wireless Apple CarPlay are standard on this trim.",
    features: [
      "Adaptive air suspension with terrain response",
      "13.1-inch Pivi Pro touchscreen, wireless CarPlay and Android Auto",
      "Heated, cooled and massaging front seats",
      "360-degree camera with park assist",
      "Adaptive cruise control with steering assist",
      "Panoramic sunroof",
    ],
  }),
  car({
    id: 2,
    slug: "mercedes-g-class",
    title: "Mercedes-Benz G-Class",
    img: imgGClass,
    category: "luxury",
    brand: "Mercedes-Benz",
    model: "G 500",
    year: 2023,
    color: "Obsidian Black",
    bodyType: "Luxury SUV",
    doors: 5,
    seats: 5,
    engine: "4.0L twin-turbo V8",
    power: "416 hp",
    transmission: "9-speed automatic, permanent all-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 200,
    supplier: "Marina Auto Rental",
    pricePerDay: 1800, pricePerWeek: 11000, pricePerMonth: 32000, deposit: 5000, minDays: 2,
    description:
      "Nothing else on the road looks like a G-Class. The boxy shell and exposed door hinges are unchanged " +
      "since 1979, but underneath it is a modern luxury car with a twin-turbo V8, a leather-lined cabin and " +
      "twin widescreen displays. It is the most requested car in the UAE for weddings and photo shoots.",
    highlights:
      "Three locking differentials and a proper low-range transfer case mean the G 500 will genuinely climb a " +
      "dune, and the V8 makes a noise worth the rental on its own. Be aware that it is wide and tall, so " +
      "underground parking in older buildings can be tight.",
    features: [
      "Three locking differentials and low-range transfer case",
      "Twin 12.3-inch displays with MBUX",
      "Burmester surround sound system",
      "Nappa leather interior with heated and ventilated seats",
      "360-degree camera",
      "Adaptive damping",
    ],
  }),
  car({
    id: 3,
    slug: "bmw-x5",
    title: "BMW X5",
    img: imgX5,
    category: "luxury",
    brand: "BMW",
    model: "X5 xDrive40i",
    year: 2023,
    color: "Black Sapphire",
    bodyType: "Luxury SUV",
    doors: 5,
    seats: 5,
    engine: "3.0L turbocharged inline-6",
    power: "335 hp",
    transmission: "8-speed automatic, xDrive all-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 250,
    supplier: "Skyline Car Rental",
    pricePerDay: 750, pricePerWeek: 4500, pricePerMonth: 13500, deposit: 3000, minDays: 1,
    description:
      "The X5 is the sensible pick in this list. It costs meaningfully less than a Range Rover or a G-Class, " +
      "drives better than either on the highway, and is still large enough for a family of five plus luggage. " +
      "If you are doing the Dubai to Abu Dhabi run regularly, this is the one to book.",
    highlights:
      "The straight-six is smooth and quick, and the standard adaptive suspension makes long motorway stints " +
      "genuinely relaxing. The curved display runs BMW's latest software with wireless CarPlay, and the boot " +
      "opens in two halves, which is useful in tight parking.",
    features: [
      "Adaptive M suspension",
      "Curved display with BMW Live Cockpit and wireless CarPlay",
      "Panoramic glass roof",
      "Heated and ventilated front seats",
      "Parking assistant with reversing assistant",
      "Harman Kardon surround sound",
    ],
  }),
  car({
    id: 4,
    slug: "porsche-cayenne",
    title: "Porsche Cayenne S",
    img: imgCayenne,
    category: "luxury",
    brand: "Porsche",
    model: "Cayenne S",
    year: 2023,
    color: "Carrara White",
    bodyType: "Luxury SUV",
    doors: 5,
    seats: 5,
    engine: "2.9L twin-turbo V6",
    power: "434 hp",
    transmission: "8-speed Tiptronic S, all-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 200,
    supplier: "Marina Auto Rental",
    pricePerDay: 1100, pricePerWeek: 6800, pricePerMonth: 20000, deposit: 5000, minDays: 2,
    description:
      "The Cayenne is the SUV for people who would rather be driving a sports car. It corners flatter than " +
      "anything else this size, the steering actually tells you something, and the twin-turbo V6 will keep up " +
      "with most sports sedans. The trade-off is a firmer ride than a Range Rover on broken surfaces.",
    highlights:
      "Porsche Active Suspension Management and the optional air suspension let you soften it right off for " +
      "the motorway or drop it into Sport for a run down Jebel Jais. The cabin is smaller than the numbers " +
      "suggest, so if you regularly carry five adults, look at the X5 instead.",
    features: [
      "Porsche Active Suspension Management (PASM)",
      "Sport Chrono package with launch control",
      "12.3-inch Porsche Communication Management",
      "Adaptive sports seats, 14-way electric",
      "LED matrix headlights",
      "Bose surround sound system",
    ],
  }),
  car({
    id: 5,
    slug: "audi-q8",
    title: "Audi Q8",
    img: imgQ8,
    category: "luxury",
    brand: "Audi",
    model: "Q8 55 TFSI quattro",
    year: 2022,
    color: "Waitomo Blue",
    bodyType: "Luxury SUV",
    doors: 5,
    seats: 5,
    engine: "3.0L turbocharged V6",
    power: "335 hp",
    transmission: "8-speed tiptronic, quattro all-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 250,
    supplier: "Skyline Car Rental",
    pricePerDay: 900, pricePerWeek: 5500, pricePerMonth: 16000, deposit: 4000, minDays: 1,
    description:
      "The Q8 is the coupe-roofed version of Audi's largest SUV, and it is the best-looking car Audi currently " +
      "sells. The cabin is the quietest in this price bracket, with two haptic touchscreens and the Virtual " +
      "Cockpit behind the wheel. Rear headroom is the price you pay for the roofline.",
    highlights:
      "Standard quattro all-wheel drive and adaptive air suspension make it effortless over long distances, " +
      "and the mild-hybrid system lets it coast with the engine off, which keeps fuel use reasonable for a car " +
      "this size. Matrix LED headlights are excellent on unlit desert roads.",
    features: [
      "quattro permanent all-wheel drive",
      "Adaptive air suspension",
      "Audi Virtual Cockpit plus dual touchscreens",
      "HD Matrix LED headlights",
      "Bang & Olufsen 3D sound system",
      "Four-zone climate control",
    ],
  }),
  car({
    id: 6,
    slug: "lexus-lx-600",
    title: "Lexus LX 600",
    img: imgLx600,
    category: "luxury",
    brand: "Lexus",
    model: "LX 600",
    year: 2023,
    color: "Sonic Titanium",
    bodyType: "Luxury SUV",
    doors: 5,
    seats: 7,
    engine: "3.5L twin-turbo V6",
    power: "409 hp",
    transmission: "10-speed automatic, full-time four-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 250,
    supplier: "Desert Road Rent A Car",
    pricePerDay: 1300, pricePerWeek: 8000, pricePerMonth: 23000, deposit: 5000, minDays: 2,
    description:
      "The LX 600 is a Land Cruiser underneath, which is exactly why people book it. It is built to cross the " +
      "Empty Quarter and finished like a luxury saloon, with seven seats, a 12.3-inch upper screen and a second " +
      "screen below it for the climate and off-road controls.",
    highlights:
      "Full-time four-wheel drive, a locking centre differential and Multi-Terrain Select make it the most " +
      "capable car in this list away from tarmac, and Toyota reliability means it is the one least likely to " +
      "give you trouble on a long trip. Seven seats come as standard.",
    features: [
      "Seven seats with power-folding third row",
      "Multi-Terrain Select and Crawl Control",
      "Dual 12.3-inch and 7-inch displays",
      "Mark Levinson 25-speaker audio",
      "Adaptive variable suspension with height control",
      "Heated and ventilated first and second row seats",
    ],
  }),
  car({
    id: 7,
    slug: "nissan-patrol",
    title: "Nissan Patrol",
    img: imgPatrol,
    category: "luxury",
    brand: "Nissan",
    model: "Patrol LE Platinum",
    year: 2022,
    color: "Arctic White",
    bodyType: "Full-size SUV",
    doors: 5,
    seats: 7,
    engine: "5.6L V8",
    power: "400 hp",
    transmission: "7-speed automatic, four-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 250,
    supplier: "Desert Road Rent A Car",
    pricePerDay: 700, pricePerWeek: 4200, pricePerMonth: 12000, deposit: 2000, minDays: 1,
    description:
      "The Patrol is the default large SUV of the Gulf, and the best value on this list. You get a 5.6-litre V8, " +
      "seven seats and genuine dune-driving hardware for roughly half the daily rate of a Range Rover. It is the " +
      "car to book if the plan involves leaving the tarmac.",
    highlights:
      "Hydraulic Body Motion Control keeps it surprisingly flat for something this tall, and the V8 has enough " +
      "torque to pull it through soft sand at low tyre pressures. Fuel consumption is the obvious downside — " +
      "budget for it if you are covering long distances.",
    features: [
      "Seven seats with folding second and third rows",
      "Hydraulic Body Motion Control",
      "Four-wheel drive with low range",
      "Around View Monitor with moving object detection",
      "Rear seat entertainment screens",
      "Cooled front seats",
    ],
  }),
  car({
    id: 8,
    slug: "nissan-sunny",
    title: "Nissan Sunny",
    img: imgSunny,
    category: "economy",
    brand: "Nissan",
    model: "Sunny SV",
    year: 2022,
    color: "Gun Metallic",
    bodyType: "Economy sedan",
    doors: 4,
    seats: 5,
    engine: "1.6L 4-cylinder",
    power: "118 hp",
    transmission: "CVT automatic, front-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 250,
    supplier: "Deira Drive Rent A Car",
    pricePerDay: 80, pricePerWeek: 450, pricePerMonth: 1200, deposit: 1000, minDays: 1,
    description:
      "The Sunny is the cheapest way to have a car in Dubai. It is not exciting, but it is roomy in the back for " +
      "a small sedan, the air conditioning copes with August, and at 1,200 AED a month it costs less than most " +
      "people spend on ride-hailing.",
    highlights:
      "The 1.6-litre engine and CVT are tuned entirely for economy, which is the point — expect around 6.5 " +
      "litres per 100 km in mixed driving. Boot space is generous for the class, and it is small enough to park " +
      "anywhere in Deira or Bur Dubai.",
    features: [
      "Automatic transmission",
      "Rear parking camera",
      "Bluetooth audio with USB",
      "Cruise control",
      "Dual front airbags with ABS",
      "Salik tag fitted",
    ],
  }),
  car({
    id: 9,
    slug: "toyota-yaris",
    title: "Toyota Yaris",
    img: imgYaris,
    category: "economy",
    brand: "Toyota",
    model: "Yaris sedan",
    year: 2022,
    color: "Super White",
    bodyType: "Economy sedan",
    doors: 4,
    seats: 5,
    engine: "1.5L 4-cylinder",
    power: "106 hp",
    transmission: "CVT automatic, front-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 250,
    supplier: "Barsha Motors Rental",
    pricePerDay: 90, pricePerWeek: 500, pricePerMonth: 1400, deposit: 1000, minDays: 1,
    description:
      "If you want the cheapest car that will not give you any trouble, book the Yaris. Toyota's service network " +
      "in the UAE is the largest of any brand, parts are everywhere, and these cars routinely run past 200,000 km " +
      "without drama. It is a touch quieter and better finished than the Sunny.",
    highlights:
      "Light steering and a tight turning circle make it the easiest car here to park, and real-world fuel " +
      "consumption of about 6 litres per 100 km means a full tank lasts most of a week of commuting.",
    features: [
      "Automatic transmission",
      "Rear parking camera and sensors",
      "Touchscreen with Bluetooth and USB",
      "Cruise control",
      "Seven airbags with vehicle stability control",
      "Salik tag fitted",
    ],
  }),
  car({
    id: 10,
    slug: "hyundai-accent",
    title: "Hyundai Accent",
    img: imgAccent,
    category: "economy",
    brand: "Hyundai",
    model: "Accent GL",
    year: 2021,
    color: "Urban Grey",
    bodyType: "Economy sedan",
    doors: 4,
    seats: 5,
    engine: "1.6L 4-cylinder",
    power: "123 hp",
    transmission: "6-speed automatic, front-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 250,
    supplier: "Deira Drive Rent A Car",
    pricePerDay: 85, pricePerWeek: 480, pricePerMonth: 1300, deposit: 1000, minDays: 1,
    description:
      "The Accent is the most powerful car in the economy list and the only one with a conventional automatic " +
      "rather than a CVT, which makes it feel noticeably livelier pulling onto a motorway. Rear legroom and boot " +
      "space are among the best in the class.",
    highlights:
      "The six-speed automatic is the reason to pick this over the Sunny or the Attrage — overtaking on the E11 " +
      "is a lot less stressful. The cabin is plain but everything is where you expect it, and the air " +
      "conditioning is strong.",
    features: [
      "6-speed automatic transmission",
      "Rear parking camera",
      "Apple CarPlay and Android Auto",
      "Cruise control",
      "Six airbags with ABS and stability control",
      "Salik tag fitted",
    ],
  }),
  car({
    id: 11,
    slug: "kia-pegas",
    title: "Kia Pegas",
    img: imgPegas,
    category: "economy",
    brand: "Kia",
    model: "Pegas LX",
    year: 2022,
    color: "Clear White",
    bodyType: "Economy sedan",
    doors: 4,
    seats: 5,
    engine: "1.4L 4-cylinder",
    power: "94 hp",
    transmission: "4-speed automatic, front-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 250,
    supplier: "Barsha Motors Rental",
    pricePerDay: 75, pricePerWeek: 430, pricePerMonth: 1150, deposit: 1000, minDays: 1,
    description:
      "The Pegas is the cheapest car in the fleet and it is built to a price — a 1.4-litre engine, a four-speed " +
      "automatic and not much else. For short city trips and a long monthly rental that is exactly what you " +
      "need, and at 1,150 AED a month nothing undercuts it.",
    highlights:
      "It is slow to accelerate and noisy above 120 km/h, so it is not the car for daily Dubai to Abu Dhabi " +
      "runs. Around town it is easy to place, cheap to fill, and the boot is bigger than the exterior suggests.",
    features: [
      "Automatic transmission",
      "Rear parking sensors",
      "Bluetooth audio with USB",
      "Manual air conditioning",
      "Dual front airbags with ABS",
      "Salik tag fitted",
    ],
  }),
  car({
    id: 12,
    slug: "mitsubishi-attrage",
    title: "Mitsubishi Attrage",
    img: imgAttrage,
    category: "economy",
    brand: "Mitsubishi",
    model: "Attrage GLX",
    year: 2021,
    color: "Titanium Grey",
    bodyType: "Economy sedan",
    doors: 4,
    seats: 5,
    engine: "1.2L 3-cylinder",
    power: "78 hp",
    transmission: "CVT automatic, front-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 250,
    supplier: "Creekside Car Hire",
    pricePerDay: 80, pricePerWeek: 460, pricePerMonth: 1250, deposit: 1000, minDays: 1,
    description:
      "The Attrage has the smallest engine of anything here — a 1.2-litre three-cylinder — and it is the most " +
      "economical car in the fleet as a result. Around 5.5 litres per 100 km is realistic, which is why it is a " +
      "favourite for long monthly rentals and delivery work.",
    highlights:
      "Three cylinders means it sounds a little thrummy at idle, and it needs planning to overtake. In exchange " +
      "you get the lowest fuel bill on this page and a genuinely spacious back seat for a car this small.",
    features: [
      "CVT automatic transmission",
      "Rear parking camera",
      "Bluetooth audio with USB",
      "Keyless entry",
      "Dual front airbags with ABS and stability control",
      "Salik tag fitted",
    ],
  }),
  car({
    id: 13,
    slug: "toyota-corolla",
    title: "Toyota Corolla",
    img: imgCorolla,
    category: "economy",
    brand: "Toyota",
    model: "Corolla XLI",
    year: 2022,
    color: "Super White",
    bodyType: "Mid-size sedan",
    doors: 4,
    seats: 5,
    engine: "1.6L 4-cylinder",
    power: "121 hp",
    transmission: "CVT automatic, front-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 250,
    supplier: "Creekside Car Hire",
    pricePerDay: 120, pricePerWeek: 700, pricePerMonth: 1900, deposit: 1500, minDays: 1,
    description:
      "The Corolla is a class above the small sedans above it — quieter at motorway speed, better finished " +
      "inside, and large enough that four adults are comfortable. It is the car to book if you need something " +
      "presentable for client meetings but do not want to pay luxury rates.",
    highlights:
      "Toyota Safety Sense is standard, so you get radar cruise control and lane-keeping assist, which makes a " +
      "big difference on the long straight motorways here. Fuel consumption is still low at around 6.5 litres " +
      "per 100 km.",
    features: [
      "Toyota Safety Sense with radar cruise control",
      "Lane departure alert and pre-collision system",
      "Touchscreen with Apple CarPlay and Android Auto",
      "Rear parking camera and sensors",
      "Seven airbags with vehicle stability control",
      "Salik tag fitted",
    ],
  }),
  car({
    id: 14,
    slug: "chevrolet-malibu",
    title: "Chevrolet Malibu",
    img: imgMalibu,
    category: "economy",
    brand: "Chevrolet",
    model: "Malibu LT",
    year: 2021,
    color: "Pacific Blue",
    bodyType: "Mid-size sedan",
    doors: 4,
    seats: 5,
    engine: "1.5L turbocharged 4-cylinder",
    power: "160 hp",
    transmission: "CVT automatic, front-wheel drive",
    fuel: "Petrol",
    mileagePerDay: 250,
    supplier: "Barsha Motors Rental",
    pricePerDay: 140, pricePerWeek: 850, pricePerMonth: 2300, deposit: 1500, minDays: 1,
    description:
      "The Malibu is the largest car in the value list. It is longer than a Corolla, has the biggest boot of " +
      "anything on this page outside the SUVs, and the turbocharged engine makes it the quickest of the " +
      "affordable sedans.",
    highlights:
      "The long wheelbase makes it the most comfortable of the cheap cars over distance, so it is a good pick " +
      "for regular Dubai to Abu Dhabi trips. The turbo engine wants 95 octane, which costs a little more than " +
      "the 91 the smaller cars will happily run on.",
    features: [
      "1.5L turbocharged engine",
      "8-inch touchscreen with Apple CarPlay and Android Auto",
      "Rear parking camera and sensors",
      "Cruise control",
      "Dual-zone climate control",
      "Salik tag fitted",
    ],
  }),
];

export const luxurySuvs = cars.filter((c) => c.category === "luxury");
export const cheapCars = cars.filter((c) => c.category === "economy");
export const getCarById = (id) => cars.find((c) => String(c.id) === String(id));

// Free-text search over the catalogue. Matches the car name, brand, model, body type,
// supplier and category, so "bmw", "suv", "cheap" and "skyline" all return something.
const searchIndex = (c) =>
  [
    c.title, c.brand, c.model, c.bodyType, c.color, c.supplier, c.category,
    c.category === "economy" ? "cheap budget economy" : "luxury premium",
    String(c.year), c.fuel, c.engine,
  ]
    .join(" ")
    .toLowerCase();

export const searchCars = (query) => {
  const terms = String(query || "").toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return cars.filter((c) => {
    const haystack = searchIndex(c);
    return terms.every((t) => haystack.includes(t));
  });
};
