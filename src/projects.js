import CarouselImg from "./assets/Carousel.png";
import TrishulImg from "./assets/Trishul.png";
import CarouselVid from "./assets/BottleCarousel.mp4";
import Eshop from "./assets/EShop.mp4";
import Uk from "./assets/uk.mp4";
import Taxi from "./assets/Taxi.png";

const projects = [
  {
    name: "Uttarakhand Tour & Travels",
    title: "Texi booking service in Uttarakhand",
    description:
      "Book Texi from anywhere and get standard to luxury ride for tour and transfer",
    TechStack: {
      FrontEnd: "Next.js, TailwindCss, TypeScript",
      UIDesign:
        "Used modern design principles and frameworks like Material UI, TailwindCSS,  React icons or react_packages.",
    },
    imgUrl: Taxi,
    videoUrl: Uk,
    duration: "",
    deployed: true,
    url: "https://www.uttarakhandtravelss.com",
    githubFE: "https://github.com/krishnapant13/TrishulRegency",
  },
  {
    name: "Trishul Regency",
    title: "Hotel Management Applicatoin for booking rooms and restaurent",
    description:
      "Hotel Management Applicatoin for booking rooms and restaurent",
    Features: [
      {
        header: "Check Rooms",
        points: ["Select different rooms as per the need and view."],
      },
      {
        header: "Select Categories",
        points: ["Select between categories from standard to deluxe rooms"],
      },
      {
        header: "Direct connects",
        points: [
          "Add the details and a mail will be sent to the manager directly",
        ],
      },
    ],
    TechStack: {
      FrontEnd: "React.js, HTML, TailwindCss, JavaScript",
      UIDesign:
        "Used modern design principles and frameworks like Material UI, TailwindCSS,  React icons or react_packages.",
    },
    imgUrl: TrishulImg,
    videoUrl: CarouselVid,
    duration: "",
    deployed: true,
    url: "https://www.trishulregency.in",
    githubFE: "https://github.com/krishnapant13/TrishulRegency",
  },
  {
    name: "Animated Carousel using Tailwind Css",
    title: "Animated Custom Carousel",
    tagName: "Deployed",
    description:
      "Animated custom carousel for displaying items and description about them. Change the item and description using the next and prev button in left bottom, it will change the item in slide, description about the item and color will change according the item theme color",
    Features: [
      {
        header: "Item Display",
        points: ["dispaly Items in attractive animated way."],
      },
      {
        header: "Description with buy link",
        points: [
          "Users will read about the description of the item an directly add them to cart or anything with the custom button",
        ],
      },
    ],
    TechStack: {
      FrontEnd: "React.js, HTML, TailwindCss, JavaScript",
      UIDesign:
        "Used modern design principles and frameworks like Material UI, TailwindCSS,  React icons or react_packages.",
    },
    imgUrl: CarouselImg,
    videoUrl: CarouselVid,
    route: "/juice-carousel",
  },
  {
    name: " Multi-Vendor E-Shop",
    title: "The Oe Store",
    tagName: "Under Develoment",
    description:
      "The Multi-Vendor E-Commerce Platform is a comprehensive web application designed to facilitate online shopping and sales between multiple vendors and customers. This platform allows users to browse, search for, purchase, and review products from various sellers. It includes user authentication, real-time communication using Socket.io, order tracking, online payment processing, and more.",
    Features: [
      {
        header: "User Authentication:",
        points: [
          "Users can register, log in, and manage their profiles.",
          "Secure authentication mechanisms ensure data privacy.",
        ],
      },
      {
        header: "User Profile Management:",
        points: [
          "Users can update their personal information, including name, contact details, and profile picture.",
          "Change passwords and manage notification preferences.",
        ],
      },
      {
        header: "Shopping Cart:",
        points: [
          "Users can add products to their shopping carts and view the cart contents.",
          "Edit cart items, update quantities, or remove products.",
          "Calculate the total price of items in the cart.",
        ],
      },
      {
        header: "Wishlist:",
        points: [
          "Users can add products to their wish list and add them directly to cart.",
          "Edit wish list items, update quantities, or remove products.",
        ],
      },
      {
        header: "Online Payment Processing:",
        points: [
          "Integration with a secure payment gateway for processing payments.",
          "Users can make payments using credit/debit cards, digital wallets, or other payment methods.",
        ],
      },
      {
        header: "Order Management:",
        points: [
          "Users can place orders, view order history, and track the status of their orders.",
          "Vendors can manage orders, change order status.",
        ],
      },
      {
        header: "Item Discounts:",
        points: ["Vendors can create product discount coupons."],
      },
      {
        header: "Product Reviews and Ratings:",
        points: [
          "Users can leave reviews and ratings for products they have purchased.",
          "Ratings and reviews help other users make informed buying decisions.",
        ],
      },
      {
        header: "Real-Time Chat (Socket.io):",
        points: [
          "Real-time chat functionality allows users to communicate with vendors with live active status.",
          "Instant messaging for order inquiries, support, and questions.",
        ],
      },
      {
        header: "Seller Dashboard:",
        points: [
          "Sellers have access to a dashboard to manage their products, orders, discount coupons and customer interactions.",
        ],
      },
      {
        header: "Search and Filters:",
        points: [
          "Users can search for products using keywords and select products.",
          "Advanced search capabilities for a seamless shopping experience.",
        ],
      },
      {
        header: "Responsive Design:",
        points: [
          "The platform is responsive and accessible from various devices, including desktops, tablets, and mobile phones.",
        ],
      },
    ],
    TechStack: {
      FrontEnd:
        "React.js, Redux (for state management), HTML, TailwindCss, JavaScript",
      Backend: " Node.js, Express.js, MongoDB (for data storage)",
      RealTimeCommunication: "Socket.io",
      PaymentGatewayIntegration: "Stripe or G-Pay",
      UserAuthentication: "JWT (JSON Web Tokens)",
      UIDesign:
        "Used modern design principles and frameworks like Material UI, TailwindCSS,  React icons or react_packages.",
    },
    imgUrl:
      "https://i.pinimg.com/564x/97/62/4e/97624e5f54a0ad5a2715351effc17ec0.jpg",
    videoUrl: Eshop,
    duration: "6 Months",
    deployed: true,
    url: "https://krishnapant13.github.io/OEFE",
    githubFE: "https://github.com/krishnapant13/OEFE",
    githubBE: "https://github.com/krishnapant13/OEBE",
  },
  {
    name: "Weather App",
    title: "Check different weather worldwide",
    tagName: "Deployed",
    description:
      "The Multi-Vendor E-Commerce Platform is a comprehensive web application designed to facilitate online shopping and sales between multiple vendors and customers. This platform allows users to browse, search for, purchase, and review products from various sellers. It includes user authentication, real-time communication using Socket.io, order tracking, online payment processing, and more.",
    Features: [
      {
        header: "Keyword Search",
        points: [
          "Users can search city name to get the temprature in celsius.",
        ],
      },
      {
        header: "Additional checks",
        points: [
          "User gets live data of Temperature, Humidity, Visibility in kilometers and wind speed.",
        ],
      },
      {
        header: "Animations",
        points: [
          "App shows various gifs and icons according to current weather conditions of searched city.",
        ],
      },
    ],
    TechStack: {
      FrontEnd:
        "React.js, Redux (for state management), HTML, TailwindCss, JavaScript",
      API: "Weather API",
      UIDesign:
        "Used modern design principles and frameworks like Material UI, TailwindCSS,  React icons or react_packages.",
    },
    imgUrl:
      "https://i.pinimg.com/564x/2d/21/ad/2d21ad475d580b1cde1075bc43c3b9f4.jpg",
    videoUrl: CarouselVid,
    duration: "3 Days",
    deployed: true,
    url: "https://krishnapant13.github.io/weather-app",
    githubFE: "https://github.com/krishnapant13/weather-app",
  },

  {
    name: "CollegeConnect",
    title: "Bringing Campus Resources to Your Fingertips",
    description:
      "Welcome to CollegeConnect, your ultimate companion for academic success and campus life! This powerful app is tailor-made for college students, providing a seamless way to access essential resources, connect with your college community, and excel in your studies. Say goodbye to the hassle of hunting for notes, searching for faculty information, or navigating campus branches - CollegeConnect has you covered.",
    Features: [
      {
        header: "Course Notes Repository",
        points: [
          "Allow students to access and download course notes, lecture slides, and study materials uploaded by professors and peers.",
        ],
      },
      {
        header: "Faculty Directory",
        points: [
          "Provide a searchable database of faculty and staff members, including their contact information, office hours, and areas of expertise.",
        ],
      },
      {
        header: "Announcements and Notifications",
        points: [
          "Send push notifications for important announcements, class cancellations, deadlines, and campus news.",
        ],
      },
      {
        header: "Secure Login and Profile Management",
        points: [
          "Implement a secure authentication system and give students the ability to manage their profiles and privacy settings.",
        ],
      },
      {
        header: "Video Lecture Playback",
        points: [
          "Access and view video lectures and educational content directly within the app, offering a multimedia learning experience uploaded by the faculties.",
        ],
      },
    ],
    TechStack: {
      UIDesign:
        "XML:  Designed the user interface (UI) using XML, ensuring a user-friendly and visually appealing using different layouts.",
      Database:
        "To facilitate data storage and retrieval, I integrated Firebase, Google's cloud-based platform. Firebase provided real-time database capabilities, secure user authentication, and efficient cloud storage solutions.",
      MappingAndLocation:
        "The app seamlessly incorporated the Google Maps API, enabling users to access mapping, geolocation, and route-planning functionalities. This feature greatly enhanced the app's usability and convenience.",
    },
    imgUrl:
      "https://github.com/krishnapant13/collegeApp/blob/master/app/src/main/res/drawable/admin.jpg?raw=true",
    videoUrl: CarouselVid,
    duration: "3 months (Apr-jun 2021)",
    deployed: false,
    android: true,
    url: "https://github.com/krishnapant13/collegeApp.git",
    githubFE: "https://github.com/krishnapant13/collegeApp.git",
  },
  {
    name: "VaccinationFinder",
    title: "Find Vaccination centers nearby",
    description:
      "VaccinationFinder is your reliable companion in the fight against COVID-19. This Android app, built with Kotlin and powered by Firebase , simplifies the process of finding nearby vaccination centers. It offers a user-friendly interface and real-time data to help users quickly locate vaccination sites.",
    Features: [
      {
        header: "Vaccination Center Locator:",
        points: [
          "Displays vaccination centers, making it easy for users to find the nearest one.",
        ],
      },
      {
        header: "Real-time Information:",
        points: [
          "Provide real-time details for each vaccination center, including center name, location (address and map), operating hours.",
        ],
      },
      {
        header: "Vaccine Availability",
        points: [
          "Show the availability status of different vaccines at each center, including the vaccine name.",
        ],
      },
      {
        header: "Pricing Information",
        points: [
          "Display the cost details for vaccines, indicating whether they are available for free or if there are associated charges.",
        ],
      },
      {
        header: "Age Limit and Eligibility",
        points: [
          "Specify age limits and eligibility criteria for each vaccination center, ensuring users meet the requirements.",
        ],
      },
    ],
    TechStack: {
      UIDesign:
        "XML:  Designed the user interface (UI) using XML, ensuring a user-friendly and visually appealing using different layouts.",
      API: "Used Cowin API.",
    },
    imgUrl:
      "https://i.pinimg.com/736x/0e/76/8b/0e768bcd6ab51d8c31d9d6f83a37be23.jpg",
    videoUrl: CarouselVid,
    duration: "3 days (Jul 2021)",
    deployed: false,
    android: true,
    url: "https://github.com/krishnapant13/FindVaccinationCenter",
    githubFE: "https://github.com/krishnapant13/FindVaccinationCenter",
  },
];

export default projects;
