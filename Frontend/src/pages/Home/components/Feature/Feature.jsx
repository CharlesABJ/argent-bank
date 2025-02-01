function Feature({ dataFeature }) {
  return (
    <div className="Feature">
      <div className="feature-icon">
        <img src={dataFeature.icon} alt={dataFeature.title} />
      </div>
      <h3 className="feature-title">{dataFeature.title}</h3>
      <p className="feature-description">{dataFeature.description}</p>
    </div>
  );
}

export default Feature;
