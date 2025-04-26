import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { FeaturedBookmarks } from "../overview/page";
import NextButton from "@/components/Shared/NextButton";

const jobResources = [
  {
    name: "Devex",
    url: "https://www.devex.com/",
  },
  {
    name: "Reliefweb",
    url: "https://reliefweb.int/",
  },
  {
    name: "UNJobs",
    url: "https://unjobs.org/",
  },
  {
    name: "NGO Job Board",
    url: "https://ngojobboard.org/",
  },
  {
    name: "Public Health Jobs",
    url: "https://publichealthjobs.aspph.org/",
  },
  {
    name: "Development Aid",
    url: "https://www.developmentaid.org/",
  },
  {
    name: "UN Job Net",
    url: "https://www.unjobnet.org/",
  },
  {
    name: "Glassdoor",
    url: "https://www.glassdoor.com/index.htm",
  },
  {
    name: "Global Jobs Atlas",
    url: "https://globaljobsatlas.com/",
  },
  {
    name: "Global Health Jobs",
    url: "https://globalhealthjobs.com/",
  },
  {
    name: "Flex Jobs",
    url: "https://www.flexjobs.com/",
  },
  {
    name: "BD Jobs",
    url: "https://bdjobs.com/",
  },
];

const KeyPublicHealthOrganizations = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="Job Sites" />

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <p className="text-[17px]">
                This section features leading job platforms that regularly post
                public health and development roles across global contexts.
                These sites provide up-to-date listings of impactful career
                opportunities. Creating an account and uploading your CV on
                those platforms can increase your visibility and help you
                connect with positions that align with your skills and
                aspirations.
              </p>
              <OrganizationList title="" organizations={jobResources} />
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>
      <NextButton
        href="/bookmarks/scholarship-and-fellowship-opportunities"
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
}

// OrganizationList component to display a list of organizations
const OrganizationList: React.FC<OrganizationListProps> = ({
  title,
  organizations,
}) => {
  return (
    <div className="my-4 bg-blue-100 p-4 rounded-lg">
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
