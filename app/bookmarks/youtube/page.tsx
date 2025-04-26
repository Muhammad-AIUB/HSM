import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { FeaturedBookmarks } from "../overview/page";
import NextButton from "@/components/Shared/NextButton";

const youtubeChannels = [
  {
    name: "WHO (World Health Organization)",
    url: "https://www.youtube.com/c/who",
  },
  {
    name: "CDC (Centers for Disease Control and Prevention)",
    url: "https://www.youtube.com/c/CDC",
  },
  {
    name: "UNICEF",
    url: "https://www.youtube.com/c/UNICEF",
  },
  {
    name: "American Public Health Association (APHA)",
    url: "https://www.youtube.com/aphadc",
  },
  {
    name: "World Bank",
    url: "https://www.youtube.com/channel/UCJv3vT5CaPklx2hX0V9P8VA",
  },
  {
    name: "Let’s Learn Public Health",
    url: "https://www.youtube.com/c/LetsLearnPublicHealth",
  },
  {
    name: "Dr. Greg Martin",
    url: "https://www.youtube.com/c/drgregmartin",
  },
  {
    name: "Gapminder",
    url: "https://www.youtube.com/c/gapminder/videos",
  },
  {
    name: "Partners In Health",
    url: "https://www.youtube.com/@partnersinhealth",
  },
  {
    name: "Greg Martin (YouTube handle)",
    url: "https://www.youtube.com/@gregmartin",
  },
];

const KeyPublicHealthOrganizations = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="YouTube" />

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <div className="w-full text-justify">
                <p className="text-[17px]">
                  In today&apos;s digital landscape, visual platforms are highly
                  engaging, and public health professionals are no exception.
                  Many organizations and individuals leverage platforms like
                  YouTube to share timely and valuable resources. Below are some
                  notable YouTube channels tailored for public health
                  professionals.
                </p>
              </div>
              <OrganizationList
                title="YouTube Channels"
                organizations={youtubeChannels}
              />
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>
      <NextButton
        href="/bookmarks/podcast"
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
