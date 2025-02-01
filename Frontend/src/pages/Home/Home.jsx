import Feature from "./components/Feature/Feature";
import Hero from "./components/Hero/Hero";

function Home() {
  // Datas of Hero
  const dataHero = {
    banner: "./img/bank-tree.jpeg",
    bannerTitle: "Argent Bank",
    title: ["No fees.", "No minimum deposit.", "High interest rates."],
    description: "Open a savings account with Argent Bank today!",
  };

  // Datas of Features
  const dataFeature = [
    {
      featureId: 1,
      icon: "./img/icon-chat.png",
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      featureId: 2,
      icon: "./img/icon-money.png",
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      featureId: 3,
      icon: "./img/icon-security.png",
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];
  return (
    <div className="Home">
      <Hero dataHero={dataHero} />
      <div className="features-zone">
        {dataFeature.map((feature) => (
          <Feature key={feature.featureId} dataFeature={feature} />
        ))}
      </div>
    </div>
  );
}

export default Home;
