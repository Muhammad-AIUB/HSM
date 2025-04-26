const DoYouKnow = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-4 py-12 pb-24">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D8CBB]">
          Do You Know?
        </h1>
        <p className="text-lg md:text-xl  mt-4 text-black">
          Discover fascinating public health milestones, historical
          breakthroughs, and eye-opening facts.
        </p>
      </div>

      {/* Information Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 - Public Health Milestones */}
        <div className="bg-blue-100 shadow-lg rounded-lg p-6 border-l-4 border-green-600 flex flex-col justify-between">
          <a
            href="https://www.who.int/campaigns/75-years-of-improving-public-health/milestones#year-2015"
            className="inline-block text-blue-600 hover:text-[#F18A00]"
            target="_blank"
          >
            <h2 className="text-xl font-bold  mb-3 text-[#001844]">
              📅 Public Health Milestones through the Years
            </h2>
            <p className="text-black">
              A journey through the key public health achievements that have
              shaped the world.
            </p>

            <div className="mt-2 font-semibold">Explore →</div>
          </a>
        </div>

        {/* Card 2 - World Bank Funding */}
        <div className="bg-red-100 shadow-lg rounded-lg p-6 border-l-4 border-blue-600  flex flex-col justify-between">
          <a
            href="https://www.bmj.com/world-bank"
            className=" inline-block text-blue-600 hover:text-[#F18A00]"
            target="_blank"
          >
            <h2 className="text-xl font-bold text-[#001844] mb-3">
              💰 World Bank Funding in Health Sector
            </h2>
            <p className="text-black">
              A look at how the World Bank is investing in global health,
              nutrition, and population.
            </p>

            <div className="mt-2 font-semibold">Explore →</div>
          </a>
        </div>

        {/* Card 3 - History of Vaccination */}
        <div className="bg-teal-100 shadow-lg rounded-lg p-6 border-l-4 border-orange-600  flex flex-col justify-between">
          <a
            href="https://historyofvaccines.org/"
            className="inline-block text-blue-600 hover:text-[#F18A00]"
            target="_blank"
          >
            <h2 className="text-xl font-bold text-[#001844] mb-3">
              💉 History of Vaccination
            </h2>
            <p className="text-black">
              Explore how vaccines have transformed public health and eradicated
              deadly diseases.
            </p>

            <div className="mt-2 font-semibold">Explore →</div>
          </a>
        </div>

        {/* Card 4 - Global Health Facts */}
        <div className="bg-indigo-100 shadow-lg rounded-lg p-6 border-l-4 border-purple-600  flex flex-col justify-between">
          <a
            href="https://www.weforum.org/stories/2020/09/global-health-facts-un-sdgs/"
            className="inline-block text-blue-600 hover:text-[#F18A00]"
            target="_blank"
          >
            <h2 className="text-xl font-bold text-[#001844] mb-3">
              🌍 13 Eye-Opening Global Health Facts
            </h2>
            <p className="text-black">
              Discover crucial statistics on the state of health worldwide.
            </p>

            <div className="mt-2 font-semibold">Explore →</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DoYouKnow;
