const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              GTNettoyage
            </h3>
            <p className="text-sm leading-relaxed">
              Entretien d'immeubles et bureaux depuis 1992.
              <br />
              Paris et proche banlieue.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>📧 contact@gtnettoyage.fr</p>
              <p>📞 01 42 85 63 27</p>
              <p>📍 15 Avenue de la République, 75011 Paris</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>• Entretien parties communes et bureaux</li>
              <li>• Sortie de poubelles</li>
              <li>• Nettoyage parking, appartements et vitrerie</li>
              <li>
                • <strong>Devis gratuit</strong>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} GTNettoyage - SIRET : 123 456 789 00012 - Tous
            droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
