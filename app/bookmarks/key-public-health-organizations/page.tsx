import { cn } from "@/lib/utils";
import { FeaturedBookmarks } from "../overview/page";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import NextButton from "@/components/Shared/NextButton";

const organizations = {
  UNAgencies: [
    { name: "World Health Organization (WHO)", url: "https://www.who.int/" },
    {
      name: "UNICEF (United Nations Children’s Fund)",
      url: "https://www.unicef.org/",
    },
    {
      name: "UNFPA (United Nations Population Fund)",
      url: "https://www.unfpa.org/",
    },
    {
      name: "UNAIDS (Joint United Nations Programme on HIV/AIDS)",
      url: "https://www.unaids.org/",
    },
    {
      name: "Food and Agriculture Organization (FAO)",
      url: "https://www.fao.org/",
    },
    {
      name: "United Nations Development Programme (UNDP)",
      url: "https://www.undp.org/",
    },
    { name: "World Food Programme (WFP)", url: "https://www.wfp.org/" },
    {
      name: "United Nations High Commissioner for Refugees (UNHCR)",
      url: "https://www.unhcr.org/",
    },
    {
      name: "United Nations Environment Programme (UNEP)",
      url: "https://www.unep.org/",
    },
  ],
  regionalOrganizations: [
    { name: "Asian Development Bank (ADB)", url: "https://www.adb.org/" },
    { name: "African Development Bank (AfDB)", url: "https://www.afdb.org/" },
    { name: "African Union (AU)", url: "https://au.int/" },
    {
      name: "Inter-American Development Bank (IDB)",
      url: "https://www.iadb.org/",
    },
    { name: "European Union (EU)", url: "https://europa.eu/" },
    {
      name: "Pan American Health Organization (PAHO)",
      url: "https://www.paho.org/",
    },
    {
      name: "Caribbean Public Health Agency (CARPHA)",
      url: "https://carpha.org/",
    },
  ],
  bilateralDonors: [
    {
      name: "USAID (United States Agency for International Development)",
      url: "https://www.usaid.gov/",
    },
    {
      name: "FCDO/DFID (UK Foreign, Commonwealth & Development Office)",
      url: "https://www.gov.uk/government/organisations/foreign-commonwealth-and-development-office",
    },
    {
      name: "GIZ (German Agency for International Cooperation)",
      url: "https://www.giz.de/en/html/index.html",
    },
    {
      name: "JICA (Japan International Cooperation Agency)",
      url: "https://www.jica.go.jp/english/index.html",
    },
    {
      name: "Norad (Norwegian Agency for Development Cooperation)",
      url: "https://www.norad.no/en/frontpage/",
    },
    {
      name: "Global Affairs Canada (GAC)",
      url: "https://www.international.gc.ca/",
    },
    {
      name: "Australian Department of Foreign Affairs and Trade (DFAT)",
      url: "https://www.dfat.gov.au/",
    },
    {
      name: "Sida (Swedish International Development Cooperation Agency)",
      url: "https://www.sida.se/English/",
    },
    {
      name: "Netherlands Ministry of Foreign Affairs",
      url: "https://www.government.nl/ministries/ministry-of-foreign-affairs",
    },
  ],
  publicHealthOrgs: [
    { name: "World Bank Group", url: "https://www.worldbank.org/" },
    {
      name: "Global Fund to Fight AIDS, Tuberculosis, and Malaria",
      url: "https://www.theglobalfund.org/",
    },
    { name: "Gavi, the Vaccine Alliance", url: "https://www.gavi.org/" },
    {
      name: "International Federation of Red Cross and Red Crescent Societies (IFRC)",
      url: "https://www.ifrc.org/",
    },
    { name: "Médecins Sans Frontières (MSF)", url: "https://www.msf.org/" },
    { name: "PATH", url: "https://www.path.org/" },
    { name: "Save the Children", url: "https://www.savethechildren.org/" },
    { name: "Care International", url: "https://www.care.org/" },
    {
      name: "International Planned Parenthood Federation (IPPF)",
      url: "https://www.ippf.org/",
    },
    {
      name: "Management Sciences for Health (MSH)",
      url: "https://www.msh.org/",
    },
    {
      name: "Family Health International/FHI 360",
      url: "https://www.fhi360.org/",
    },
    {
      name: "Bangladesh Rural Advancement Committee (BRAC)",
      url: "https://www.brac.net/",
    },
  ],
  philanthropicOrgs: [
    {
      name: "Bill & Melinda Gates Foundation",
      url: "https://www.gatesfoundation.org/",
    },
    { name: "Wellcome Trust", url: "https://wellcome.org/" },
    {
      name: "Rockefeller Foundation",
      url: "https://www.rockefellerfoundation.org/",
    },
    { name: "Ford Foundation", url: "https://www.fordfoundation.org/" },
    {
      name: "Clinton Health Access Initiative (CHAI)",
      url: "https://clintonhealthaccess.org/",
    },
    { name: "Bloomberg Philanthropies", url: "https://www.bloomberg.org/" },
    {
      name: "Global Health Innovative Technology Fund (GHIT)",
      url: "https://www.ghitfund.org/",
    },
  ],
  privateOrgs: [
    { name: "ThinkWell Global", url: "https://www.thinkwell.global/" },
    { name: "Open Development", url: "https://www.opendevelopment.co/" },
  ],
  researchOrgs: [
    {
      name: "Centers for Disease Control and Prevention (CDC)",
      url: "https://www.cdc.gov/",
    },
    {
      name: "Johns Hopkins Bloomberg School of Public Health",
      url: "https://www.jhsph.edu/",
    },
    {
      name: "National Institutes of Health (NIH)",
      url: "https://www.nih.gov/",
    },
    {
      name: "London School of Hygiene & Tropical Medicine",
      url: "https://www.lshtm.ac.uk/",
    },
    {
      name: "Institute for Health Metrics and Evaluation (IHME)",
      url: "https://www.healthdata.org/",
    },
    { name: "Population Council – Global", url: "https://www.popcouncil.org/" },
    {
      name: "International Centre for Diarrhoeal Disease Research, Bangladesh (icddr,b)",
      url: "https://www.icddrb.org/",
    },
    {
      name: "Institute of Tropical Medicine (ITM) – Belgium",
      url: "https://www.itg.be/",
    },
    {
      name: "Robert Koch Institute (RKI) – Germany",
      url: "https://www.rki.de/",
    },
    {
      name: "Health Systems Research Institute (HSRI) – Thailand",
      url: "https://www.hsri.org",
    },
  ],
  otherPartnerships: [
    { name: "Stop TB Partnership", url: "https://www.stoptb.org/" },
    { name: "RBM Partnership to End Malaria", url: "https://endmalaria.org/" },
    {
      name: "Every Woman Every Child",
      url: "https://sustainabledevelopment.un.org/sdinaction/everywomaneverychild",
    },
    { name: "Health Systems Global", url: "https://healthsystemsglobal.org/" },
    {
      name: "Global Polio Eradication Initiative (GPEI)",
      url: "https://polioeradication.org/",
    },
    {
      name: "Public Health Foundation Bangladesh",
      url: "https://publichealthfoundation.org.bd/",
    },
  ],
};

const KeyPublicHealthOrganizations = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="Key Public Health Organizations" />

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              {/* Description Section */}
              <div className="w-full text-justify">
                <p className="text-base leading-7 text-[17px]">
                  Many organizations, both large and small, have long been
                  dedicated to public health and health systems strengthening.
                  Understanding their work and plans to promote public health is
                  both enlightening and valuable. This section provides a
                  categorized list of organizations involved in public health at
                  global, regional, and local levels, including UN agencies,
                  donor agencies, international organizations, philanthropic
                  foundations, private entities, and key partnerships and
                  alliances.
                </p>
              </div>

              <OrganizationList
                title="United Nations (UN) Agencies"
                description="These organizations operate globally and address public health within the broader framework of sustainable development:"
                organizations={organizations.UNAgencies}
                className="bg-blue-100 p-4 rounded-lg"
              />
              <OrganizationList
                title="Regional Multilateral Organizations"
                description="Regional Multilateral Organizations are entities that operate within specific geographic regions, pooling resources from member countries to address shared challenges, including public health."
                organizations={organizations.regionalOrganizations}
                className="bg-red-100 p-4 rounded-lg"
              />
              <OrganizationList
                title="Bilateral Donor Agencies"
                description="These agencies are funded and operated by individual countries, providing financial and technical assistance to partner nations:"
                organizations={organizations.bilateralDonors}
                className="bg-green-100 p-4 rounded-lg"
              />
              <OrganizationList
                title="International Public Health Organizations"
                description="These organizations provide expertise, technical support, and advocacy:"
                organizations={organizations.publicHealthOrgs}
                className="bg-orange-100 p-4 rounded-lg"
              />
              <OrganizationList
                title="Philanthropic Organizations"
                description="These entities support public health programs through grants and advocacy."
                organizations={organizations.philanthropicOrgs}
                className="bg-teal-100 p-4 rounded-lg"
              />
              <OrganizationList
                title="Private Organizations"
                description=""
                organizations={organizations.privateOrgs}
                className="bg-purple-100 p-4 rounded-lg"
              />
              <OrganizationList
                title="Research and Policy Organizations"
                description=""
                organizations={organizations.researchOrgs}
                className="bg-sky-100 p-4 rounded-lg"
              />
              <OrganizationList
                title="Other Key Partnerships and Alliances"
                description=""
                organizations={organizations.otherPartnerships}
                className="bg-yellow-50 p-4 rounded-lg"
              />
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>

      <NextButton
        href="/bookmarks/reports-and-publications"
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
  description: string;
  organizations: Organization[];
  className?: string;
}

// OrganizationList component to display a list of organizations
const OrganizationList: React.FC<OrganizationListProps> = ({
  title,
  description,
  organizations,
  className = "",
}) => {
  return (
    <div className={cn("my-4", className)}>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
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
