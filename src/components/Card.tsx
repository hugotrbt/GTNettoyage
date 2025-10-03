interface CardProps {
  title: string;
  description: string;
  source: string;
  alt: string;
}

const Card = ({ title, description, source, alt }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
      <figure className="h-48 overflow-hidden">
        <img
          src={source}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="p-6">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-3">
          {title}
        </h2>
        <p className="text-gray-600 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
