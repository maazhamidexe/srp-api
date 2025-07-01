const cat = {
  inverters: "inverters",
  batteries: "batteries",
  panels: "panels",
  appliances: "appliances",
  accessories: "accessories",
};

export const categories = [
  {
    _id: 1001,
    name: "Inverters",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "High-efficiency solar inverters for residential and commercial use.",
    _base: "inverters",
  },
  {
    _id: 1002,
    name: "Batteries",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "Reliable energy storage solutions including lithium and lead-acid batteries.",
    _base: "batteries",
  },
  {
    _id: 1003,
    name: "Panels",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80",
    description: "Premium solar panels for maximum energy generation.",
    _base: "panels",
  },
  {
    _id: 1004,
    name: "Appliances",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "Energy-efficient appliances compatible with solar setups.",
    _base: "appliances",
  },
  {
    _id: 1005,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description: "Cables, connectors, charge controllers, and more.",
    _base: "accessories",
  },
];

export const products = [
  {
    _id: 2001,
    name: "SunLife SL IV Plus 6.2KW Hybrid Solar Inverter",
    images: [
      "https://vmrlsjhqqwgwfunudeff.supabase.co/storage/v1/object/public/products/sunlife.jpg"
    ],
    description: "SunLife SL IV Plus (6.2KW) is a smart hybrid solar inverter for efficient power use.",
    regularPrice: 145000,
    discountedPrice: 138000,
    quantity: 0,
    rating: 0.0,
    reviews: 0,
    category: "Inverters",
    brand: "Sunlife",
    isStock: true,
    overView: "",
    isNew: true,
    _base: cat.inverters,
  },
  {
    _id: 2002,
    name: "Max Power MP 16000 Ultra 16kWh Lithium-ion Solar Battery",
    images: [
      "https://vmrlsjhqqwgwfunudeff.supabase.co/storage/v1/object/public/products/maxpower16.jpg"
    ],
    description: "Top-tier 16kWh lithium-ion battery with deep cycle technology and robust safety.",
    regularPrice: 0,
    discountedPrice: 0,
    quantity: 0,
    rating: 0.0,
    reviews: 0,
    category: "Batteries",
    brand: "Maxpower",
    isStock: true,
    overView: "",
    isNew: true,
    _base: cat.batteries,
  },
  {
    _id: 2003,
    name: "Fronus PV 7200 Infineon Reborn Solar Inverter",
    images: [
      "https://vmrlsjhqqwgwfunudeff.supabase.co/storage/v1/object/public/products/fronus.jpg"
    ],
    description: "Fronus PV 7200 Infineon Reborn is a high-performance solar inverter with stable output.",
    regularPrice: 145000,
    discountedPrice: 138999,
    quantity: 0,
    rating: 0.0,
    reviews: 0,
    category: "Inverters",
    brand: "Fronus",
    isStock: true,
    overView: "",
    isNew: true,
    _base: cat.inverters,
  },
  {
    _id: 2004,
    name: "Longi 585w solar panel",
    images: [
      "https://vmrlsjhqqwgwfunudeff.supabase.co/storage/v1/object/public/products/longi.jpg"
    ],
    description: "",
    regularPrice: 17000,
    discountedPrice: 16000,
    quantity: 0,
    rating: 0.0,
    reviews: 0,
    category: "Panels",
    brand: "Longi",
    isStock: true,
    overView: "",
    isNew: true,
    _base: cat.panels,
  },
  {
    _id: 2005,
    name: "Max Power MP 10000 Ultra 10.5kWh Lithium-ion Solar Battery",
    images: [
      "https://vmrlsjhqqwgwfunudeff.supabase.co/storage/v1/object/public/products/maxpower10.jpg"
    ],
    description: "Powerful 10.5kWh lithium-ion battery for solar backup with superior longevity.",
    regularPrice: 0,
    discountedPrice: 0,
    quantity: 0,
    rating: 0.0,
    reviews: 0,
    category: "Batteries",
    brand: "Maxpower",
    isStock: true,
    overView: "",
    isNew: true,
    _base: cat.batteries,
  },
];
