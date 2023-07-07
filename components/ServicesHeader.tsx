const ServicesHeader: React.FC = () => {
  return (
    <header className="mb-4 p-6">
      <div className="bg-emerald-50 px-4 py-6 rounded shadow-sm">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Flying and Travel
          </span>{" "}
          Services.
        </h1>

        <p className="text-lg text-gray-500 mt-2">
          We offer a range of services to help you with your travels, from visas
          to flight tickets and more.
        </p>
      </div>
    </header>
  );
};

export default ServicesHeader;
