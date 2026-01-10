import { BlogCard } from "@/components/ui/BlogCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";


const BlogPage = () => {
  return (
    <div>
      <div className="bg-[#001844]">
        <Breadcrumb className="py-4 px-8 max-w-screen-xl mx-auto">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" className="text-gray-300">
                HOME
              </Link>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-gray-100" />
            <BreadcrumbItem>
              <Link href="/blog-and-interview" className="text-gray-300">
                BLOG & INTERVIEW
              </Link>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-gray-100" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">BLOG</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Section title */}
      <div className="bg-[#001844] rounded-b-2xl">
        <div className="min-h-[calc(100vh-168px)] px-8 flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto gap-8">
          {/* Text Content - 50% Width */}
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-[1000] text-white mb-5">BLOG</h1>
            <p className="text-xl text-gray-300">
              This section features original blogs and insights from public
              health professionals while providing an opportunity for you to
              share your stories and ideas. Feel free to contribute—just reach
              out to us via email!
            </p>
          </div>

          {/* Image - 50% Width */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
              alt="blog"
              width={800}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20 max-w-screen-xl mx-auto px-8">
        <BlogCard
          key="empowered-families"
          item={{
            title: "Empowered Families, Healthier Babies",
            description:
              "When Amina (pseudonym), a first-time mother from a village near Dhaka, gave birth at the local Upazila Health Complex, she felt anxious about caring for her newborn. Everything changed when she attended a hospital-based health education session.",
            date: "05 December, 2025",
            type: "blog",
            thumbnail: "/images/blog-interview/islam.jpg",
          }}
        />

        <BlogCard
          item={{
            title:
              "A Nursing Development Strategy for Bangladesh",
            description:
              "Increasing and improving production of nurses is widely discussed in Bangladesh. There are obvious benefits from meeting national health care needs as well as remittances by nurses who emigrate. There are also risks and hazards for funders, for population health and for nurses themselves.",
            date: "September 12, 2025",
            type: "blog",
            thumbnail:
              "/images/blog-interview/nurse-photo.jpeg",
          }}
        />

        <BlogCard
          item={{
            title:
              "Bridging the Gaps: Strengthening Mental Healthcare to Build a Resilient Health System in Bangladesh",
            description:
              "Mental health remains a critical yet often neglected aspect of Bangladesh's healthcare system. The country faces significant challenges ",
            date: "February 8, 2025",
            type: "blog",
            thumbnail:
              "https://media.istockphoto.com/id/1252684502/photo/professional-blogger-working-on-his-new-post-for-social-media-at-home-closeup-creative.jpg?s=612x612&w=0&k=20&c=VR7V3Hn1HKjMQdykk2zjQ-2Xjsiw3tewZFZMp6swpog=",
          }}
        />

        <BlogCard
          item={{
            title:
              "Overcoming Budget Bottlenecks: Ensuring Effective Health Financing for Universal Health Coverage in Bangladesh",
            description:
              "To achieve Universal Health Coverage and the Sustainable Development Goals, at least 15% of total budget and 4-5% of gross domestic product (GDP) should be invested in healthcare in Bangladesh. However, t",
            date: "February 8, 2025",
            type: "blog",
            thumbnail:
              "https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg",
          }}
        />

        <BlogCard
          item={{
            title:
              "Breaking the Aid Dependency Cycle: Strategies for Building Self-Sustaining Organizations",
            description:
              "When donor support ends, organizations are often seen adjusting programs, cutting staff, and hoping to survive the transition. That's what I witnessed firsthand when the USAID-funded project I worked on was cancelled.",
            date: "27 July, 2025",
            type: "blog",
            thumbnail:
              "/images/blog-interview/afroja-yesmin.jpg.jpg",
          }}
        />

        <BlogCard
          item={{
            title:
              "Antimicrobial Resistance in Bangladesh: A Public Health Reckoning",
            description:
              "Antimicrobial resistance (AMR) has emerged as one of the most pressing public health threats of our time. In Bangladesh, where infectious diseases remain a leading cause of morbidity and mortality, the rise of resistant pathogens poses a grave challenge to the health system.",
            date: "18 October, 2025",
            type: "blog",
            thumbnail:
              "/images/blog-interview/bigstock-top-view-of-colorful-antibioti-299162842-1562874632229.jpg",
          }}
        />

        <BlogCard
          item={{
            title:
              "From River to Table: Microplastics as an Emerging Public Health Concern in Bangladesh",
            description:
              "Bangladesh is known as the land of rivers. These waterways are the lifelines of the nation feeding millions, supporting livelihoods and shaping cultural identity. The proverb 'Mache Bhate Bangali' reflects the central role of fish in daily diets and society.",
            date: "20 October, 2025",
            type: "blog",
            thumbnail:
              "/images/blog-interview/Nusrat_picture.jpg",
          }}
        />

        <BlogCard
          key="strengthening-postnatal-care"
          item={{
            title:
              "Strengthening Postnatal Care and Tuberculosis Management",
            description:
              "Postnatal care (PNC) is vital for maternal and newborn survival, yet coverage in South-East Asia remains uneven. Nearly half of women (46%) receive comprehensive services, while 8% receive none. Rural, low-income, and less-educated families are disproportionately excluded.",
            date: "11 January, 2026",
            type: "blog",
            thumbnail:
              "/images/blog-interview/DrHyder3.jpg",
          }}
        />
      </div>
    </div>
  );
};

export default BlogPage;
