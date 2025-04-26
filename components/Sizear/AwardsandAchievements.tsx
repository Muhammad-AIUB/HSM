import React from "react";
import AcademicAwards from "./AcademicAwards";
import LiteratureAward from "./LiteratureAward";
import ConferenceAwards from "./ConferancePresentation";
import BestOrganizerAward from "./BestOrganizerAward";

const AwardsandAchievements = () => {
  return (
    <div className="bg-[#E2E4F0]">
      <div className="max-w-screen-xl mx-auto  pt-16">
        <h3 className="text-2xl md:text-2xl px-16 font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Awards and Achievements
        </h3>

        <div className="px-16">
          <p className="text-[17px] leading-relaxed text-justify pt-4">
            Throughout my extensive academic and professional journey, I have
            been honored with various recognitions for my work. While these
            achievements may appear modest, each one represents a significant
            milestone earned through dedication and effort. Below, you can view
            highlights of these accomplishments and awards.
          </p>
        </div>

        <AcademicAwards />

        <LiteratureAward />

        <ConferenceAwards />

        <BestOrganizerAward />
      </div>
    </div>
  );
};

export default AwardsandAchievements;
