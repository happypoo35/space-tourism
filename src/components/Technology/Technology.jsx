import useSlides from "hooks/useSlides";
import useWindowSize from "hooks/useWindowSize";

const Technology = () => {
  const { data, slide, set } = useSlides("technology");
  const { laptop } = useWindowSize();

  return (
    <main className="main-technology pad">
      <picture className="bg-img">
        <source
          srcSet="./assets/technology/background-technology-desktop.jpg"
          media="(min-width: 768px)"
        />
        <source
          srcSet="./assets/technology/background-technology-tablet.jpg"
          media="(min-width: 375px)"
        />
        <img
          src="./assets/technology/background-technology-mobile.jpg"
          alt="background-img"
        />
      </picture>
      <div className="container inner-layout">
        <header className="page-header h5">
          <strong>03</strong>
          <h1 className="h5">space launch 101</h1>
        </header>
        <section className="page-main" aria-label="technology page content">
          <div className="page-content">
            <div className="slide-btns">
              {data.map((el, id) => (
                <button
                  className={`${
                    el.name === slide.name
                      ? "btn-circle btn-num h4 active"
                      : "btn-circle btn-num h4"
                  }`}
                  key={id}
                  onClick={() => set(id)}
                >
                  {id + 1}
                </button>
              ))}
            </div>
            <div className="page-text">
              <h3 className="nav-text">the terminology...</h3>
              <h2 className="h3">{slide.name}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
          <picture className="page-img" key={slide.name}>
            <img
              src={laptop ? slide.images.landscape : slide.images.portrait}
              alt={`${slide.name}-img`}
            />
          </picture>
        </section>
      </div>
    </main>
  );
};

export default Technology;
