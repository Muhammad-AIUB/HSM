import { cn } from "@/lib/utils";
import { FeaturedBookmarks } from "../overview/page";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import NextButton from "@/components/Shared/NextButton";

const learningResources = {
  "UN Courses": [
    {
      name: "UN Courses",
      url: "https://unccelearn.org/courses/?lang=en&language=en",
    },
    {
      name: "UN Mandatory Learning",
      url: "https://hr.un.org/page/mandatory-learning",
    },
  ],
  "World Bank Academy": [
    {
      name: "World Bank Academy",
      url: "https://academy.worldbank.org/en/home",
    },
  ],
  "WHO Courses": [
    {
      name: "WHO Courses",
      url: "https://openwho.org/courses",
    },
  ],
  UNICEF: [
    {
      name: "UNICEF",
      url: "https://agora.unicef.org/local/catalogue/index.php?filters[]=1",
    },
  ],
  "Harvard University": [
    {
      name: "Harvard University",
      url: "https://pll.harvard.edu/subject/public-health",
    },
  ],
  "Cornell University": [
    {
      name: "Cornell University",
      url: "https://ecornell.cornell.edu/certificates/",
    },
  ],
  "Global Health e-Learning Center": [
    {
      name: "Global Health e-Learning Center",
      url: "https://www.globalhealthlearning.org/courses",
    },
  ],
  Coursera: [
    {
      name: "Coursera",
      url: "https://www.coursera.org/browse/health/public-health",
    },
  ],
  Udemy: [
    {
      name: "Udemy",
      url: "https://www.udemy.com/courses/search/?src=ukw&q=Public+health",
    },
  ],
  edX: [
    {
      name: "edX",
      url: "https://www.edx.org/search?q=Public+health",
    },
  ],
  Alison: [
    {
      name: "Alison",
      url: "https://alison.com/tag/public-health",
    },
  ],
  "My MOOC": [
    {
      name: "My MOOC",
      url: "https://www.my-mooc.com/en/categorie/public-health",
    },
  ],
};

const KeyPublicHealthOrganizations = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="Training and Courses" />

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              {/* Description Section */}
              <div className="w-full  text-justify">
                <p className=" text-[17px]">
                  This list of online training and courses in global health and
                  health systems can help you choose and enroll in programs to
                  enhance your skills and expand your professional network.
                </p>
              </div>

              <OrganizationList
                className="my-4 p-4 rounded-lg bg-blue-100"
                title="UN Courses"
                organizations={learningResources["UN Courses"]}
              />
              <OrganizationList
                className="my-4 p-4 rounded-lg bg-green-100"
                title="World Bank Academy"
                organizations={learningResources["World Bank Academy"]}
              />
              <OrganizationList
                className="my-4 p-4 rounded-lg bg-yellow-100"
                title="WHO Courses"
                organizations={learningResources["WHO Courses"]}
              />
              <OrganizationList
                className="my-4 p-4 rounded-lg bg-purple-100"
                title="UNICEF"
                organizations={learningResources["UNICEF"]}
              />
              <OrganizationList
                className="my-4 p-4 rounded-lg bg-pink-100"
                title="Harvard University"
                organizations={learningResources["Harvard University"]}
              />
              <OrganizationList
                className="my-4 p-4 rounded-lg bg-indigo-100"
                title="Cornell University"
                organizations={learningResources["Cornell University"]}
              />
              <OrganizationList
                className="my-4 p-4 rounded-lg bg-teal-100"
                title="Global Health e-Learning Center"
                organizations={
                  learningResources["Global Health e-Learning Center"]
                }
              />
              <OrganizationList
                className="my-4 p-4 rounded-lg bg-cyan-100"
                title="Coursera"
                organizations={learningResources["Coursera"]}
              />
              <OrganizationList
                className="my-4 p-4 rounded-lg bg-orange-100"
                title="Udemy"
                organizations={learningResources["Udemy"]}
              />
              <OrganizationList
                className="my-4 p-4 rounded-lg bg-lime-100"
                title="edX"
                organizations={learningResources["edX"]}
              />
              <OrganizationList
                className="my-4 p-4 rounded-lg bg-rose-100"
                title="Alison"
                organizations={learningResources["Alison"]}
              />
              <OrganizationList
                className="my-4 p-4 rounded-lg bg-violet-100"
                title="My MOOC"
                organizations={learningResources["My MOOC"]}
              />
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>
      <NextButton
        href="/bookmarks/job-sites"
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
    <div className={cn(className, "my-1")}>
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
