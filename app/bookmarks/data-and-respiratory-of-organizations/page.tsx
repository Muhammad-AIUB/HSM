import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { FeaturedBookmarks } from "../overview/page";
import NextButton from "@/components/Shared/NextButton";

const organizations = [
  {
    name: "WHO Global Health Data",
    url: "https://data.who.int/",
  },
  {
    name: "WHO Health Topics",
    url: "https://www.who.int/health-topics/",
  },
  {
    name: "UNICEF Data",
    url: "https://data.unicef.org/",
  },
  {
    name: "World Bank Open Data",
    url: "https://data.worldbank.org/",
  },
  {
    name: "UNFPA Data",
    url: "https://www.unfpa.org/data",
  },
  {
    name: "CDC Public Health Data",
    url: "https://data.cdc.gov/",
  },
];

const CommentariesAndBlogs = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="Data and Respiratory of Organizations" />

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <p className="text-[17px]">
                This section features up-to-date data and insights curated from
                reputable global organizations. These trusted sources provide
                access to the latest statistics, datasets, and analytical
                reports—supporting deeper understanding, informed
                decision-making, and the development of high-quality research
                and reference materials.
              </p>
              <OrganizationList organizations={organizations} />
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>

      <NextButton
        href="/bookmarks/data-centric-organizations-and-platforms"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default CommentariesAndBlogs;

interface Organization {
  name: string;
  url: string;
}

// Define the props for the OrganizationList component
interface OrganizationListProps {
  organizations: Organization[];
  //   description: string;
  //   organizations: Organization[];
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
