import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { FeaturedBookmarks } from "../overview/page";
import NextButton from "@/components/Shared/NextButton";

const organizations = [
  {
    name: "World Health Statistics",
    url: "https://www.who.int/data/gho/publications/world-health-statistics",
  },
  {
    name: "Universal Health Coverage",
    url: "https://www.who.int/data/monitoring-universal-health-coverage",
  },
  {
    name: "The Global Health Observatory",
    url: "https://www.who.int/data/gho/publications",
  },
  {
    name: "Global Burden of Disease",
    url: "https://www.healthdata.org/research-analysis/gbd",
  },
  {
    name: "World Bank on Health",
    url: "https://www.worldbank.org/en/topic/health",
  },
  {
    name: "UN on World Population",
    url: "https://population.un.org/wpp/",
  },
  {
    name: "Publications of UNICEF",
    url: "https://www.unicef.org/reports",
  },
  {
    name: "Publications of UNFPA",
    url: "https://www.unfpa.org/publications",
  },
  {
    name: "Palladium on Global Health",
    url: "https://thepalladiumgroup.com/areas-expertise/health",
  },
  {
    name: "ThinkWell Global on Global Health System",
    url: "https://thinkwell.global/publications/",
  },
  {
    name: "Abt Global on Health",
    url: "https://www.abtglobal.com/search?search_api_fulltext=&type%5Bpublication%5D=publication&page=%2C%2C%2C%2C%2C8",
  },
  {
    name: "IMF on GDP",
    url: "https://www.imf.org/external/datamapper/NGDP_RPCH@WEO/OEMDC/ADVEC/WEOWORLD",
  },
];

const ReportsAndPublications = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="Reports and Publications" />

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              {/* Description Section */}
              <div className="w-full text-justify">
                <p className="text-base leading-7 text-[17px]">
                  This section highlights research reports and issue-based
                  publications from leading public health organizations. Explore
                  these trusted sources to access their latest evidence,
                  insights, and analyses on pressing health challenges and
                  innovations.
                </p>
              </div>

              <OrganizationList organizations={organizations} />
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>
      <NextButton
        href="/bookmarks/journals"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default ReportsAndPublications;

interface Organization {
  name: string;
  url: string;
}

// Define the props for the OrganizationList component
interface OrganizationListProps {
  organizations: Organization[];
}

// OrganizationList component to display a list of organizations
const OrganizationList: React.FC<OrganizationListProps> = ({
  organizations,
}) => {
  return (
    <div className="my-4 bg-blue-100 p-4 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {organizations.map((org, index) => (
          <div
            key={index}
            className="organization-card border border-gray-300 rounded-lg p-4 shadow-sm transition-all bg-white"
          >
            <h3 className="text-lg font-semibold text-gray-800">{org.name}</h3>
            <a
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block hover:underline"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
