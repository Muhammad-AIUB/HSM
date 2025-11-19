"use client";

import Image from "next/image";
import { BookOpen, Heart, AlertTriangle, Shield, Droplets } from "lucide-react";
import { FaGlobe } from "react-icons/fa";
import NextButton from "@/components/Shared/NextButton";
import BioOfNusratJahanMim from "./BioOfNusratJahanMim";

const MicroplasticsBlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section with Navbar Matching Colors */}
      <div className="relative overflow-hidden bg-[#001844]">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001844] via-[#2D8CBB] to-[#001844]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30px 30px, rgba(255,206,0,0.3) 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          {/* Floating Title */}
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center">
            
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              <span className="text-[#FFCE00]">
                From River to Table:
              </span>
              <br />
              <span className="text-white">Microplastics as an Emerging Public Health Concern in Bangladesh</span>
            </h1>
          </div>

          {/* Author Card with Navbar Matching Colors */}
          <div className="max-w-4xl mx-auto px-6 pb-16">
            <div className="bg-white border-4 border-[#FFCE00] rounded-3xl p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Author Image with Navbar Matching Border */}
                <div className="relative group">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#FFCE00]">
                    <Image
                      src="/images/blog-interview/Nusrat_picture.jpg"
                      alt="Nusrat Jahan Mim"
                      width={400}
                      height={400}
                      quality={100}
                      priority
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-[#001844] mb-2">Nusrat Jahan Mim</h2>
                  <p className="text-xl text-[#2D8CBB] mb-4">Environmental Health Researcher</p>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <a
                      href="https://www.linkedin.com/in/nusratjahanmim3494/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#2D8CBB] hover:bg-[#001844] rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn Profile of Nusrat Jahan Mim"
                      title="LinkedIn"
                    >
                      <FaGlobe className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section with High Contrast Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        
        {/* Introduction Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500 rounded-xl mr-4">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-600">
                Rivers as Lifelines and a Growing Source of Risk
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-blue-100 rounded-xl border-l-8 border-blue-500">
                <p className="text-lg text-justify">
                  Bangladesh is known as the land of rivers. These waterways are the lifelines of the nation feeding millions, supporting livelihoods and shaping cultural identity. The proverb "Mache Bhate Bangali" (মাছে ভাতে বাঙালি) - "Fish and rice make a Bengali" reflects the central role of fish in daily diets and society. As an environmental science student, I wanted to explore a topic close to home. The Meghna River, vital for local communities, became the focus of my undergraduate thesis. Our study revealed industrial plastic contamination in local fish – HDPE (High-Density Polyethylene), LDPE (Low-Density Polyethylene) and nylon - suggesting effluents from nearby textile and manufacturing industries were polluting the river. This experience made me realize that microplastics (MPs) are not just an environmental issue, but an emerging public health concern.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Microplastics in Freshwater Ecosystems Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-500 rounded-xl mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-orange-600">
                Microplastics in Freshwater Ecosystems
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-orange-100 rounded-xl border-l-8 border-orange-500">
                <p className="text-lg text-justify mb-4">
                  Microplastics, tiny plastic fragments smaller than 5 millimeters, are now found everywhere: in oceans, soils, air and within living organisms. While global attention often focuses on marine systems, freshwater environments, particularly in South Asia, remain under-studied. In Bangladesh, where fish contribute nearly 60 percent of protein intake (DoF 2022), the presence of microplastics in rivers poses both ecological and human-health risks.
                </p>
                <p className="text-lg text-justify">
                  Studies across Bangladesh reveal the scale of the problem. A review by Oza et al. (2024) reported microplastic contamination in 422 fish species across Asia, with Bangladesh, Pakistan and India being among the most affected nations. Khan and Setu (2022) found that 76 percent of freshwater fish from the Jamuna River contained microplastics. In the Meghna River, Arafat et al. (2023) found 90% of giant river catfish contained fragment-shaped polypropylene–polyethylene copolymers, particularly in Chandpur Sadar, while Hossain et al. (2023) detected microplastics in 81.3% of Meghna estuary samples, mainly fiber-shaped polyethylene, polypropylene and nylon fragments smaller than 500 µm, posing a risk of bioaccumulation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Implications for Human Health Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-500 rounded-xl mr-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-red-600">
                Implications for Human Health
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-red-100 rounded-xl border-l-8 border-red-500">
                <p className="text-lg text-justify">
                  The implications for human health are concerning. Microplastics can enter the body through contaminated food, water and even air. While most particles are excreted, those smaller than 150 µm can be absorbed by intestinal tissues, potentially triggering inflammation and oxidative stress (Alberghini et al., 2022). Nanoplastics, being even smaller, can cross biological barriers such as the placenta and the blood–brain barrier, contaminating organs like the liver and gallbladder (Ragusa et al., 2021). In 2021, researchers detected microplastics in human placentas, raising questions about possible effects on fetal development. Long-term consequences remain unclear, but studies suggest disruptions to metabolism, immune function and exposure to harmful chemicals that may act as endocrine disruptors or carcinogens.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Efforts and Community Response Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-500 rounded-xl mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-700">
                Policy Efforts and Community Response
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-indigo-100 rounded-xl border-l-8 border-indigo-500">
                <p className="text-lg text-justify">
                  Bangladesh has begun addressing plastic pollution, the main source of microplastics through policy, technology and community action. The Solid Waste Management Rules (2021) promote the "3Rs": reduce, reuse, recycle, under the National 3R Strategy. Extended Producer Responsibility (EPR) frameworks are being introduced to hold industries accountable. Awareness efforts like the YPSA Human Chain in Cox's Bazar encourage responsible consumption, indirectly reducing microplastic formation and protecting public health. National goals include cutting plastic waste by 30% in ten years, sorting 90% of single-use plastics by 2026, halving virgin plastic use by 2030 and recycling 50% by 2025 (Abdullah & Abedin, 2024). Emerging technologies such as coagulation, photocatalysis and waste-to-energy approaches offer sustainable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* A Call for Integrated Action Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-500 rounded-xl mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-teal-700">
                A Call for Integrated Action
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-teal-100 rounded-xl border-l-8 border-teal-500">
                <p className="text-lg text-justify">
                  From river to table, the story of microplastics in Bangladesh is a call for urgent, collaborative action - a reminder that public health is deeply connected to the environment. Early studies may serve as reference points for future research and policy. By strengthening waste management, supporting innovation and raising awareness, Bangladesh can ensure its rivers and the meals they provide remain sources of life, not pollution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* References Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-slate-500 rounded-xl mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-700">
                References
              </h2>
            </div>

            <div className="space-y-4 text-gray-800">
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">
                  Abdullah, M., & Abedin, M. Z. (2024). Assessment of plastic waste management in Bangladesh: A comprehensive perspective on sorting, production, separation and recycling. Results in Surfaces and Interfaces, 15, 100221.{" "}
                  <a href="https://doi.org/10.1016/j.rsurfi.2024.100221" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    https://doi.org/10.1016/j.rsurfi.2024.100221
                  </a>
                </p>
              </div>
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">
                  Arafat, S. T., Tanoiri, H., Yokota, M., Nakano, H., Arakawa, H., Terahara, T., & Kobayashi, T. (2023). Microplastic pollution in the gastrointestinal tract of giant river catfish Sperata seenghala (Sykes, 1839) from the Meghna River, Bangladesh. Environmental Science and Pollution Research, 30(38), 89627–89637.{" "}
                  <a href="https://doi.org/10.1007/s11356-023-30411-7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    https://doi.org/10.1007/s11356-023-30411-7
                  </a>
                </p>
              </div>
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">DoF. (2022). Yearbook of fisheries statistics of Bangladesh, 2020-21. Fisheries Resources Survey System, Department of Fisheries, Ministry of Fisheries and Livestock, Dhaka.</p>
              </div>
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">
                  Khan, H. M. S., & Setu, S. (2022). Microplastic ingestion by fishes from Jamuna River, Bangladesh. Environment and Natural Resources Journal, 20(2), 157–167.{" "}
                  <a href="https://ph02.tci-thaijo.org/index.php/ennrj/article/view/245953" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    https://ph02.tci-thaijo.org/index.php/ennrj/article/view/245953
                  </a>
                </p>
              </div>
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">
                  Oza, J., Smith, A., Lee, R., & Chen, Y. (2024). A systematic review on microplastic contamination in fishes of Asia: Polymeric risk assessment and future perspectives. Environmental Toxicology and Chemistry. Advance online publication.{" "}
                  <a href="https://doi.org/10.1002/etc.5821" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    https://doi.org/10.1002/etc.5821
                  </a>
                </p>
              </div>
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">
                  Ragusa, A., Svelato, A., Santacroce, C., Catalano, P., Notarstefano, V., Carnevali, O., Papa, F., Rongioletti, M. C. A., Baiocco, F., Draghi, S., et al. (2021). Plasticenta: First evidence of microplastics in human placenta. Environment International, 146, 106274.{" "}
                  <a href="https://doi.org/10.1016/j.envint.2020.106274" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    https://doi.org/10.1016/j.envint.2020.106274
                  </a>
                </p>
              </div>
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">Alberghini, L., Truant, A., Santonicola, S., Colavita, G., & Giaccone, V. (2022). Microplastics in fish and fishery products and risks for human health: A review. International journal of environmental research and public health, 20(1), 789.</p>
              </div>
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">
                  World Bank. (2024). Extended Producer Responsibility: For advancing circular economies for plastics in Bangladesh. Washington,D.C.:World Bank.{" "}
                  <a href="https://documents1.worldbank.org/curated/en/099121624201515863/pdf/P1759081d4a8d30e81899a1c0b8bfb342ad.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    https://documents1.worldbank.org/curated/en/099121624201515863/pdf/P1759081d4a8d30e81899a1c0b8bfb342ad.pdf
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <BioOfNusratJahanMim />

      <div className="mt-16 mb-16">
        <NextButton
          href="/blog-and-interview/blog/bridging-the-gaps-strengthening-mental-healthcare-to-build-a-resilient-health-system-in-bangladesh"
          text="Next Blog"
        />
      </div>
    </div>
  );
};

export default MicroplasticsBlogPage;

