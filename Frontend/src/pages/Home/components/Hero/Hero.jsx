function Hero({ dataHero }) {
  return (
    <div className="Hero">
      <img
        className="hero-banner"
        src={dataHero.banner}
        alt={dataHero.bannerTitle}
      />
      <div className="hero-content">
        <h2 className="hero-title">
          {dataHero.title?.map((title, index) => (
            <span key={index}>{title}</span>
          ))}
        </h2>
        <p className="hero-description">{dataHero.description}</p>
      </div>
    </div>
  );
}

export default Hero;
