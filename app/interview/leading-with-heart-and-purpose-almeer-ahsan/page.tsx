import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const AlmeerAhsanInterview = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              Leading with Heart and Purpose: {" "}
              <br />
              A Grounded Conversation with {" "}
              <a
                href="https://www.linkedin.com/in/almeer-ahsan-asif/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Almeer Ahsan
              </a>
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            {/* Circular Image with focusable link */}
            <a
              href="/images/blog-interview/interview/almeer-ahsan.jpg.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-52 h-52 shrink-0 rounded-full overflow-hidden block focus:outline-none focus:ring-4 focus:ring-[#FFCE00]"
              tabIndex={0}
            >
              <Image
                src="/images/blog-interview/interview/almeer-ahsan.jpg.jpg"
                alt="Almeer Ahsan"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </a>

            <div className="bg-[#FFCE00] flex-1 w-full text-black p-4 sm:p-6 rounded-md shadow-md">
              {/* Name and Title (left), LinkedIn (right) */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <p className="text-xl font-semibold text-gray-800 flex flex-wrap gap-2">
                  — Almeer Ahsan, A Development Practitioner and Associate Director, VisionSpring
                </p>
                <a
                  href="https://www.linkedin.com/in/almeer-ahsan-asif/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
              {/* Justified quote */}
              <p className="text-2xl md:text-[28px] font-base leading-relaxed text-center">
                “Leadership is about creating space — space for others to grow, to speak up, and to take ownership of their journey. It’s about enabling others to discover their strength, not controlling the outcome.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        <h2 className="text-2xl font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">Leadership and Career Questions</span>
        </h2>
        {/* Q1 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What motivated you to pursue a career in development, and how pleased are you with your current path?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Almeer Ahsan:</span> I’ve always felt a strong pull toward doing good for others — a sense that my life should be used in service of people, not just processes. That belief eventually led me to a crossroads: though I began with an academic background in engineering, I realized that working on systems and machines wasn’t where my heart was. I wanted to work with human beings — to help build dignity, access, and opportunity.<br/><br/>
            So I made a shift into the development sector, not out of convenience, but conviction. I’ve since had the privilege to contribute to programs supported by global development partners like USAID, FCDO, and the IKEA Foundation. The work has taken effort, adjustment, and at times personal sacrifice — but I wouldn’t trade it. I feel proud and fulfilled walking a path that’s not only shaped me professionally, but also helped me grow in empathy, purpose, and resilience.
          </p>
        </div>
        {/* Q2 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What is the most important lesson you have gained over the course of your ten-year career?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Almeer Ahsan:</span> The most powerful lesson I’ve learned is that real change doesn’t come from well-written proposals or perfect plans — it comes from listening. If you’re not willing to hear people’s realities, then you’re not really helping them.<br/><br/>
            Technical skills are important, yes, but curiosity, humility, and the courage to take ownership are what make you truly effective. I’ve also learned that leadership means stepping forward when things are uncertain — and when things go wrong, it means not shifting blame but standing tall. You don’t need to be perfect; you just need to be committed.
          </p>
        </div>
        {/* Q3 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You’ve finished a number of prestigious leadership courses, including one from Harvard University. What does leadership mean to you, and what is the most important thing you’ve learnt?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Almeer Ahsan:</span> To me, leadership is about creating space — space for others to grow, to speak up, and to take ownership of their journey. It’s about enabling others to discover their strength, not controlling the outcome.<br/><br/>
            One of the most valuable lessons I’ve learned, especially from adaptive leadership frameworks, is that the most effective leaders aren’t the ones who always have answers. They’re the ones who can reflect in the middle of their action, who stay steady when stakes are high, and who know when to pause and step back to see the bigger picture. That balance — between doing and being — has shaped how I show up as a leader.
          </p>
        </div>
        {/* Q4 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Prior to the USAID project closing, you held the position of Deputy Chief of Party for nine months. What was the most difficult thing you had to deal with during your experience?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Almeer Ahsan:</span> Serving as Deputy Chief of Party on the USAID Bijoyee Project was one of the most formative roles I’ve had. In that time, the project reached over 10,000 young people out of 200,000 with soft skills training, enabled 1,000 job placements, and built 30 youth-led partnerships.<br/><br/>
            But the most challenging part? Managing complexity — and uncertainty. The project focused on multiple areas: employment, advocacy, and strengthening youth-led organizations. Keeping those priorities focused, coordinated, and people-centered wasn’t easy. When the Stop Work Order came through, we had to make tough calls quickly while staying true to our values and the communities we served. That period taught me resilience, strategic clarity, and how to lead with both head and heart.
          </p>
        </div>
        {/* Q5 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. When you think back on your career, what has given you the most fulfilment? Who has inspired you the most in the development field, and why?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Almeer Ahsan:</span> The moments that stay with me aren’t just the metrics — they’re the faces, the stories, the transformations. Watching a young participant gain confidence, take initiative, and become a changemaker in their own right is what fills me with the deepest pride. That’s what development is about — not quick wins, but lasting change in people’s lives.<br/><br/>
            I draw inspiration from frontline workers, community volunteers, and youth leaders — the quiet, relentless forces who keep pushing for better despite limited recognition. And my students — whether online or in-person — constantly make me proud. When I see them out in the world doing good work and staying grounded as good humans, it’s the most fulfilling return I could ask for.
          </p>
        </div>
        {/* Q6 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What are you working on right now, and what do you have planned for the future? Why?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Almeer Ahsan:</span> Right now, I’m building a leadership coaching program that supports young people and professionals in leading more purposeful, ethically grounded lives. It’s about more than just skills — it’s about cultivating clarity, confidence, and a sense of responsibility.<br/><br/>
            At the same time, I’m investing in myself. I’m focusing on my health, reconnecting with my hobbies, and brushing up on project management tools. The goal is balance — to be just as intentional about personal growth as I am about professional impact.
          </p>
        </div>
        {/* Q7 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Which three abilities are most crucial for success in the field of global development?
          </h3>
          <div className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Almeer Ahsan:</span>
            <p className="mt-4 mb-2 font-bold italic text-[#8e24aa]">Systems thinking:</p>
            <p className="mb-4">Because development doesn’t happen in silos. To create change, you need to understand how people, policies, and power interact.</p>
            <p className="mb-2 font-bold italic text-[#8e24aa]">Adaptability:</p>
            <p className="mb-4">Because the context is constantly shifting, and rigid plans rarely survive reality.</p>
            <p className="mb-2 font-bold italic text-[#8e24aa]">Empathetic communication:</p>
            <p>Because trust is the foundation of everything. People don’t just need to be informed — they need to be understood.</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">Get to Know Almeer Ahsan</span>
        </h2>
        {/* Q8 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you reading right now? Any lessons to share?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Almeer Ahsan:</span> I enjoy fiction, but nonfiction books often leave a deeper imprint. Leadership on the Line by Ronald Heifetz taught me that leadership often means taking heat for pushing necessary change — and that it’s vital to care for yourself in the process.<br/><br/>
            Lessons from the Life of the Prophet (SAW) by Mirza Yawar Baig reminded me that compassion and courage are inseparable. The strength to forgive, the commitment to justice, and the patience to lead through uncertainty — these are timeless qualities that inspire me deeply.
          </p>
        </div>
        {/* Q9 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Where in Bangladesh would you go for inspiration if you could take a vacation?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Almeer Ahsan:</span> Cox’s Bazar. The sea has a way of stripping away the noise and bringing clarity. Standing at the edge of that endless horizon, I’m reminded of how small we are — and yet how much we can do with the time and purpose we’re given. It helps me reset, and return to the work with fresh eyes and a calmer heart.
          </p>
        </div>
        {/* Q10 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What is the most amusing or unexpected thing that has happened to you in your professional life?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Almeer Ahsan:</span> I’ve taught thousands — in classrooms, webinars, and community spaces. So I’ve gotten used to being unexpectedly recognized. But it still makes me laugh every time someone comes up and says, “Weren’t you the one who taught us that session?” It’s humbling, really. Those small moments remind me that teaching travels far, and sometimes circles back when you least expect it.
          </p>
        </div>
        {/* Q11 */}
        <div className="mb-2">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. In five words, how would you characterise yourself as a development professional and as a person?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Almeer Ahsan:</span> Responsible. Motivated. Patient. Curious. Evolving.
          </p>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto px-12 py-2 bg-[#E3F6FC] rounded-lg mt-8 ">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1976A5] text-center mb-2" style={{fontFamily: 'inherit'}}>
          Bio of Almeer Ahsan
        </h2>
        <div className="flex justify-center mb-4">
          <span className="block w-20 h-1 bg-yellow-400 rounded-full"></span>
        </div>
        <div>
          <p className="mt-2 leading-relaxed text-center text-[17px] text-[#222] text-justify">
            Almeer Ahsan is a Bangladeshi development practitioner with more than a decade of experience leading donor-funded projects supported by USAID, FCDO, and the IKEA Foundation. Most recently, he served as Deputy Chief of Party for the USAID Bijoyee Project, where he led initiatives that trained over 10,000 youth, secured 1,000 job placements, and established 30 youth-led partnerships. With two Master’s degrees, a UK-certified Postgraduate Diploma in Project Management, and current enrollment in an EMBA at IBA, University of Dhaka, Almeer combines academic depth with real-world impact. A passionate trainer and mentor, he is now developing a leadership program focused on purpose-driven living and civic engagement. Outside of work, he’s rediscovering his hobbies, prioritizing his health, and continuing to learn — always with the same purpose that brought him into the sector: to serve people with dignity and care.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <a href="/interview/alex-berland-on-elevating-nursing-education">
          <button className="bg-[#FFCE00] text-black font-bold px-8 py-3 rounded hover:bg-yellow-400 transition text-lg shadow-md">
            Next Interview
          </button>
        </a>
      </div>
    </div>
  );
};

export default AlmeerAhsanInterview; 