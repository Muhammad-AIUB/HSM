"use client";

import { useState } from "react";
import Link from "next/link";

const BioOfSyedMasudAhmed = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        Bio of Prof. Dr. Syed Masud Ahmed
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Professor Syed Masud Ahmed is the Director of the Centre of
            Excellence for Health Systems and Universal Health Coverage
            (CoE-HS&amp;UHC), and advisor for the Health Systems module of the
            MPH programme at{" "}
            <Link
              href="https://bracjpgsph.org/uhc"
              className="underline font-medium"
            >
              BRAC JPGSPH
            </Link>
            . Professor Ahmed is a graduate of Dhaka Medical College (1978), a
            David E. Bell Fellow from Harvard Center for Population and
            Development Studies (1997), and a recipient of PhD in health systems
            from Karolinska Institutet University, Sweden, in 2005. His research
            interests include studying the impact of development interventions
            on the lives of the poor and the marginalized including the
            mechanisms of such impact; health and gender equity; human resources
            for health, close-to-community health workers and universal health
            coverage; health sector corruption; and AMR including epidemic
            preparation. <br />
            <br /> Under the CoE-HS&amp;UHC, he is leading research, advocacy
            and capacity-building activities relevant to Bangladesh’s journey
            towards UHC. He was a member of the Global Health Policy and Health
            Systems Research committee of the NWO/WOTRO, Netherlands (2009-’13),
            Health Workforce Advocacy Initiative (HWAI) Steering Committee
            (2014), and Joint Health Systems Research Committee of the Wellcome
            Trust (2013–2016). Dr Ahmed has published extensively in
            peer-reviewed Journals and authored book chapters, monographs and
            working papers. He was also a peer reviewer for many renowned public
            health journals such as Bulletin of WHO, World development, Social
            Science and Medicine, Health Policy and Planning, BMC Public Health,
            Tropical Medicine and International Health, Lancet Global/Regional
            Health etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfSyedMasudAhmed;
