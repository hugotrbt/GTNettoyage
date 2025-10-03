import Button from "./Button.tsx";
import camion from "../assets/camion.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${camion})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Entretien d'immeubles et bureaux
        </h1>
        <h2 className="text-xl text-gray-100 mb-8 drop-shadow-md">
          Des locaux impeccables, pour s'y sentir comme chez soi
        </h2>
        <Button onClick={scrollToContact}>Faire un devis</Button>
      </div>
    </section>
  );
};

export default Hero;
