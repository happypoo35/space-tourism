import { useNavigate } from "react-router-dom";
import useBool from "hooks/useBool";

const Home = () => {
  const isLoaded = useBool();
  const navigate = useNavigate();

  return (
    <main className="main-home pad">
      <picture className="bg-img">
        <source
          srcSet="./assets/home/background-home-desktop.jpg"
          media="(min-width: 1110px)"
        />
        <source
          srcSet="./assets/home/background-home-tablet.jpg"
          media="(min-width: 375px)"
        />
        <img
          src="./assets/home/background-home-mobile.jpg"
          alt="background-img"
          style={isLoaded.value ? {} : { display: "none" }}
          onLoad={isLoaded.on}
        />
      </picture>
      <div className="container">
        <div className="text">
          <h1 className="h5">
            so you want to travel to <span className="h1">space</span>
          </h1>
          <p>
            Let’s face it: if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button
          className="btn-circle btn-cta h4"
          onClick={() => navigate("/destination")}
        >
          explore
        </button>
      </div>
    </main>
  );
};

export default Home;
