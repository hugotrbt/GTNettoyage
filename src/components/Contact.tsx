import { useState } from "react";

interface ContactForm {
  nom: string;
  email: string;
  telephone?: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données du formulaire:", formData);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600">Demandez votre devis gratuit</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nos coordonnées
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-blue-900 text-xl">📧</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">contact@gtnettoyage.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-blue-900 text-xl">📞</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Téléphone</h4>
                  <p className="text-gray-600">01 83 96 40 04</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-blue-900 text-xl">📍</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Adresse</h4>
                  <p className="text-gray-600">
                    36 AVENUE D’Italie TOUR RUBIS – BOITE 46
                    <br />
                    75013 Paris
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              action="https://formspree.io/f/xkgqbkqo"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
