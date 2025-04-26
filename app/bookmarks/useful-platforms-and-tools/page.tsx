import { cn } from "@/lib/utils";
import { FeaturedBookmarks } from "../overview/page";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import NextButton from "@/components/Shared/NextButton";

const infographicsResources = {
  infographicSites: [
    {
      name: "Data Viz Catalogue",
      url: "https://datavizcatalogue.com/",
    },
    {
      name: "The Lancet Infographics",
      url: "https://www.thelancet.com/infographics-do",
    },
    {
      name: "HRP50 – UN SRHR Infographics",
      url: "https://hrp50.srhr.org/",
    },
    {
      name: "APHA Infographics",
      url: "https://www.apha.org/news-and-media/multimedia/infographics",
    },
    {
      name: "CDC NCHS Infographics",
      url: "https://www.cdc.gov/nchs/hus/resources/infographics.htm",
    },
    {
      name: "World Bank Data Visualization",
      url: "https://www.worldbank.org/en/programs/icp/brief/videos",
    },
    {
      name: "Canada Health Data Lab",
      url: "https://health-infobase.canada.ca/datalab/visualize.html",
    },
    {
      name: "IAPSM Infographics",
      url: "https://iapsm.org/iapsm-infographics.html",
    },
  ],
  visualizationTools: [
    {
      name: "Datawrapper",
      url: "https://www.datawrapper.de/",
    },
    {
      name: "Infograpia",
      url: "https://infograpia.com/",
    },
    {
      name: "Piktochart",
      url: "https://piktochart.com/?nab=0",
    },
    {
      name: "Squarespace",
      url: "https://www.squarespace.com/",
    },
    {
      name: "Canva",
      url: "https://www.canva.com/",
    },
    {
      name: "Infogram",
      url: "https://infogram.com/",
    },
    {
      name: "FactSet",
      url: "https://www.factset.com/",
    },
    {
      name: "The Analyst Academy",
      url: "https://www.theanalystacademy.com/",
    },
  ],
};

const CommentariesAndBlogs = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="Useful Platforms and Tools" />

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-8 pb-16">
          <p className="text-[17px]">
            This section introduces platforms and tools designed to enhance your
            professional skills. It features valuable resources for tasks such
            as data visualization, infographics, and analysis, helping to boost
            productivity and improve information presentation. Exploring and
            leveraging these tools can enrich your professional work and
            strengthen your proficiency in their application.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <OrganizationList
                title="Infographics and Data Visualization Site"
                organizations={infographicsResources.infographicSites}
                className="bg-green-100 p-4 rounded-lg"
              />
              <OrganizationList
                title="Infographics and Data Visualization Tools "
                organizations={infographicsResources.visualizationTools}
                className="bg-blue-100 p-4 rounded-lg"
              />
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>
      <NextButton
        href="/bookmarks/data-and-respiratory-of-organizations"
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
    <div className={cn("my-4", className)}>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">{title}</h2>
      {/* <p className="mb-4">{description}</p> */}
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
