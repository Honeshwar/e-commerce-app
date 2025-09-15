// React and hooks
import { useEffect } from "react";

// React Router
import { useLocation } from "react-router";

// Notifications
import { toast } from "react-toastify";

// Components
import {
  Slider,
  FeaturedProducts,
  Categories,
  Contact,
} from "../../components";

// Styles
import "./Home.scss";

function Home() {
  const location = useLocation(); //entire path after DN

  useEffect(() => {
    const params = new URLSearchParams(location.search); //,search search query params as string, convert as key:value
    // Accessing a specific query parameter
    const myParam = params.get("success"); //key=success, value=true/false
    if (myParam) {
      console.log(myParam);
      myParam === "true"
        ? toast.success("Payment Successfully Happen!", {
            position: "top-center",
            progress: 1,
          })
        : toast.error("Payment Failed!", { position: "top-center" });
    }
  }, [location.search]);

  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type={"featured"} />
      <Categories />
      <FeaturedProducts type={"trending"} />
      <Contact />
    </div>
  );
}

export default Home;
