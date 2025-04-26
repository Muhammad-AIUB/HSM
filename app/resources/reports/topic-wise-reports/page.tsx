"use client";

import { motion } from "framer-motion";

import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";

import ClimateChangeImg from "@/public/images/resource-bookmark/resource/topic-wise-report/climate-change-and-public-health.jpg";
import HealthFinancingImg from "@/public/images/resource-bookmark/resource/topic-wise-report/health-financing.jpg";
import HealthPolicyAnalysisImg from "@/public/images/resource-bookmark/resource/topic-wise-report/health-policy-and-analysis.jpg";
import HealthServiceDeliveryImg from "@/public/images/resource-bookmark/resource/topic-wise-report/health-service-delivery.jpg";
import HealthSystemGoveranceImg from "@/public/images/resource-bookmark/resource/topic-wise-report/health-system-governance.png";
import HealthWorkersImg from "@/public/images/resource-bookmark/resource/topic-wise-report/health-workers.jpg";
import MaternalChildHealthImg from "@/public/images/resource-bookmark/resource/topic-wise-report/maternal-child-support.jpg";
import MentalHealthImg from "@/public/images/resource-bookmark/resource/topic-wise-report/mental-health.jpg";
import NCDsImg from "@/public/images/resource-bookmark/resource/topic-wise-report/ncd.jpg";
import NutritionImg from "@/public/images/resource-bookmark/resource/topic-wise-report/nutritions.jpg";
import PrimaryHealthCareImg from "@/public/images/resource-bookmark/resource/topic-wise-report/primary-health-care.jpg";
import PrivateSectorImg from "@/public/images/resource-bookmark/resource/topic-wise-report/private-sector.jpg";
import PublicFinancialManagementImg from "@/public/images/resource-bookmark/resource/topic-wise-report/public-financial-management.jpg";
import StrategicPurchasingImg from "@/public/images/resource-bookmark/resource/topic-wise-report/strategic-purchasing-in-health.jpg";
import UniversalHealthCoverageImg from "@/public/images/resource-bookmark/resource/topic-wise-report/universal-health-coverage.jpg";
import UrbanHealthImg from "@/public/images/resource-bookmark/resource/topic-wise-report/urban-health.jpg";
import VaccineImg from "@/public/images/resource-bookmark/resource/topic-wise-report/vaccines.jpg";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

const reportsData = [
  {
    title: "Climate Change and Public Health",
    href: "/resources/reports/topic-wise-reports/climate-change-and-public-health",
    description: "",
    Icon: ClimateChangeImg,
  },
  {
    title: "Health Financing",
    href: "/resources/reports/topic-wise-reports/health-financing",
    description: "",
    Icon: HealthFinancingImg,
  },
  {
    title: "Health Policy and Analysis",
    href: "/resources/reports/topic-wise-reports/health-policy-and-analysis",
    description: "",
    Icon: HealthPolicyAnalysisImg,
  },
  {
    title: "Health Service Delivery",
    href: "/resources/reports/topic-wise-reports/health-service-delivery",
    description: "",
    Icon: HealthServiceDeliveryImg,
  },
  {
    title: "Health System and Governance",
    href: "/resources/reports/topic-wise-reports/health-system-and-goverance",
    description: "",
    Icon: HealthSystemGoveranceImg,
  },
  {
    title: "Health Workers and Human Resources",
    href: "/resources/reports/topic-wise-reports/health-workers-and-human-resources",
    description: "",
    Icon: HealthWorkersImg,
  },
  {
    title: "Maternal and Child Health",
    href: "/resources/reports/topic-wise-reports/maternal-and-child-health",
    description: "",
    Icon: MaternalChildHealthImg,
  },
  {
    title: "Mental Health",
    href: "/resources/reports/topic-wise-reports/mental-health",
    description: "",
    Icon: MentalHealthImg,
  },
  {
    title: "NCDs",
    href: "/resources/reports/topic-wise-reports/ncds",
    description: "",
    Icon: NCDsImg,
  },
  {
    title: "Nutrition",
    href: "/resources/reports/topic-wise-reports/nutrition",
    description: "",
    Icon: NutritionImg,
  },
  {
    title: "Primary Health Care",
    href: "/resources/reports/topic-wise-reports/primary-health-care",
    description: "",
    Icon: PrimaryHealthCareImg,
  },
  {
    title: "Private Sector and Public Private Mix",
    href: "/resources/reports/topic-wise-reports/private-public-mix",
    description: "",
    Icon: PrivateSectorImg,
  },
  {
    title: "Public Financial Management",
    href: "/resources/reports/topic-wise-reports/public-financial-management",
    description: "",
    Icon: PublicFinancialManagementImg,
  },
  {
    title: "Strategic Purchasing in Health",
    href: "/resources/reports/topic-wise-reports/strategic-purchasing-in-health",
    description: "",
    Icon: StrategicPurchasingImg,
  },
  {
    title: "Universal Health Coverage",
    href: "/resources/reports/topic-wise-reports/universal-health-coverage",
    description: "",
    Icon: UniversalHealthCoverageImg,
  },
  {
    title: "Urban Health",
    href: "/resources/reports/topic-wise-reports/urban-health",
    description: "",
    Icon: UrbanHealthImg,
  },
  {
    title: "Vaccine and Immunization",
    href: "/resources/reports/topic-wise-reports/vaccine-and-immunization",
    description: "",
    Icon: VaccineImg,
  },
];

const TopicWiseReports = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Topic Wise Reports" />

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-12 md:px-16 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-screen-xl mx-auto pt-8 pb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reportsData.map((report, index) => (
              <motion.div
                key={index}
                // variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Adjusts when animation triggers
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                }} // Staggered effect
              >
                <BookMarksSectionCard
                  title={report.title}
                  description={report.description}
                  href={report.href}
                  Icon={report.Icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicWiseReports;
