import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { FeaturedBookmarks } from "../overview/page";
import NextButton from "@/components/Shared/NextButton";

const organizations = [
  {
    name: "World Bank Blogs on Health",
    url: "https://blogs.worldbank.org/en/search?topics=Health",
  },
  {
    name: "World Health Organization Commentaries",
    url: "https://www.who.int/news-room/commentaries",
  },
  {
    name: "Center for Global Development – All Commentary",
    url: "https://www.cgdev.org/commentary-and-analysis",
  },
  {
    name: "Center for Global Development – Global Health Blogs",
    url: "https://www.cgdev.org/commentary-and-analysis?f%5B0%5D=commentary_content_type%3Ablog_post&f%5B1%5D=topics%3AGlobal%20Health&q=",
  },
  {
    name: "London School of Economics Blogs",
    url: "https://blogs.lse.ac.uk/",
  },
  {
    name: "Abt Global Blogs",
    url: "https://www.abtglobal.com/search?search_api_fulltext=&type[blog]=blog",
  },
  {
    name: "icddr,b Blog",
    url: "https://blog.icddrb.org/",
  },
  {
    name: "International Health Policies Network Blogs",
    url: "https://www.internationalhealthpolicies.org/blogs/",
  },
  {
    name: "Health Systems Matter - Blogs",
    url: "/blog",
  },
];

const CommentariesAndBlogs = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="Commentaries and Blogs" />

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-8 pb-16">
          <p className="text-[17px]">
            A series of blogs and newsletters maintained by organizations and
            dedicated professionals is available. This section provides a list
            of these valuable resources. By subscribing to your preferred sites,
            you can stay up-to-date with the latest updates and new resources.
            The list is extensive but not exhaustive and is updated
            periodically.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <OrganizationList organizations={organizations} />
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>
      <NextButton
        href="/bookmarks/interviews-sites"
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
