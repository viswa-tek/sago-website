export const businessInfo = {
  name: "SagO Mobile & Computer Accessories",
  shortName: "SagO",
  tagline: "Your One-Stop Shop for Mobile & Computer Accessories",
  description:
    "Buy mobile covers, chargers, tempered glass, earphones, power banks, keyboards, mouse, laptop chargers, SSDs, RAM, cables, and computer accessories in Tirunelveli at affordable prices.",
  category: [
    "Cell Phone Accessory Store",
    "Computer Accessories Store",
  ],
  address: {
    street: "No. 9, EB Society Complex, Sivanthipatti Main Road",
    landmark: "Near Anbunagar Railway Gate",
    area: "Maharaja Nagar",
    city: "Tirunelveli",
    state: "Tamil Nadu",
    zip: "627011",
    country: "India",
    full: "No. 9, EB Society Complex, Sivanthipatti Main Road, Near Anbunagar Railway Gate, Maharaja Nagar, Tirunelveli, Tamil Nadu 627011, India",
  },
  phone: "+918438887716",
  phoneDisplay: "+91 84388 87716",
  whatsapp: "https://wa.me/918438887716",
  email: "info@sagoaccessories.com",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8!2d77.7!3d8.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTirunelveli!5e0!3m2!1sen!2sin!4v1234567890",
  googleMapsLink:
    "https://www.google.com/maps/place/SagO+Mobile+%26+Computer+Accessories/@8.6929467,77.7420463,15.18z/data=!4m6!3m5!1s0x3b040dbdab2b9c5b:0x42e41d20aa09d211!8m2!3d8.7050806!4d77.7501435!16s%2Fg%2F11r8xg5qf7",
  googleReviewLink: "https://www.google.com/maps/place/SagO+Mobile+%26+Computer+Accessories/@8.6929467,77.7420463,15.18z/data=!4m6!3m5!1s0x3b040dbdab2b9c5b:0x42e41d20aa09d211!8m2!3d8.7050806!4d77.7501435!16s%2Fg%2F11r8xg5qf7?authuser=0&hl=en&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  socialMedia: {
    instagram: "https://www.instagram.com/sagomobiles?igsh=cHF2cTd5bXRxbXB0",
    facebook: "https://www.facebook.com/share/18RNoUn2HH/",
  },
  hours: [
    { day: "Monday", open: "9:15 AM - 2:00 PM, 4:00 PM", close: "9:15 PM", isClosed: false },
    { day: "Tuesday", open: "9:15 AM - 2:00 PM, 4:00 PM", close: "9:15 PM", isClosed: false },
    { day: "Wednesday", open: "9:15 AM - 2:00 PM, 4:00 PM", close: "9:15 PM", isClosed: false },
    { day: "Thursday", open: "9:15 AM - 2:00 PM, 4:00 PM", close: "9:15 PM", isClosed: false },
    { day: "Friday", open: "9:15 AM - 2:00 PM, 4:00 PM", close: "9:15 PM", isClosed: false },
    { day: "Saturday", open: "9:15 AM - 2:00 PM, 4:00 PM", close: "9:15 PM", isClosed: false },
    { day: "Sunday", open: "", close: "", isClosed: true },
  ],
  serviceArea: "Tirunelveli and nearby areas",
  seo: {
    title:
      "Best Mobile & Computer Accessories Shop in Tirunelveli | SagO Mobile",
    description:
      "SagO Mobile & Computer Accessories: Tirunelveli's #1 shop for premium mobile covers, original laptop chargers, SSD, RAM, tempered glass, and computer peripherals. Visit us today for quality tech at local prices.",
    keywords: [
      "best mobile accessories shop in Tirunelveli",
      "computer accessories store Tirunelveli",
      "mobile shop near me Tirunelveli",
      "premium mobile covers Tirunelveli",
      "original laptop chargers Tirunelveli",
      "SSD and RAM upgrade Tirunelveli",
      "tempered glass installation Tirunelveli",
      "SagO Mobile and Computer Accessories",
      "computer peripherals Tirunelveli",
    ],
    ogImage: "/og-image.png",
    siteUrl: "https://sagoaccessories.com",
  },
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX", // REPLACE_WITH_ACTUAL_GA_ID
    googleSearchConsoleId: "XXXXXXXXXX", // REPLACE_WITH_ACTUAL_GSC_VERIFICATION
  },
} as const;

export type BusinessInfo = typeof businessInfo;
