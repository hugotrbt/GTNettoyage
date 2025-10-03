const About = () => {
  return (
    <section id="about" className="py-12 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Votre partenaire de confiance depuis 1992
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>GT Nettoyage</strong> s'occupe de l'entretien des
              immeubles et des bureaux depuis <strong>plus de 30 ans</strong>{" "}
              sur Paris et proche banlieue.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Notre expérience et notre savoir-faire nous permettent de vous
              proposer des solutions adaptées à vos besoins spécifiques.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Zone d'intervention
            </h3>
            <p className="text-gray-700 mb-2">📍 Paris</p>
            <p className="text-gray-700 mb-4">📍 Proche banlieue</p>
            <div className="text-sm text-gray-600">
              <p>⚡️Intervention rapide⚡️</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
