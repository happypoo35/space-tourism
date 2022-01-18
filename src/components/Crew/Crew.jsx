import useSlides from "hooks/useSlides";

const Crew = () => {
  const { data, slide, set } = useSlides("crew");

  return (
    <main className="main-crew pad">
      <picture className="bg-img">
        <source
          srcSet="./assets/crew/background-crew-desktop.jpg"
          media="(min-width: 768px)"
        />
        <source
          srcSet="./assets/crew/background-crew-tablet.jpg"
          media="(min-width: 375px)"
        />
        <img
          src="./assets/crew/background-crew-mobile.jpg"
          alt="background-img"
        />
      </picture>
      <div className="container inner-layout">
        <header className="page-header h5">
          <strong>02</strong>
          <h1 className="h5">meet your crew</h1>
        </header>
        <section className="page-main" aria-label="crew page content">
          <div className="page-content">
            <h3 className="h4">{slide.role}</h3>
            <h2 className="h3">{slide.name}</h2>
            <p>{slide.bio}</p>
            <div className="bullets">
              {data.map((el, id) => (
                <div
                  className={`${
                    el.name === slide.name ? "bullet active" : "bullet"
                  }`}
                  key={id}
                  onClick={() => set(id)}
                ></div>
              ))}
            </div>
          </div>
          <picture className="page-img" key={slide.name}>
            <source type="image/webp" srcSet={slide.images.webp} />
            <img src={slide.images.png} alt={`img-${slide.name}`} />
          </picture>
        </section>
      </div>
    </main>
  );
};

export default Crew;
