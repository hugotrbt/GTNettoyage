import Card from "./Card.tsx";

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Nos services
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions de nettoyage adaptées à tous vos besoins
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <Card
              title="Entretien parties communes"
              description="Nettoyage régulier des halls et intervention en cas de mobilier défectueux"
              source="https://www.bouygues-immobilier.com/sites/default/files/2020-01/parties-communes.jpg"
              alt="parties communes immeubles"
            />
            <Card
              title="Entretien bureaux"
              description="Nettoyage des espaces de travail et remplacement du mobilier si nécessaire"
              source="https://www.officelovin.com/wp-content/uploads/2018/03/loreal-office-paris-14.jpg"
              alt="bureaux"
            />
            <Card
              title="Sortie de poubelles"
              description="Gestion des ordures ménagères à votre place"
              source="https://www.landalouse75.com/wp-content/uploads/sites/9866/2021/06/poubelles.jpg"
              alt="poubelles"
            />
            <Card
              title="Nettoyage de parking"
              description="Des emplacements propres et entretenus comme au premier jour"
              source="https://www.laba-architectes.fr/wp-content/uploads/2022/06/IMG_4740_retouche-scaled.jpg"
              alt="parking"
            />
            <Card
              title="Nettoyage appartements"
              description="Un intérieur sain et agréable pour votre confort"
              source="https://www.book-a-flat.com/magazine/wp-content/uploads/2019/04/salon-appartement-haussmannien-location-meublee-parisienne.jpg"
              alt="appartement"
            />
            <Card
              title="Nettoyage vitrerie"
              description="Des vitres impeccables pour une luminosité optimale"
              source="https://i.pinimg.com/originals/91/ce/43/91ce43a20e8db8a2880c427ab10e284c.jpg"
              alt="vitre"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
