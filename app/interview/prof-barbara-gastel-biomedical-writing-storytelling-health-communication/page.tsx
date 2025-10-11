import Image from "next/image";
import Link from "next/link";
import BarbaraGastelBio from "./BarbaraGastelBio";
import BarbaraGastelQuote from "@/components/Shared/SectionTitle/BarbaraGastelQuote";

// Heading component for section organization
function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-2xl md:text-[24px] font-semibold text-[#BE123C] underline underline-offset-4 decoration-[#FCA5A5] decoration-4 mb-4 flex items-center gap-3 transition-all duration-300 hover:text-[#9F1239]">
            <span>{children}</span>
        </h2>
    );
}

const ProfBarbaraGastelInterviewPage = () => {
    return (
        <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
            <div className="relative w-full  border-t-2 border-[#FFCE00]">
                <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 py-4">
                        <h1
                            className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
                            style={{ wordSpacing: "0.4rem" }}
                        >
                            <a
                                href="https://www.linkedin.com/in/barbaragastel/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
                            >
                                Prof. Barbara Gastel
                            </a>{" "}
                            on Biomedical Writing, Storytelling, and Health Communication: A Thoughtful Exchange
                        </h1>
                    </div>
                </div>
            </div>
            <BarbaraGastelQuote />

            {/* Interview Content */}
            <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
                {/* Career Reflections Section */}
                <Heading>Career Reflections</Heading>

                {/* Question 1 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB]">
                        Q. You've had a remarkable career spanning over four decades as an academician, science writer, and health communicator. How would you describe your professional identity to our readers?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Barbara Gastel:</span> Thanks for the good question. I guess my professional identity is mainly as someone who helps others communicate medical and scientific information effectively to various audiences.
                    </p>
                </div>

                {/* Question 2 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB]">
                        Q. As a physician, what sparked your interest in biomedical writing and editing? How has that journey evolved over time?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Barbara Gastel:</span> Ever since elementary school, I have been interested both in medicine and in writing and editing. For much of my education, these interests were competing ones. Then, when I was a student assistant editor of a medical journal during medical school, I realized that I could combine these interests through a career in medical communication. To help me in this field, I then spent most of my elective time during medical school obtaining a master's degree in public health.
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        Immediately after receiving my MD and MPH, I spent a summer working on the medicine section of Newsweek magazine as an American Association for the Advancement of Science (AAAS) mass media fellow. I then worked in a combination of writing, editing, and administration at the US National Institutes of Health. Then came 2 years teaching science writing at MIT and 2 years in China, mainly teaching faculty at Beijing Medical University (now Peking University Health Science Center) to write scientific papers in English for international journals. Upon returning from China, I applied my combined interest in medicine and communication in another way: as assistant dean for teaching at the University of California, San Francisco medical school. I then moved to Texas A&M University, which was preparing to start a master's degree program in science and technology journalism. I've now been at Texas A&M for many years.
                    </p>
                </div>

                {/* Question 3 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB]">
                        Q. In your current role as professor and director of the science communication program at a leading university, what are your core responsibilities and areas of focus?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Barbara Gastel:</span> As director of the MS program in science and technology journalism at Texas A&M University, I have administrative responsibilities such as recruiting students to the program, overseeing the admissions process, and guiding students as they progress through the program. I also do quite a bit of teaching. For example, I teach courses in science reporting, medical reporting, risk and crisis reporting, science editing, and scientific writing (writing journal articles and such). I do some medical-humanities teaching at our medical school. I write books and other items, mainly regarding the communication of science and medicine, and I edit. In addition, I give many conference presentations, webinars, workshops, and the like.
                    </p>
                </div>

                {/* Science and Health Writing Section */}
                <Heading>Science and Health Writing</Heading>

                {/* Question 4 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB]">
                        Q. You've authored several books on writing and editing. Could you share your experience of writing these books and the kind of response you've received from readers?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Barbara Gastel:</span> I've enjoyed writing these books, although writing about subjects such as writing and editing can be intimidating. Much of the books' content comes from teaching I've done and from questions students have asked me, and in ways the books are ones I wish I had had when I started teaching the subjects. As an author, I've had the pleasure of working with some excellent editors—and as an editor myself, I especially appreciate their contributions. Speaking of being both a writer and an editor: I think that being an editor makes me a more careful and exact writer, and that being a writer makes me a more compassionate editor.
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        Regarding response from readers: As an author, I don't often receive direct responses from readers. However, I try to envision readers as I write. And sometimes, at conferences or elsewhere, readers introduce themselves and say the books have been helpful. One person said he was surprised that I wasn't a man. Another told me that her mother had all my books. The person who said this later became one of my graduate students.
                    </p>
                </div>

                {/* Question 5 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB]">
                        Q. Are you currently working on a new book or planning any upcoming publications?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Barbara Gastel:</span> Thanks for asking. Actually, I have a new book coming out later this fall (in late fall 2025). The title is Medical Editing: A Guide to Learning the Craft and Building Your Career. Information about the book appears at{" "}
                        <a
                            href="https://press.uchicago.edu/ucp/books/book/chicago/M/bo257227736.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium"
                        >
                            https://press.uchicago.edu/ucp/books/book/chicago/M/bo257227736.html
                        </a>
                        . It's probably also time to start working on a new edition (the 10th edition) of{" "}
                        <a
                            href="https://www.goodreads.com/book/show/72160228"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium hover:text-blue-800"
                        >
                            How to Write and Publish a Scientific Paper
                        </a>
                        , of which I'm now first author. (I became coauthor starting with the 6th edition.) I also have some ideas for a less technical book I hope to write.
                    </p>
                    
                    {/* Book Cover Image */}
                    <div className="flex justify-center my-6">
                        <a
                            href="https://press.uchicago.edu/ucp/books/book/chicago/M/bo257227736.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block transform hover:scale-105 transition-transform duration-300"
                        >
                            <Image
                                src="/images/blog-interview/interview/Book Cover_Medical Editing.jpg"
                                alt="Medical Editing: A Guide to Learning the Craft and Building Your Career by Barbara Gastel"
                                width={300}
                                height={400}
                                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                            />
                        </a>
                    </div>
                </div>

                {/* Question 6 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB]">
                        Q. In today's rapidly evolving digital landscape, especially with the rise of artificial intelligence, how viable is health writing as a career?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Barbara Gastel:</span> My feeling is that health writing remains a viable career. Artificial intelligence, as a tool, may help health writers work more efficiently and may relieve health writers of some routine tasks. However, good health writing requires considerable creativity, judgment, and fact-checking. I think that humans are needed for such items.
                    </p>
                </div>

                {/* Question 7 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB]">
                        Q. Reading likely plays a big role in your routine—what sites or platforms do you turn to daily and recommend to others?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Barbara Gastel:</span> I probably don't keep up as well as I should. But here are some items I often turn to and recommend. Being in the United States, I follow various US news sources, such as the Associated Press, the Washington Post, the New York Times, NPR, and our local newspaper. Also, I receive posts and such from professional organizations in medical writing and related fields. I find LinkedIn helpful in learning of items to read and otherwise keeping up professionally. I still like print media too; receiving a physical copy of a high-quality magazine is a treat for me.
                    </p>
                </div>

                {/* Question 8 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB]">
                        Q. What are three key pieces of advice you would give to someone who wants to pursue a career in public health writing?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Barbara Gastel:</span> Three key pieces of advice are as follows: (1) Obtain a broad education, and continue to learn broadly, as high-quality public health writing draws on many fields. (2) Remain flexible, because opportunities, technologies, needs, and more keep evolving. For example, I'm answering this set of questions online—a possibility that didn't exist early in my career. (3) Most important, strive consistently for high standards in your work, as public health writing is a major responsibility and can make a major difference in people's lives.
                    </p>
                </div>

                {/* Get to know Barbara Gastel Section */}
                <Heading>Get to know Barbara Gastel</Heading>

                {/* Question 9 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB]">
                        Q. Do you have any professional role models whose work has inspired you?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Barbara Gastel:</span> Yes and no. I don't think I have professional role models whose work is literally very similar to mine. However, there are individuals whose work I emulate in various regards. For example, my father (a patent attorney) and my mother (a homemaker who became a part-time antique dealer) followed their professional dreams, had high standards, and were highly ethical in their work; I try to be like them. Also, the scientist whose laboratory I worked in during high school was a mentor who inspired me; an essay I wrote in that regard is available at <a href="https://www.science.org/doi/10.1126/science.354.6318.1494" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">https://www.science.org/doi/10.1126/science.354.6318.1494</a>. In addition, two administrators with a gift for matching needed work with people whose skills and interests suited them well for it have served in part as role models.
                    </p>
                </div>

                {/* Question 10 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB]">
                        Q. Is there a personal motto or guiding principle that you live by in your professional or personal life?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Barbara Gastel:</span> I'm not sure there's any single motto or guiding principle. However, I've always considered it crucial to be ethical and to be kind. Without those items, nothing else matters. Also, I'm not big on comparisons and competition. In my view, little is to be gained by seeing whether I am doing better or worse than others; the energy is better spent just trying to do well. And rather than compete, I prefer to differentiate; if a niche is crowded, there are plenty of other good niches.
                    </p>
                </div>

                {/* Question 11 */}
                <div className="mb-4">
                    <h2 className="text-[18px] font-bold text-[#2D8CBB]">
                        Q. What book are you currently reading, and what insights or reflections would you like to share from it?
                    </h2>
                    <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
                        <span className="font-bold">Barbara Gastel:</span> I just finished reading{" "}
                        <a
                            href="https://www.goodreads.com/book/show/220341389-everything-is-tuberculosis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium hover:text-blue-800"
                        >
                            Everything Is Tuberculosis
                        </a>
                        , by{" "}
                        <a
                            href="https://www.johngreenbooks.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium hover:text-blue-800"
                        >
                            John Green
                        </a>
                        , Clearly, a major message of this book is that tuberculosis remains a huge problem in lower-income countries and that addressing this problem deserves much more funding and attention. I was impressed with the wide range of fields this book drew on, and I found the book very well crafted, with excellent integration of narrative and exposition. Also, I've now almost finished reading Flavorama: A Guide to Unlocking the Art and Science of Flavor, by Arielle Johnson. This book, which is a nontechnical introduction to flavor science, draws on a variety of disciplines and is well crafted; I especially enjoyed some of the author's analogies. As someone who likes to cook and bake (and eat and serve), I look forward to applying insights from this book.
                    </p>
                </div>

                <p className="text-[#001844] text-2xl mt-4 leading-relaxed text-center font-semibold bg-yellow-200 p-2 rounded-md">
                    Interview conducted by{" "}
                    <Link
                        href="/sizear"
                        className="text-blue-700 font-bold hover:underline"
                    >
                        Monaemul Islam Sizear
                    </Link>
                </p>
            </div>
            <BarbaraGastelBio />

            <div className="flex justify-center my-4 ">
                <Link
                    href="/interview/public-health-insights-1"
                    // onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 font-bold text-xl bg-[#FFCE00] text-black px-4 py-2 hover:text-white hover:bg-[#2D8CBB]   transition ease-in-out duration-200"
                >
                    Next Interview
                </Link>
            </div>
        </div>
    );
};

export default ProfBarbaraGastelInterviewPage;
