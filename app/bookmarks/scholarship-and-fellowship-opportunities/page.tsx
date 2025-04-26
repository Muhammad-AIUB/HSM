import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { FeaturedBookmarks } from "../overview/page";
import NextButton from "@/components/Shared/NextButton";

const scholarships = [
  {
    name: "Chevening Scholarships",
    url: "https://www.chevening.org/",
  },
  {
    name: "Commonwealth Scholarships (CSC UK)",
    url: "https://cscuk.fcdo.gov.uk/",
  },
  {
    name: "World Bank Scholarships (JJ/WBGSP)",
    url: "https://www.worldbank.org/en/programs/scholarships/jj-wbgsp",
  },
  {
    name: "ADB Japan Scholarship Program",
    url: "https://www.adb.org/work-with-us/careers/japan-scholarship-program/institutions",
  },
  {
    name: "IMF Scholarships",
    url: "https://www.imf.org/external/np/ins/english/scholar.htm",
  },
  {
    name: "Swedish Institute Scholarships",
    url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/",
  },
  {
    name: "Erasmus Mundus Scholarships",
    url: "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en",
  },
  {
    name: "DAAD Scholarships (Germany)",
    url: "https://www.daad.de/en/studying-in-germany/scholarships/daad-scholarships/",
  },
  {
    name: "Orange Knowledge Programme (Netherlands)",
    url: "https://www.nuffic.nl/en/subjects/orange-knowledge-programme/individual-scholarships-orange-knowledge-programme",
  },
  {
    name: "Rhodes Scholarship (Oxford)",
    url: "https://www.rhodeshouse.ox.ac.uk/scholarships/the-rhodes-scholarship/",
  },
  {
    name: "The Gates Scholarship",
    url: "https://www.thegatesscholarship.org/",
  },
  {
    name: "Aga Khan International Scholarships",
    url: "https://the.akdn/en/what-we-do/developing-human-capacity/education/international-scholarships",
  },
  {
    name: "UNICAF Scholarships",
    url: "https://www.unicaf.org/",
  },
];

const fellowshipsAndInternships = [
  {
    name: "World Bank Internships & Programs",
    url: "https://www.worldbank.org/en/about/careers/programs-and-internships",
  },
  {
    name: "Yale World Fellows Program",
    url: "https://worldfellows.yale.edu/the-program/application/",
  },
  {
    name: "UNICEF Junior Professional Officer Programme",
    url: "https://www.unicef.org/careers/junior-professional-officer-programme",
  },
  {
    name: "ThinkWell SamyastuMo Fellowship",
    url: "https://thinkwell.institute/samyastumo/",
  },
  {
    name: "Study of the U.S. Institutes (SUSI)",
    url: "https://exchanges.state.gov/non-us/program/study-us-institutes",
  },
  {
    name: "ODI Fellowship Scheme",
    url: "https://odi.org/en/fellowship-scheme/",
  },
  {
    name: "Aga Khan Development Network Scholarships",
    url: "https://the.akdn/en/what-we-do/developing-human-capacity/education/international-scholarships",
  },
  {
    name: "Humphrey Fellowship Program",
    url: "https://www.humphreyfellowship.org/",
  },
  {
    name: "Emerging Voices for Global Health (EV4GH)",
    url: "https://ev4gh.net/",
  },
];

const KeyPublicHealthOrganizations = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="Scholarship and Fellowship Opportunities" />

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <div className="w-full text-justify">
                <p className="text-[17px]">
                  The site offers a comprehensive list of reputed scholarships
                  provided by various countries and authorities for pursuing
                  higher education abroad.
                </p>
              </div>
              <OrganizationList
                title="Scholarships"
                organizations={scholarships}
                className="my-4 bg-blue-100 p-4 rounded-lg"
              />
              <OrganizationList
                title="Fellowships & Internships"
                organizations={fellowshipsAndInternships}
                className="my-4 bg-green-100 p-4 rounded-lg"
              />
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>
      <NextButton
        href="/bookmarks/newsletter"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default KeyPublicHealthOrganizations;

interface Organization {
  name: string;
  url: string;
}

// Define the props for the OrganizationList component
interface OrganizationListProps {
  title: string;
  organizations: Organization[];
  className?: string;
}

// OrganizationList component to display a list of organizations
const OrganizationList: React.FC<OrganizationListProps> = ({
  title,
  organizations,
  className,
}) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {organizations.map((org, index) => (
          <div
            key={index}
            className="organization-card border border-gray-300 rounded-lg p-4 shadow-sm transition-all flex flex-col justify-between bg-white"
          >
            <h3 className="text-lg font-semibold text-gray-800">{org.name}</h3>
            <a
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 inline-block hover:underline mt-auto"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
