import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import BioOfSabaWaseem from "./BioOfSabaWaseem";

const GlobalHealthFinancingExpert = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              Global Health Financing and Career Questions: <br /> An Interview with {" "}
              <a
                href="https://www.linkedin.com/in/saba-waseem-09b37b4a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Dr. Saba Waseem
              </a>
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            {/* Circular Image */}
            <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden ">
              <Image
                src="/images/blog-interview/interview/saba-waseem.jpg"
                alt="Dr. Saba Waseem"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Dr. Saba Waseem, Development Economist and Global Health System Strengthening Expert
                <a
                  href="https://www.linkedin.com/in/saba-waseem-09b37b4a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>
              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                "Young professionals should understand what motivates private companies to invest in public health and find ways to foster those partnerships. It's an exciting time to scale innovative financing solutions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        <h2 className="text-2xl font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">Global Health Financing and Career Questions</span>
        </h2>
        {/* Q1 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Pursuing a PhD takes dedication. Based on your time at Cornell University, what was the most rewarding part of that experience, and how has it shaped your career?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Saba Waseem:</span> One of the most valuable things I learned at Cornell was how to think independently. Coming from a South Asian educational background, I had deep knowledge of economics but lacked true understanding of its application. I used to do well in exams, giving the 'correct' answers in class. But Cornell was a whole different ball game, it really pushed me out of my comfort zone. I realized I was expected to have my own opinion. I had to learn how to come up with my own ideas, build a case around them, gather evidence, defend my hypotheses, and see the paper or thesis through from start to finish. That process—taking ownership of an idea from conception to completion—was incredibly rewarding and helped me grow in ways I hadn't expected.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            The other aspect of my time at Cornell I really appreciated was the flexibility to work across disciplines. I'd studied economics in a very focused, traditional way for years. But I'd always felt that real-world problems, especially social issues, can't be fully understood through just one disciplinary lens. At Cornell, I was able to design a truly interdisciplinary program. I took courses in economics, sociology, and development planning, and formed my PhD committee that reflected those varied interests. That exposure helped me appreciate how other social sciences can complement (or even challenge) the economic perspective, especially when working on complex issues like poverty and access to finance.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            This interdisciplinary foundation has had a lasting impact on my career. It taught me not to limit myself to one discipline when tackling a problem. As a result, I've been able to move comfortably across related areas, starting with social protection and poverty analysis and later transitioning into health systems and health financing. These shifts might seem like big leaps, but because I had learned to think in broader, cross-cutting ways, those transitions felt natural.
          </p>
        </div>
        {/* Q2 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. With over 25 years in global health and roles at respected organizations like the World Bank, Abt Associates, and Palladium, what do you consider your greatest professional achievement? What part of your work brings you the most fulfillment?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Saba Waseem:</span> It's tough to point to just one achievement because, as development professionals, we know that most of the work we do happens within a larger ecosystem. Real, sustainable change takes time, and progress is often slower than we'd like. I've seen firsthand that even when we make great strides, things can slip when priorities shift, or external factors change.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            When I look back on my career, the greatest joy I've found has been working with teams—whether it's with colleagues I've had the honor to lead, government officials, or community stakeholders we've supported. In academic jargon, one could say building social capital! The energy and creativity that come from collaborating as a team far outweigh what anyone could achieve on their own. I take pride in building up people, fostering their confidence, and empowering them to take ownership of their work. Especially in places where people are hesitant about topics like health financing, seeing them gain confidence and understanding how to implement change is incredibly fulfilling. Helping others own their work and realize they can make a difference is definitely my biggest achievement.
          </p>
        </div>
        {/* Q3 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What long-term impacts do you anticipate from the recent U.S. funding cuts? How can low-income countries respond to this challenge?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Saba Waseem:</span> The road ahead is certainly going to be challenging for many countries, but I'm not entirely pessimistic. Raising alternate funds is imperative but it's just the start. The real challenge is how well countries can manage and use those funds efficiently and effectively, and most important, equitably. For example, in our work on sustainable tuberculosis financing, we've seen how over-reliance on external systems can erode local systems.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            With funding cuts, countries will need to step up and take the lead in establishing efficient and integrated systems for planning, and budgeting and executing the programs that used to be primarily donor funded. For countries that are forward-looking, this is a chance to reassess priorities, streamline operations, and get the most out of available resources. I do believe that external support will still be necessary, but this is also a pivotal moment for countries to take charge and not hesitate to engage with organizations that can help them strengthen their systems. From a health financing perspective, raising funds is important, but reinforcing the systems to spend them wisely is the real long-term challenge.
          </p>
        </div>
        {/* Q4 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. How has your view on sustainable financing in global health evolved? What advice would you offer to someone starting their career in this area today?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Saba Waseem:</span> It's an exciting—and challenging—time to be entering the field of global health financing. While it might seem like opportunities are limited, I think it's actually a great time to think outside the box. Sustainable financing has always been a burning issue for us health financing folks, but it was often sidelined by the wider global health community because it didn't feel urgent. Now, with the dire financing landscape, early career health finance experts will find that their expertise is much needed. They can look forward to shaping the health financing landscape over the next twenty years. One obvious area is to build expertise in working with the private sector. Young professionals should understand what motivates private companies to invest in public health and find ways to foster those partnerships. It's an exciting time to scale innovative financing solutions, and my advice would be to stay adaptable, stay curious, and keep looking for new ways to make an impact.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">Get to know Saba Waseem</span>
        </h3>
        {/* Q5 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who's your public health hero—and what is it about their work that truly inspires you?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Saba Waseem:</span> Recently, I was given Jonathan Greene's new book called Everything Is Tuberculosis. Greene is a bestselling author who has become one of the most well-recognized advocates for TB patients. He writes so eloquently about the human face of TB and linking its persistence to injustice and inequity. His perspective that a society's response to tuberculosis epitomizes its health system's functioning, spoke to me. This is what attracted me to working on TB and continues to inspire me.
          </p>
        </div>
        {/* Q6 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you reading right now? Any powerful insight or "aha" moment you'd like to share?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Saba Waseem:</span> I tend to read a few books at once, but right now, I've been diving into some financial markets and economic systems equity-related reading. But the book that really left an impression on me recently was A Pale View of Hills by Kazuo Ishiguro. It's set in Nagasaki right after World War II, and it explores some heavy, poignant themes. I had the chance to visit Nagasaki recently, and this book brought the place and its history to life in a way that was deeply moving.
          </p>
        </div>
        {/* Q7 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have a personal motto or mantra you live by?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Saba Waseem:</span> Growing up, my father used to always say, "What's done is done, move on." It's a simple idea, but it's one I find myself coming back to often. Whether it's reflecting on past mistakes or just trying to move forward after a challenging situation, I've learned not to dwell too much on what's behind me. It's something I think about now —looking ahead and thinking about how we can engage in the changing circumstances we're facing today.
          </p>
        </div>
        {/* Q8 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: Any special memories from your several visits to Bangladesh that still make you smile?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Saba Waseem:</span> I grew up in eastern India, in Bihar and then Shillong, right next to Bangladesh, so going to Dhaka always feels like going home. The culture, intellectual curiosity, the warmth of the people, and the mishti (sweet) —it all feels so familiar to me. One of my favorite memories is from a trip during Ramadan when I had the chance to experience the tradition of eating Halim at Ifter. I was going through a vegetarian phase, and let's just say resisting the temptation was a bit tough! But what has really stuck with me is the hospitality, the warmth and respect people have for one another. It's a place that always feels like home, and I'm looking forward to reconnecting soon.
          </p>
        </div>
      </div>
      <BioOfSabaWaseem />
    </div>
  );
};

export default GlobalHealthFinancingExpert; 