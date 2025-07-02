const cat = {
  inverters: "inverters",
  batteries: "batteries",
  panels: "panels",
  appliances: "appliances",
  windmills:"windmills",
  accessories: "accessories",
};

export const categories = [
  {
    _id: 1006,
    name: "Windmills",
    image: "https://ibb.co/1f7sGsX5",
    description: "High-efficiency windmills for residential and commercial use.",
    _base: "windmills",
  },
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
    name: "SunLife Solar SUNPRO 1.5KW is an efficient off-grid inverter",
    images: [
      "https://scontent.fisb3-2.fna.fbcdn.net/v/t39.30808-6/494543837_658660063597420_8612904885285249204_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHj6aqdN4smRZB1v501W9nhjwBOZgY7oBGPAE5mBjugEdMyHBvLmXLDVcPDgaYwBIQ9XB3_vlBH6kpZAGss1lPL&_nc_ohc=m0WgZwLcf74Q7kNvwF5UtCZ&_nc_oc=Adlol23T59rLr5JWLykfjc7g6Q3xRkjyiVyGFoGKTq-a-6iWlzgQWgmAHBxGukFtGZM&_nc_zt=23&_nc_ht=scontent.fisb3-2.fna&_nc_gid=hxevo7BdJNCvPAIPyuSHZw&oh=00_AfOWfHzVHwPfbIzip7e_Hjf3HlkFrDGQ7nfW1aP7IOfCOw&oe=686B0164"
    ],
    description: "SunLife Solar SUNPRO 1.5KW is an efficient off-grid inverter tailored for 12V battery systems, ideal for small-scale solar setups. It delivers 1500W rated power, handles up to 2000W PV input, and operates within a wide MPPT range (60–430VDC). With a max solar voltage of 450VDC and backed by a 2-year warranty (1-year parts + 1-year service), it's built for reliable performance in homes or remote areas.",
    regularPrice: 145000,
    discountedPrice: 138000,
    quantity: 10,
    rating: 5.0,
    reviews: 9,
    category: "Inverters",
    brand: "Sunlife",
    isStock: true,
    overView: "",
    isNew: true,
    _base: cat.inverters,
  },
  {
    _id: 2002,
    name: "xyz SL IV Plus 6.2KW Hybrid Solar Inverter",
    images: [
      "https://vmrlsjhqqwgwfunudeff.supabase.co/storage/v1/object/public/products/sunlife.jpg",
      "https://ibb.co/1f7sGsX5"
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
    _id: 2006,
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
      "https://tse4.mm.bing.net/th/id/OIP.GpVKodqjIYF5kCE6cFTeHwHaHa?cb=thvnextc2&w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3"
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
      "https://vmrlsjhqqwgwfunudeff.supabase.co/storage/v1/object/public/products/longi.jpg",
      "https://tse4.mm.bing.net/th/id/OIP.GpVKodqjIYF5kCE6cFTeHwHaHa?cb=thvnextc2&w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3"
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
      "https://tse3.mm.bing.net/th/id/OIP.2utxugFjjTO6vtE5uRHw_gHaHa?cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3"
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
{
  _id: 2007,
  name: "SunLife Solar SUNPRO SL 3.0KW is a reliable off-grid inverter",
  images: [
    "https://scontent.fisb3-2.fna.fbcdn.net/v/t39.30808-6/494351720_658660083597418_4440778173290433364_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHSIw85vuHurWa8OLawI2mG5m0udW-NgkrmbS51b42CSn7re0foN1UC772eMeByfS84P9UHB6yWice9wP8nAh6G&_nc_ohc=OOUHon35OaAQ7kNvwEBZnvj&_nc_oc=AdlOFuwcKYp7mr7MZ42Rz97no6QeJmSzmMCtC1S96H7cdI2CMvfRo4v2PXV8ft0xQms&_nc_zt=23&_nc_ht=scontent.fisb3-2.fna&_nc_gid=pZodY6nLZFOUxEiQLngsQg&oh=00_AfOYaKdgu8UjoF0WAmc_qx35wZZ5Y_6YMpVv-rwCWdBCww&oe=686B37D5"
  ],
  description: "SunLife Solar SUNPRO SL 3.0KW is a reliable off-grid inverter designed for 24V battery systems, delivering 3000W rated power with a maximum 4000W PV input. It supports operation with or without batteries, offers pure sine wave output, and includes smart features like MPPT (60–430VDC), cold start, and RGB LED status indicators. Built for resilience, it’s backed by a 2-year warranty (1-year parts + 1-year service).",
  regularPrice: 145000,
  discountedPrice: 138000,
  quantity: 10,
  rating: 5.0,
  reviews: 9,
  category: "Inverters",
  brand: "Sunlife",
  isStock: true,
  overView: "",
  isNew: true,
  _base: "inverters"
},
{
  _id: 2008,
  name: "SunLife SL-AXPERT VMIII 4KW Hybrid Inverter",
  images: [
    "https://scontent.fisb3-3.fna.fbcdn.net/v/t39.30808-6/484326462_623181767145250_5175611503980594898_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHdmvuXPTO2iFdDRKnj7BnhKyRYcm9_5N8rJFhyb3_k346d7IIIxibHn7YzfPSkiKABV7WTBYvcpkVrjDon9Go8&_nc_ohc=HMoKptYHNkkQ7kNvwHl6L9K&_nc_oc=AdlF6L6pepcQ2A3pwEMoKV0lpX2xNgwNo-vbvsqJ7fKgvXRZ8KGKAz7zeKQB4Uy2opU&_nc_zt=23&_nc_ht=scontent.fisb3-3.fna&_nc_gid=8nzFh9lJgQB9ns00KZFc-Q&oh=00_AfO44rjD1U3pSb2uWqtU_vDutCEBl7bBE6DnTal1zkosjQ&oe=686B5992"
  ],
  description: "The SL-AXPERT VMIII 4KW is a powerful hybrid solar inverter by SunLife Solar. It supports a max PV input of 5000W with MPPT voltage range from 60–450VDC. Featuring dual output, built-in BMS for lithium batteries, a 24VDC 120A battery input, and app-based monitoring. Backed by a 2-year warranty (1-year parts, 1-year service). Perfect for homes seeking reliable solar integration.",
  regularPrice: 185000,
  discountedPrice: 172500,
  quantity: 8,
  rating: 5.0,
  reviews: 11,
  category: "Inverters",
  brand: "Sunlife",
  isStock: true,
  overView: "Hybrid inverter with intelligent power delivery and lithium compatibility.",
  isNew: true,
  _base: "inverters"
}  
];

export const blogsData = [];

export const highlightsProducts = [];
