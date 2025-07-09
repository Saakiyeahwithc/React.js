import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./index.css";

const data = [
  {
    id: 1,
    name: " Pokhara",
    description:
      "A scenic lakeside city famous for Phewa Lake, mountain views of Annapurna and Machhapuchhre, and adventure activities like paragliding.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Pokhara_Phewa_Lake.jpg/800px-Pokhara_Phewa_Lake.jpg",
  },
  {
    id: 2,
    name: "Kathmandu",
    description:
      "The capital city of Nepal, rich in cultural heritage, ancient temples, and vibrant local life including UNESCO sites like Swayambhunath and Patan Durbar Square.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Swayambhunath_stupa%2C_Kathmandu%2C_Nepal.jpg/800px-Swayambhunath_stupa%2C_Kathmandu%2C_Nepal.jpg",
    price: 1000,
  },
  {
    id: 3,
    name: "Lumbini",
    description:
      "The birthplace of Lord Buddha and a spiritual site for millions of Buddhists, featuring monasteries and the Maya Devi Temple.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lumbini_Maya_Dev_Temple.jpg/800px-Lumbini_Maya_Dev_Temple.jpg",
    price: 500,
    tourIsUp: "Tour is up",
  },
  {
    id: 4,
    name: "Chitwan National Park",
    description:
      "A UNESCO World Heritage Site known for wildlife safaris and home to rhinos, tigers, and elephants in the subtropical lowlands of Nepal.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Rhino_looking_back.jpg/800px-Rhino_looking_back.jpg",
    price: 1500,
  },
  {
    id: 5,
    name: "Everest Base Camp",
    description:
      "A trekker's dream destination located in the Khumbu region, offering breathtaking views of the world's highest peak, Mount Everest.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Everest_Base_Camp%2C_Nepal.jpg/800px-Everest_Base_Camp%2C_Nepal.jpg",
    price: 2000,
  },
  {
    id: 6,
    name: "Bandipur",
    description:
      "A charming hilltop town with preserved Newari architecture and stunning views of the Himalayas, ideal for a quiet getaway.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bandipur_Nepal_Hillside_Town.jpg/800px-Bandipur_Nepal_Hillside_Town.jpg",
    price: 800,
  },
  {
    id: 7,
    name: "Rara Lake",
    description:
      "Nepal’s largest lake located in the remote Karnali region, known for its pristine blue waters and peaceful natural surroundings.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Rara_Lake_Nepal.jpg/800px-Rara_Lake_Nepal.jpg",
    price: 1200,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Tour destinations in Nepal</h1>
    </header>
  );
};

const Main = () => {
  return (
    <>
      <main className="main">
        <div className="renderLists">
          {data.map((tour) => (
            <Tour tourObj={tour} key={tour.id} />
          ))}
        </div>

        {/* <Tour
        name="Pokhara"
        description="A scenic lakeside city famous for Phewa Lake, mountain views of Annapurna and Machhapuchhre, and adventure activities like paragliding."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Pokhara_Phewa_Lake.jpg/800px-Pokhara_Phewa_Lake.jpg"
      />
      <Tour
        name="Kathmandu"
        description="The capital city of Nepal, rich in cultural heritage, ancient temples, and vibrant local life including UNESCO sites like Swayambhunath and Patan Durbar Square."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Swayambhunath_stupa%2C_Kathmandu%2C_Nepal.jpg/800px-Swayambhunath_stupa%2C_Kathmandu%2C_Nepal.jpg"
      />
      <Tour
        name="Lumbini"
        description="The birthplace of Lord Buddha and a spiritual site for millions of Buddhists, featuring monasteries and the Maya Devi Temple."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lumbini_Maya_Dev_Temple.jpg/800px-Lumbini_Maya_Dev_Temple.jpg"
      /> */}
      </main>
    </>
  );
};

const Tour = ({ tourObj }) => {
  // console.log(props);
  const { name, description, image, price, tourIsUp } = tourObj;
  return (
    <div className={`tourWrapper ${tourIsUp ? "grey" : ""}`}>
      <img src={image} alt="{name}" />
      <div className="tourBottom">
        <h2>{name}</h2>
        <p>{description}</p>
        <span>{tourIsUp ? tourIsUp : price}</span>
      </div>
    </div>
  );
};

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  // Define store hours at component level
  const openhours = 10;
  const closehours = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= openhours && hour < closehours;

  useEffect(() => {
    // Show alert only once when component mounts
    const currentHour = new Date().getHours();
    const storeIsOpen = currentHour >= openhours && currentHour < closehours;

    if (storeIsOpen) {
      alert("The store is open now.");
    } else {
      alert("The store is closed now.");
    }

    // Set up timer for timestamp updates
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, [openhours, closehours]);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closehours={closehours} />
      ) : (
        <div className="order">
          <p>The store is closed now.{currentTime}</p>
        </div>
      )}
    </footer>
  );
};

const Order = (props) => {
  return (
    <div className="order">
      <p>The store closes at {props.closehours}:00</p>
      <button>Order</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
