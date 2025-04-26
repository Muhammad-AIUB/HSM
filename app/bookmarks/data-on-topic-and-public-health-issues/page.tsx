import { cn } from "@/lib/utils";
import { FeaturedBookmarks } from "../overview/page";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import NextButton from "@/components/Shared/NextButton";

const thematicDataSources = {
  lifeExpectancy: [
    {
      name: "WHO Healthy Life Expectancy (HALE)",
      url: "https://apps.who.int/gho/data/node.main.HALE?lang=en",
    },
  ],
  humanDevelopment: [
    {
      name: "UNDP Human Development Data",
      url: "https://hdr.undp.org/data-center/country-insights#/ranks",
    },
  ],
  demographicHealth: [
    {
      name: "Demographic and Health Surveys (DHS)",
      url: "https://www.dhsprogram.com/",
    },
  ],
  immunization: [
    {
      name: "Gavi – Bangladesh Country Hub",
      url: "https://www.gavi.org/programmes-impact/country-hub/south-east-asia/bangladesh",
    },
    {
      name: "WHO/UNICEF National Immunization Coverage",
      url: "https://www.who.int/news-room/questions-and-answers/item/who-unicef-estimates-of-national-immunization-coverage",
    },
  ],
  healthFinancing: [
    {
      name: "ThinkWell – Health Financing",
      url: "https://thinkwell.global/publications/?search_publications=health+financing",
    },
    {
      name: "IHME – Global Health Financing",
      url: "https://www.healthdata.org/health-financing",
    },
    {
      name: "International Budget Partnership",
      url: "https://internationalbudget.org/",
    },
  ],
  universalHealthCoverage: [
    {
      name: "World Bank – UHC Data",
      url: "https://datatopics.worldbank.org/universal-health-coverage/resources.html",
    },
  ],
  aids: [
    {
      name: "UNAIDS – AIDSinfo",
      url: "https://aidsinfo.unaids.org/",
    },
  ],
  healthSystems: [
    {
      name: "ThinkWell – Health Systems",
      url: "https://thinkwell.global/publications/?search_publications=health+systems",
    },
    {
      name: "Eye on Global Health – Systems & Governance",
      url: "https://eyeonglobalhealth.com/category/health-care-systems-policies-and-governance/",
    },
  ],
  africaPublicHealthInfographics: [
    {
      name: "PMA Data – Technical Areas",
      url: "https://www.pmadata.org/technical-areas",
    },
  ],
  nutrition: [
    {
      name: "Global Nutrition Report",
      url: "https://globalnutritionreport.org/",
    },
  ],
  tuberculosis: [
    {
      name: "Stop TB – Country Dashboard",
      url: "https://dashboards.stoptb.org/country-profile.html",
    },
  ],
  population: [
    {
      name: "PRB – Population Data Sheets",
      url: "https://www.prb.org/collections/data-sheets/",
    },
  ],
  climate: [
    {
      name: "NOAA Climate Data",
      url: "https://www.climate.gov/",
    },
  ],
  gender: [
    {
      name: "UN Women Data Hub",
      url: "https://data.unwomen.org/",
    },
    {
      name: "ILO – Gender Gap in Labor Force",
      url: "https://www.ilo.org/infostories/en-GB/Stories/Employment/barriers-women#global-gap/gap-labour-force",
    },
  ],
  wash: [
    {
      name: "WHO/UNICEF WASH Data",
      url: "https://washdata.org/",
    },
    {
      name: "WASH – Explore the Data",
      url: "https://washdata.org/data",
    },
  ],
  hunger: [
    {
      name: "Global Hunger Index",
      url: "https://www.globalhungerindex.org/",
    },
  ],
  covid19: [
    {
      name: "WHO – COVID-19 Dashboard",
      url: "https://data.who.int/dashboards/covid19/cases?n=c",
    },
  ],
  bangladeshHealthBulletin: [
    {
      name: "DGHS Bangladesh Health Bulletin",
      url: "https://old.dghs.gov.bd/index.php/en/publications/health-bulletin/dghs-health-bulletin",
    },
  ],
  sdgData: [
    {
      name: "UN Women – SDG Gender Tracker",
      url: "https://data.unwomen.org/features/are-we-track-achieve-gender-equality-2030",
    },
    {
      name: "World Bank – SDG Atlas",
      url: "https://datatopics.worldbank.org/sdgatlas/",
    },
    {
      name: "Our World in Data – SDG Progress Tracker",
      url: "https://ourworldindata.org/sdgs",
    },
  ],
  employment: [
    {
      name: "ILO – Global Regions",
      url: "https://ilo.org/global/regions/lang--en/index.htm",
    },
    {
      name: "ILO – Country Gateway (Bangladesh)",
      url: "https://www.ilo.org/gateway/faces/home/ctryHome?locale=EN&countryCode=BGD&_adf.ctrl-state=162d3d0rex_9",
    },
    {
      name: "ILOSTAT Employment Database",
      url: "https://ilostat.ilo.org/data/",
    },
    {
      name: "ILO Bangladesh Office",
      url: "https://www.ilo.org/dhaka/lang--en/index.htm",
    },
  ],
  incomeClassification: [
    {
      name: "World Bank – Country Income Classifications",
      url: "https://datahelpdesk.worldbank.org/knowledgebase/articles/906519",
    },
  ],
};

const KeyPublicHealthOrganizations = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="Data on Topic and Public Health Issues" />

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <p className="text-[17px]">
                This section compiles up-to-date data and information on key
                public health and development issues from trusted sources. These
                platforms offer recent statistics, analyses, and evidence-based
                insights on various topics to support your work, strengthen your
                understanding, and enhance the quality of your research and
                reference materials.
              </p>
              <OrganizationList
                className="my-4 bg-blue-100 p-4 rounded-lg"
                title="Life expectancy"
                organizations={thematicDataSources.lifeExpectancy}
              />
              <OrganizationList
                className="my-4 bg-green-100 p-4 rounded-lg"
                title="Human development: country wise data"
                organizations={thematicDataSources.humanDevelopment}
              />
              <OrganizationList
                className="my-4 bg-yellow-100 p-4 rounded-lg"
                title="Demographic health survey"
                organizations={thematicDataSources.demographicHealth}
              />
              <OrganizationList
                className="my-4 bg-purple-100 p-4 rounded-lg"
                title="Immunization/Vaccine"
                organizations={thematicDataSources.immunization}
              />
              <OrganizationList
                className="my-4 bg-pink-100 p-4 rounded-lg"
                title="Health Financing & Budget"
                organizations={thematicDataSources.healthFinancing}
              />
              <OrganizationList
                className="my-4 bg-pink-100 p-4 rounded-lg"
                title="Universal Health Coverage Data"
                organizations={thematicDataSources.universalHealthCoverage}
              />
              <OrganizationList
                className="my-4 bg-red-100 p-4 rounded-lg"
                title="AIDS"
                organizations={thematicDataSources.aids}
              />
              <OrganizationList
                className="my-4 bg-teal-100 p-4 rounded-lg"
                title="Health System"
                organizations={thematicDataSources.healthSystems}
              />
              <OrganizationList
                className="my-4 bg-cyan-100 p-4 rounded-lg"
                title="Data and infographics on public health topics for African countries"
                organizations={
                  thematicDataSources.africaPublicHealthInfographics
                }
              />
              <OrganizationList
                className="my-4 bg-orange-100 p-4 rounded-lg"
                title="Nutrition"
                organizations={thematicDataSources.nutrition}
              />
              <OrganizationList
                className="my-4 bg-lime-100 p-4 rounded-lg"
                title="Tuberculosis"
                organizations={thematicDataSources.tuberculosis}
              />
              <OrganizationList
                className="my-4 bg-emerald-100 p-4 rounded-lg"
                title="Population"
                organizations={thematicDataSources.population}
              />
              <OrganizationList
                className="my-4 bg-rose-100 p-4 rounded-lg"
                title="Climate"
                organizations={thematicDataSources.climate}
              />
              <OrganizationList
                className="my-4 bg-violet-100 p-4 rounded-lg"
                title="Gender"
                organizations={thematicDataSources.gender}
              />
              <OrganizationList
                className="my-4 bg-fuchsia-100 p-4 rounded-lg"
                title="Water, Sanitation and Hygiene (WASH)"
                organizations={thematicDataSources.wash}
              />
              <OrganizationList
                className="my-4 bg-sky-100 p-4 rounded-lg"
                title="Hunger"
                organizations={thematicDataSources.hunger}
              />
              <OrganizationList
                className="my-4 bg-amber-100 p-4 rounded-lg"
                title="COVID-19"
                organizations={thematicDataSources.covid19}
              />
              <OrganizationList
                className="my-4 bg-zinc-100 p-4 rounded-lg"
                title="Bangladesh Health Bulleting"
                organizations={thematicDataSources.bangladeshHealthBulletin}
              />
              <OrganizationList
                className="my-4 bg-red-100 p-4 rounded-lg"
                title="Data availability for SDG as per country"
                organizations={thematicDataSources.sdgData}
              />
              <OrganizationList
                className="my-4 bg-purple-100 p-4 rounded-lg"
                title="Employment related information"
                organizations={thematicDataSources.employment}
              />
              <OrganizationList
                className="my-4 bg-slate-100 p-4 rounded-lg"
                title="Income-based country specifications"
                organizations={thematicDataSources.incomeClassification}
              />
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>
      <NextButton
        href="/bookmarks/training-and-courses"
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
    <div className={cn(className, "my-2")}>
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
