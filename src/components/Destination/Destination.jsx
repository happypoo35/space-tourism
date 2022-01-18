import useSlides from "hooks/useSlides";

const Destination = () => {
  const { data, slide, set } = useSlides("destinations");

  return (
    <main className="main-destination pad">
      <picture className="bg-img">
        <source
          srcSet="./assets/destination/background-destination-desktop.jpg"
          media="(min-width: 768px)"
        />
        <source
          srcSet="./assets/destination/background-destination-tablet.jpg"
          media="(min-width: 375px)"
        />
        <img
          src="./assets/destination/background-destination-mobile.jpg"
          alt="background-img"
        />
      </picture>
      <div className="container inner-layout">
        <header className="page-header h5">
          <strong>01</strong>
          <h1 className="h5">pick your destination</h1>
        </header>
        <section className="page-main" aria-label="destination page content">
          <picture className="page-img" key={slide.name}>
            <source type="image/webp" srcSet={slide.images.webp} />
            <img src={slide.images.png} alt={`img-${slide.name}`} />
          </picture>
          <section
            className="page-content"
            aria-label={`destination - ${slide.name}`}
          >
            <nav className="page-nav">
              {data.map((el, id) => (
                <button
                  className={`${
                    el.name === slide.name
                      ? "btn-nav nav-text active"
                      : "btn-nav nav-text"
                  }`}
                  onClick={() => set(id)}
                  key={id}
                >
                  {el.name}
                </button>
              ))}
            </nav>
            <div className="page-text">
              <h2 className="h2">{slide.name}</h2>
              <p>{slide.description}</p>
            </div>
            <div className="stats">
              <div className="stats-item">
                <span className="sh2">avg. distance</span>
                <h3 className="sh1">{slide.distance}</h3>
              </div>
              <div className="stats-item">
                <span className="sh2">est. travel time</span>
                <h3 className="sh1">{slide.travel}</h3>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Destination;
