import logo from "../assets/logo.jpg";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            className="h-12 w-auto object-contain"
            alt="Logo GTNettoyage"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-blue-900 font-medium"
          >
            A propos
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-blue-900 font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-blue-900 font-medium"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
