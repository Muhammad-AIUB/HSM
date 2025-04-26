import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { FeaturedBookmarks } from "../overview/page";
import NextButton from "@/components/Shared/NextButton";

const organizations = [
  {
    name: "The Lancet Public Health",
    url: "https://www.thelancet.com/journals/lanpub/home",
  },
  {
    name: "BMJ Global Health",
    url: "https://gh.bmj.com/",
  },
  {
    name: "Globalization and Health",
    url: "https://globalizationandhealth.biomedcentral.com/",
  },
  {
    name: "Journal of Epidemiology and Community Health",
    url: "https://jech.bmj.com/",
  },
  {
    name: "Journal of Nutrition",
    url: "https://academic.oup.com/jn",
  },
  {
    name: "Ecronicon",
    url: "http://www.ecronicon.com/",
  },
  {
    name: "Scientific Reports (Nature)",
    url: "https://www.nature.com/srep/",
  },
  {
    name: "Health Systems and Policy Research Journal",
    url: "https://www.hsprj.com/",
  },
  {
    name: "Health and Medical Economics",
    url: "https://health-medical-economics.imedpub.com/",
  },
  {
    name: "Taylor & Francis Public Health Research",
    url: "https://www.tandfonline.com/loi/khsr20",
  },
  {
    name: "Global Health and Social Medicine Journal",
    url: "https://www.ghspjournal.org/",
  },
  {
    name: "One Health Journal",
    url: "https://www.sciencedirect.com/journal/one-health",
  },
  {
    name: "International Journal of Public Health",
    url: "https://www.ssph-journal.org/journals/international-journal-of-public-health",
  },
  {
    name: "Public Health Reviews",
    url: "https://www.ssph-journal.org/journals/public-health-reviews",
  },
  {
    name: "Springer Health Systems and Policy",
    url: "https://www.springer.com/journal/11136",
  },
  {
    name: "Frontiers in Public Health",
    url: "https://www.frontiersin.org/journals/public-health",
  },
  {
    name: "Primary Health Care Open Access",
    url: "https://www.iomcworld.org/primary-health-care-open-access.html",
  },
  {
    name: "Hospital and Medical Management",
    url: "https://hospital-medical-management.imedpub.com/",
  },
  {
    name: "Community Medicine & Health Education",
    url: "https://www.omicsonline.org/community-medicine-health-education.php",
  },
  {
    name: "Springer Health Economics",
    url: "https://www.springer.com/journal/11524",
  },
  {
    name: "Human Resources for Health",
    url: "https://human-resources-health.biomedcentral.com/",
  },
  {
    name: "Equity in Health",
    url: "https://equityhealthj.biomedcentral.com/",
  },
  {
    name: "Public Health Safety Journal",
    url: "https://www.hilarispublisher.com/public-health-safety.html",
  },
  {
    name: "American Journal of Public Health",
    url: "https://ajph.aphapublications.org/",
  },
  {
    name: "American Journal of Preventive Medicine",
    url: "https://www.ajpmonline.org/",
  },
  {
    name: "Journal of Health Economics",
    url: "https://www.sciencedirect.com/journal/journal-of-health-economics",
  },
  {
    name: "OMICS Scientific Journals",
    url: "https://www.omicsonline.org/scientific-journals.php",
  },
  {
    name: "PAHO Journal Special Issues",
    url: "https://www.paho.org/journal/en/special-issues",
  },
  {
    name: "Health Policy and Planning",
    url: "https://academic.oup.com/heapol",
  },
  {
    name: "The Scholarly Kitchen",
    url: "https://scholarlykitchen.sspnet.org/",
  },
  {
    name: "Immunity Journal",
    url: "https://www.cell.com/immunity/home",
  },
  {
    name: "Medical Journal of Australia (MJAU)",
    url: "https://mjauk.org/",
  },
  {
    name: "Science Journal",
    url: "https://www.science.org/journal/science",
  },
  {
    name: "Global Health Action Journal",
    url: "https://jogh.org/",
  },
];

const Journals = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="Journals" />

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-8 pb-16">
          <p className="text-lg text-[17px]">
            This list offers an overview of reputable and scholarly journals
            focused on public health and health systems. While it includes many
            prominent journals, additional ones will be added over time as
            identified by the site owner.
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
        href="/bookmarks/commentaries-blogs"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default Journals;

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
