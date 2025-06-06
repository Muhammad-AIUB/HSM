"use client";
import { motion } from "framer-motion";
import { colors } from "@/lib/utils";

const PublicationsInPeerReviewed = () => {
  const publications = [
    {
      year: "2023",
      title:
        "Effect of leisure-time physical activity on blood pressure in people with hypertension: a systematic review and meta-analysis",
      journal: "Nature: Sci Rep 13, 10639",
      link: "https://doi.org/10.1038/s41598-023-37149-2",
      titleLink: "https://www.nature.com/articles/s41598-023-37149-2", // Update with actual link
      firstAuthor: false,
    },
    {
      year: "2023",
      title:
        "Coping with COVID-19 Pandemic and Sustained Health Behavior: A Cross-Sectional Study in Bangladesh",
      journal: "Epidemiologia 2023, 4, 85-93",
      link: "https://doi.org/10.3390/epidemiologia4010009",
      titleLink: "https://www.mdpi.com/2673-3986/4/1/9", // Update with actual link
      firstAuthor: true,
    },

    {
      year: "2023",
      title:
        "Communicating health and risk information among senior citizens in Bangladesh",
      journal:
        "International Journal of Public Health Science (IJPHS) Vol. 12, No. 1.",
      link: "https://doi.org/10.11591/ijphs.v12i1.21787",
      titleLink: "https://www.mdpi.com/2673-3986/4/1/9", // Update with actual link
      firstAuthor: false,
    },
    {
      year: "2022",
      title:
        "Cigarette smoking and associated factors among men in five South Asian countries: A pooled analysis of nationally representative surveys",
      journal: "PLOS ONE, 17(11), e0277758",
      link: "https://doi.org/10.1371/journal.pone.0277758",
      titleLink:
        "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0277758", // Update with actual link
      firstAuthor: false,
    },
    {
      year: "2021",
      title:
        "Effect of leisure-time physical activity in controlling hypertension: a systematic review and meta-analysis protocol",
      journal: "BMJ Open Vol 11, Issue 12",
      link: "https://doi.org/10.1136/bmjopen-2021-056270",
      titleLink: "https://bmjopen.bmj.com/content/11/12/e056270", // Update with actual link
      firstAuthor: false,
    },
    {
      year: "2019",
      title:
        "Perceptions of appropriate treatment among the informal allopathic providers in two peri-urban areas in Bangladesh",
      journal: "BMC Health Serv Res 19, 424",
      link: "https://doi.org/10.1186/s12913-019-4254-3",
      titleLink:
        "https://mshoffice-my.sharepoint.com/personal/msizear_msh_org/Documents/Sizear_Digital%20Files%20Documentation_July%202023/CV%20Work_Sizear/CV_2024/CV_Updated_MIS_2024/CV%20formats_MIS/CV%20and%20Bio's%20Latest%20Work_July%202024/4%20pages%20CV%20updated%20versions/Perceptions%20of%20appropriate%20treatment%20among%20the%20informal%20allopathic%20providers%20in%20two%20peri-urban%20areas%20in%20Bangladesh", // Update with actual link
      firstAuthor: true,
    },
    {
      year: "2016",
      title:
        "Socioeconomic status & health seeking behavior of rural people: A cross sectional study in Fatikchhari, Chittagong. ",
      journal: "MOJ Public Health, 4(4), 127-131.",
      link: "https://doi.org/10.15406/mojph.2016.04.00090",
      firstAuthor: false,
    },
  ];

  return (
    <div className="pt-16">
      <h3 className="text-xl font-bold underline underline-offset-[6px] font-roboto text-[#001844] decoration-[#ef4444] pb-8">
        Publications in Peer Reviewed Journals
      </h3>

      <h3 className="text-xl font-bold underline underline-offset-[6px] font-roboto text-[#184564] decoration-[#ef4444] pb-6">
        Research Articles
      </h3>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-5xl mx-12"
      >
        {publications.map((item, index) => (
          <motion.div
            key={index}
            // whileHover={{ borderColor: "#FFCE00" }}
            className={`bg-white border shadow-sm rounded-md p-6 border-l-4 border-blue-500 flex md:items-center md:space-x-6 space-y-2 group flex-col md:flex-row  justify-between${
              colors[index % colors.length]
            }`}
          >
            {/* Left Side: Year */}
            <div className="w-[5%]">
              <h3 className="text-lg font-semibold text-[#001844]">
                {item.year}
              </h3>
            </div>

            {item.firstAuthor ? (
              <span className="bg-blue-800 text-white px-2 w-28 font-bold">
                First Author
              </span>
            ) : (
              <span className="bg-blue-800 text-white px-2 w-28"></span>
            )}

            {/* Right Side: Title & Journal */}
            <div className="md:w-3/4 break-words">
              <a
                href={item.titleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-semibold text-gray-800  hover:bg-blue-500 hover:text-white hover:underline transition duration-200 rounded"
              >
                {item.title}
              </a>
              <p className="text-gray-600 text-sm">{item.journal}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm mt-1 hover:underline group-hover:text-black"
              >
                {item.link}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PublicationsInPeerReviewed;
