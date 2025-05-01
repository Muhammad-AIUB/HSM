import PersonalJourney from "./PersonalJourney";
import QuickFacts from "./PersonalLife";
import TravelTrajectory from "./TravelTrajectory";

const ProfessionalJourney = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-16">
      <h3 className="text-2xl md:text-2xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00] px-16">
        Life Beyond Profession
      </h3>

      {/* content */}
      <div>
        <p className="text-[18px] text-[#001844] font-semibold text-center pt-4 max-w-2xl mx-auto px-16">
          Today, I am proud to embrace multiple roles in my life: Public Health
          Activist, Researcher, Writer, Organizer, Traveller, Explorer, Son, Husband, and
          Father. Each of these roles shapes me better. And I am grateful and
          happy to carry them all.
        </p>
      </div>

      <PersonalJourney />
      <QuickFacts />
      <TravelTrajectory />
    </div>
  );
};

export default ProfessionalJourney;
