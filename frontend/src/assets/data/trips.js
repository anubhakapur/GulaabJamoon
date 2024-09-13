const trips = [
  {
    id: 1,
    name: "Jaipur Bike Tour",
    description: "Explore the Pink City of India",
    price: 149.99,
    image:
      "https://www.tourmyindia.com/blog//wp-content/uploads/2018/05/Hawa-Mahal-Jaipur2.jpg",
    gallery: [
      "https://expatlifeinthailand.com//assets/media/2019/10/IMG_0833-01.jpeg",
      "https://static.toiimg.com/photo/msid-97799920,width-96,height-65.cms",
      "https://static.toiimg.com/photo/msid-24476893,width-96,height-65.cms",
      "https://expatlifeinthailand.com//assets/media/2019/10/IMG_0833-01.jpeg",
      "https://static.toiimg.com/photo/msid-97799920,width-96,height-65.cms",
      "https://static.toiimg.com/photo/msid-24476893,width-96,height-65.cms",
    ],
    location: "Rajasthan, India",
    duration: "2 days",
    itinerary: ["Visit Amber Fort", "Explore City Palace"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Rich cultural heritage", "Magnificent architecture"],
    inclusions: ["Hotel accommodation", "Local guide"],
    boardingLocation: { lat: 26.9124, lng: 75.7873 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Kerala Backwater Cruise",
      },
    ],
    variants: [
      {
        name: "Standard Jaipur Tour",
        description: "A comprehensive 2-day tour",
        price: 149.99,
        image: "/src/assets/outliers/jaipur_standard.jpg",
      },
      {
        name: "Premium Jaipur Experience",
        description: "Luxury 3-day tour",
        price: 299.99,
        image: "/src/assets/outliers/jaipur_premium.jpg",
      },
    ],
    taxes: 15.0,
    fees: 10.0,
  },
  {
    id: 2,
    name: "Kerala Backwater Cruise",
    description: "Enjoy a serene backwater cruise",
    price: 199.99,
    image: "/src/assets/outliers/kerala1.jpg",
    gallery: [
      "/src/assets/outliers/kerala1.jpg",
      "/src/assets/outliers/kerala2.jpg",
      "/src/assets/outliers/kerala3.jpg",
    ],
    location: "Kerala, India",
    duration: "3 days",
    itinerary: ["Houseboat cruise", "Explore Alleppey", "Visit Vembanad Lake"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Relaxing backwaters", "Scenic beauty"],
    inclusions: ["Houseboat stay", "Meals on board"],
    boardingLocation: { lat: 9.4981, lng: 76.3388 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Kumarakom Bird Sanctuary Visit",
        image: "/src/assets/outliers/kumarakom.jpg",
        description: "Birdwatching in a scenic sanctuary",
      },
    ],
    variants: [
      {
        name: "Standard Backwater Cruise",
        description: "A relaxing 3-day cruise",
        price: 199.99,
        image: "/src/assets/outliers/kerala_standard.jpg",
      },
      {
        name: "Luxury Houseboat Experience",
        description: "3-day cruise with premium services",
        price: 349.99,
        image: "/src/assets/outliers/kerala_luxury.jpg",
      },
    ],
    taxes: 20.0,
    fees: 15.0,
  },
  {
    id: 3,
    name: "Manali Adventure Trek",
    description: "Trek through the scenic valleys of Manali",
    price: 99.99,
    image: "/src/assets/outliers/manali1.jpg",
    gallery: [
      "/src/assets/outliers/manali1.jpg",
      "/src/assets/outliers/manali2.jpg",
      "/src/assets/outliers/manali3.jpg",
    ],
    location: "Himachal Pradesh, India",
    duration: "4 days",
    itinerary: ["Trek to Solang Valley", "Visit Hidimba Temple"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Mountain views", "Adventure activities"],
    inclusions: ["Guide", "Trekking gear"],
    boardingLocation: { lat: 32.2396, lng: 77.1887 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Shimla Toy Train Ride",
        image: "/src/assets/outliers/shimla.jpg",
        description: "A scenic train journey",
      },
    ],
    variants: [
      {
        name: "Standard Trekking Experience",
        description: "A 4-day trekking tour",
        price: 99.99,
        image: "/src/assets/outliers/manali_standard.jpg",
      },
      {
        name: "Premium Trekking Adventure",
        description: "Trek with adventure sports",
        price: 199.99,
        image: "/src/assets/outliers/manali_premium.jpg",
      },
    ],
    taxes: 10.0,
    fees: 5.0,
  },
  {
    id: 4,
    name: "Goa Beach Getaway",
    description: "Relax on the beaches of Goa",
    price: 299.99,
    image: "/src/assets/outliers/goa1.jpg",
    gallery: [
      "/src/assets/outliers/goa1.jpg",
      "/src/assets/outliers/goa2.jpg",
      "/src/assets/outliers/goa3.jpg",
    ],
    location: "Goa, India",
    duration: "3 days",
    itinerary: ["Beach relaxation", "Visit Old Goa", "Water sports"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Pristine beaches", "Goan cuisine"],
    inclusions: ["Resort stay", "Beach activities"],
    boardingLocation: { lat: 15.2993, lng: 74.124 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Andaman Beach Holiday",
        image: "/src/assets/outliers/andaman.jpg",
        description: "Explore the Andaman Islands",
      },
    ],
    variants: [
      {
        name: "Standard Beach Getaway",
        description: "A relaxing 3-day trip",
        price: 299.99,
        image: "/src/assets/outliers/goa_standard.jpg",
      },
      {
        name: "Premium Beach Stay",
        description: "A luxury beach resort experience",
        price: 499.99,
        image: "/src/assets/outliers/goa_premium.jpg",
      },
    ],
    taxes: 30.0,
    fees: 20.0,
  },
  {
    id: 5,
    name: "Leh Ladakh Road Trip",
    description: "Experience the rugged landscapes of Ladakh",
    price: 499.99,
    image: "/src/assets/outliers/ladakh1.jpg",
    gallery: [
      "/src/assets/outliers/ladakh1.jpg",
      "/src/assets/outliers/ladakh2.jpg",
      "/src/assets/outliers/ladakh3.jpg",
    ],
    location: "Ladakh, India",
    duration: "7 days",
    itinerary: ["Drive through Khardung La", "Visit Pangong Lake"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Mountain passes", "Breathtaking landscapes"],
    inclusions: ["Vehicle", "Accommodation"],
    boardingLocation: { lat: 34.1526, lng: 77.5771 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Spiti Valley Road Trip",
        image: "/src/assets/outliers/spiti.jpg",
        description: "Explore the Spiti Valley",
      },
    ],
    variants: [
      {
        name: "Standard Ladakh Road Trip",
        description: "A 7-day road trip",
        price: 499.99,
        image: "/src/assets/outliers/ladakh_standard.jpg",
      },
      {
        name: "Luxury Ladakh Adventure",
        description: "A premium road trip experience",
        price: 899.99,
        image: "/src/assets/outliers/ladakh_premium.jpg",
      },
    ],
    taxes: 40.0,
    fees: 25.0,
  },
  {
    id: 6,
    name: "Rajasthan Desert Safari",
    description: "Explore the Thar Desert on a safari",
    price: 249.99,
    image: "/src/assets/outliers/rajasthan1.jpg",
    gallery: [
      "/src/assets/outliers/rajasthan1.jpg",
      "/src/assets/outliers/rajasthan2.jpg",
      "/src/assets/outliers/rajasthan3.jpg",
    ],
    location: "Rajasthan, India",
    duration: "3 days",
    itinerary: ["Camel safari", "Visit Jaisalmer Fort"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Desert landscapes", "Cultural performances"],
    inclusions: ["Desert camp stay", "Meals"],
    boardingLocation: { lat: 26.9157, lng: 70.9083 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Kutch Desert Safari",
        image: "/src/assets/outliers/kutch.jpg",
        description: "Explore the White Desert of Kutch",
      },
    ],
    variants: [
      {
        name: "Standard Desert Safari",
        description: "A 3-day desert tour",
        price: 249.99,
        image: "/src/assets/outliers/rajasthan_standard.jpg",
      },
      {
        name: "Luxury Desert Safari",
        description: "A premium desert experience",
        price: 399.99,
        image: "/src/assets/outliers/rajasthan_premium.jpg",
      },
    ],
    taxes: 25.0,
    fees: 15.0,
  },
  {
    id: 7,
    name: "Sikkim Valley Trek",
    description: "Trek through the valleys of Sikkim",
    price: 199.99,
    image: "/src/assets/outliers/sikkim1.jpg",
    gallery: [
      "/src/assets/outliers/sikkim1.jpg",
      "/src/assets/outliers/sikkim2.jpg",
      "/src/assets/outliers/sikkim3.jpg",
    ],
    location: "Sikkim, India",
    duration: "5 days",
    itinerary: ["Visit Gurudongmar Lake", "Explore Yumthang Valley"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Stunning valleys", "Snow-capped peaks"],
    inclusions: ["Guide", "Trekking equipment"],
    boardingLocation: { lat: 27.533, lng: 88.5122 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Darjeeling Hill Tour",
        image: "/src/assets/outliers/darjeeling.jpg",
        description: "Explore the hills of Darjeeling",
      },
    ],
    variants: [
      {
        name: "Standard Sikkim Trek",
        description: "5-day trek",
        price: 199.99,
        image: "/src/assets/outliers/sikkim_standard.jpg",
      },
      {
        name: "Luxury Trek",
        description: "Trek with luxury accommodations",
        price: 349.99,
        image: "/src/assets/outliers/sikkim_luxury.jpg",
      },
    ],
    taxes: 15.0,
    fees: 10.0,
  },
  {
    id: 8,
    name: "Andaman Scuba Diving",
    description: "Dive into the waters of Andaman",
    price: 399.99,
    image: "/src/assets/outliers/andaman1.jpg",
    gallery: [
      "/src/assets/outliers/andaman1.jpg",
      "/src/assets/outliers/andaman2.jpg",
      "/src/assets/outliers/andaman3.jpg",
    ],
    location: "Andaman & Nicobar Islands, India",
    duration: "4 days",
    itinerary: ["Scuba diving", "Explore Havelock Island"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Coral reefs", "Marine life"],
    inclusions: ["Diving gear", "Accommodation"],
    boardingLocation: { lat: 11.6234, lng: 92.7265 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Lakshadweep Scuba Adventure",
        image: "/src/assets/outliers/lakshadweep.jpg",
        description: "Dive in the Lakshadweep Islands",
      },
    ],
    variants: [
      {
        name: "Standard Scuba Diving",
        description: "4-day diving trip",
        price: 399.99,
        image: "/src/assets/outliers/andaman_standard.jpg",
      },
      {
        name: "Premium Scuba Experience",
        description: "Luxury scuba adventure",
        price: 599.99,
        image: "/src/assets/outliers/andaman_premium.jpg",
      },
    ],
    taxes: 30.0,
    fees: 20.0,
  },
  {
    id: 9,
    name: "Kashmir Houseboat Stay",
    description: "Stay on a houseboat in Dal Lake",
    price: 249.99,
    image: "/src/assets/outliers/kashmir1.jpg",
    gallery: [
      "/src/assets/outliers/kashmir1.jpg",
      "/src/assets/outliers/kashmir2.jpg",
      "/src/assets/outliers/kashmir3.jpg",
    ],
    location: "Kashmir, India",
    duration: "3 days",
    itinerary: ["Shikara ride", "Explore Mughal gardens"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Scenic lake views", "Traditional Kashmiri food"],
    inclusions: ["Houseboat stay", "Meals"],
    boardingLocation: { lat: 34.0837, lng: 74.7973 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Gulmarg Snow Adventure",
        image: "/src/assets/outliers/gulmarg.jpg",
        description: "Snow activities in Gulmarg",
      },
    ],
    variants: [
      {
        name: "Standard Houseboat Stay",
        description: "3-day houseboat stay",
        price: 249.99,
        image: "/src/assets/outliers/kashmir_standard.jpg",
      },
      {
        name: "Luxury Houseboat Experience",
        description: "Stay on a luxury houseboat",
        price: 449.99,
        image: "/src/assets/outliers/kashmir_premium.jpg",
      },
    ],
    taxes: 20.0,
    fees: 15.0,
  },
  {
    id: 10,
    name: "Rann of Kutch Full Moon Safari",
    description: "Explore the white desert under the full moon",
    price: 349.99,
    image: "/src/assets/outliers/kutch1.jpg",
    gallery: [
      "/src/assets/outliers/kutch1.jpg",
      "/src/assets/outliers/kutch2.jpg",
      "/src/assets/outliers/kutch3.jpg",
    ],
    location: "Gujarat, India",
    duration: "3 days",
    itinerary: ["Full moon safari", "Visit local villages"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["White desert", "Local culture"],
    inclusions: ["Tent accommodation", "Meals"],
    boardingLocation: { lat: 23.7334, lng: 69.8597 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Rajasthan Desert Adventure",
        image: "/src/assets/outliers/rajasthan.jpg",
        description: "Explore the Rajasthan desert",
      },
    ],
    variants: [
      {
        name: "Standard Full Moon Safari",
        description: "3-day safari",
        price: 349.99,
        image: "/src/assets/outliers/kutch_standard.jpg",
      },
      {
        name: "Premium Full Moon Safari",
        description: "Luxury desert experience",
        price: 549.99,
        image: "/src/assets/outliers/kutch_premium.jpg",
      },
    ],
    taxes: 25.0,
    fees: 20.0,
  },
  {
    id: 11,
    name: "Coorg Coffee Plantation Stay",
    description: "Stay amidst the coffee plantations of Coorg",
    price: 179.99,
    image: "/src/assets/outliers/coorg1.jpg",
    gallery: [
      "/src/assets/outliers/coorg1.jpg",
      "/src/assets/outliers/coorg2.jpg",
      "/src/assets/outliers/coorg3.jpg",
    ],
    location: "Karnataka, India",
    duration: "3 days",
    itinerary: ["Coffee plantation tour", "Explore Coorg wildlife"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Serene plantation", "Breathtaking views"],
    inclusions: ["Stay in plantation cottages", "Meals"],
    boardingLocation: { lat: 12.3375, lng: 75.8064 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Wayanad Plantation Retreat",
        image: "/src/assets/outliers/wayanad.jpg",
        description: "Stay in Wayanad",
      },
    ],
    variants: [
      {
        name: "Standard Plantation Stay",
        description: "3-day stay",
        price: 179.99,
        image: "/src/assets/outliers/coorg_standard.jpg",
      },
      {
        name: "Luxury Plantation Stay",
        description: "Stay in luxury cottages",
        price: 299.99,
        image: "/src/assets/outliers/coorg_premium.jpg",
      },
    ],
    taxes: 15.0,
    fees: 10.0,
  },
  {
    id: 12,
    name: "Nainital Hill Station Escape",
    description: "Escape to the hills of Nainital",
    price: 129.99,
    image: "/src/assets/outliers/nainital1.jpg",
    gallery: [
      "/src/assets/outliers/nainital1.jpg",
      "/src/assets/outliers/nainital2.jpg",
      "/src/assets/outliers/nainital3.jpg",
    ],
    location: "Uttarakhand, India",
    duration: "2 days",
    itinerary: ["Boating on Naini Lake", "Visit Naina Devi Temple"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Scenic hill views", "Relaxing getaway"],
    inclusions: ["Hotel accommodation", "Meals"],
    boardingLocation: { lat: 29.3919, lng: 79.4542 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Mussoorie Hill Retreat",
        image: "/src/assets/outliers/mussoorie.jpg",
        description: "Relax in Mussoorie",
      },
    ],
    variants: [
      {
        name: "Standard Hill Escape",
        description: "2-day stay",
        price: 129.99,
        image: "/src/assets/outliers/nainital_standard.jpg",
      },
      {
        name: "Premium Hill Escape",
        description: "Luxury hill experience",
        price: 229.99,
        image: "/src/assets/outliers/nainital_premium.jpg",
      },
    ],
    taxes: 10.0,
    fees: 5.0,
  },
  {
    id: 13,
    name: "Meghalaya Living Root Bridge Tour",
    description: "Explore the living root bridges of Meghalaya",
    price: 299.99,
    image: "/src/assets/outliers/meghalaya1.jpg",
    gallery: [
      "/src/assets/outliers/meghalaya1.jpg",
      "/src/assets/outliers/meghalaya2.jpg",
      "/src/assets/outliers/meghalaya3.jpg",
    ],
    location: "Meghalaya, India",
    duration: "4 days",
    itinerary: ["Visit living root bridges", "Explore Cherrapunji"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Unique bridges", "Rainforest adventure"],
    inclusions: ["Guide", "Accommodation"],
    boardingLocation: { lat: 25.5702, lng: 91.8832 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Assam Tea Estate Tour",
        image: "/src/assets/outliers/assam.jpg",
        description: "Stay in an Assam tea estate",
      },
    ],
    variants: [
      {
        name: "Standard Root Bridge Tour",
        description: "4-day tour",
        price: 299.99,
        image: "/src/assets/outliers/meghalaya_standard.jpg",
      },
      {
        name: "Luxury Root Bridge Experience",
        description: "Luxury tour",
        price: 499.99,
        image: "/src/assets/outliers/meghalaya_premium.jpg",
      },
    ],
    taxes: 20.0,
    fees: 15.0,
  },
  {
    id: 14,
    name: "Kerala Backwaters Houseboat Cruise",
    description: "Cruise through the backwaters of Kerala",
    price: 349.99,
    image: "/src/assets/outliers/kerala1.jpg",
    gallery: [
      "/src/assets/outliers/kerala1.jpg",
      "/src/assets/outliers/kerala2.jpg",
      "/src/assets/outliers/kerala3.jpg",
    ],
    location: "Kerala, India",
    duration: "3 days",
    itinerary: ["Houseboat cruise", "Explore Alleppey"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Scenic backwaters", "Traditional Kerala food"],
    inclusions: ["Houseboat stay", "Meals"],
    boardingLocation: { lat: 9.4968, lng: 76.3398 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Goa Beachfront Stay",
        image: "/src/assets/outliers/goa.jpg",
        description: "Relax by the beach in Goa",
      },
    ],
    variants: [
      {
        name: "Standard Houseboat Cruise",
        description: "3-day cruise",
        price: 349.99,
        image: "/src/assets/outliers/kerala_standard.jpg",
      },
      {
        name: "Luxury Houseboat Cruise",
        description: "Luxury houseboat stay",
        price: 549.99,
        image: "/src/assets/outliers/kerala_premium.jpg",
      },
    ],
    taxes: 25.0,
    fees: 20.0,
  },
  {
    id: 15,
    name: "Leh-Ladakh Bike Adventure",
    description: "Bike through the stunning landscapes of Leh-Ladakh",
    price: 499.99,
    image: "/src/assets/outliers/leh1.jpg",
    gallery: [
      "/src/assets/outliers/leh1.jpg",
      "/src/assets/outliers/leh2.jpg",
      "/src/assets/outliers/leh3.jpg",
    ],
    location: "Ladakh, India",
    duration: "7 days",
    itinerary: ["Bike through high-altitude passes", "Explore Pangong Lake"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Breathtaking landscapes", "Adventure-filled rides"],
    inclusions: ["Bike rental", "Accommodation"],
    boardingLocation: { lat: 34.1526, lng: 77.5771 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Spiti Valley Bike Tour",
        image: "/src/assets/outliers/spiti.jpg",
        description: "Bike through Spiti Valley",
      },
    ],
    variants: [
      {
        name: "Standard Bike Adventure",
        description: "7-day adventure",
        price: 499.99,
        image: "/src/assets/outliers/leh_standard.jpg",
      },
      {
        name: "Premium Bike Adventure",
        description: "Luxury bike tour",
        price: 799.99,
        image: "/src/assets/outliers/leh_premium.jpg",
      },
    ],
    taxes: 30.0,
    fees: 25.0,
  },
  {
    id: 16,
    name: "Rajasthan Palace Tour",
    description: "Explore the royal palaces of Rajasthan",
    price: 399.99,
    image: "/src/assets/outliers/rajasthan1.jpg",
    gallery: [
      "/src/assets/outliers/rajasthan1.jpg",
      "/src/assets/outliers/rajasthan2.jpg",
      "/src/assets/outliers/rajasthan3.jpg",
    ],
    location: "Rajasthan, India",
    duration: "5 days",
    itinerary: ["Visit Udaipur", "Explore Jodhpur and Jaipur"],
    cancellationPolicy: "Free cancellation up to 24 hours before the start",
    highlights: ["Royal palaces", "Cultural experiences"],
    inclusions: ["Accommodation", "Guide"],
    boardingLocation: { lat: 26.9124, lng: 75.7873 },
    faq: [{ question: "Best time to visit?", answer: "October to March" }],
    similarExperiences: [
      {
        name: "Mysore Palace Experience",
        image: "/src/assets/outliers/mysore.jpg",
        description: "Explore Mysore palaces",
      },
    ],
    variants: [
      {
        name: "Standard Palace Tour",
        description: "5-day tour",
        price: 399.99,
        image: "/src/assets/outliers/rajasthan_standard.jpg",
      },
      {
        name: "Luxury Palace Tour",
        description: "Stay in heritage hotels",
        price: 649.99,
        image: "/src/assets/outliers/rajasthan_premium.jpg",
      },
    ],
    taxes: 25.0,
    fees: 20.0,
  },
];

export default trips;
