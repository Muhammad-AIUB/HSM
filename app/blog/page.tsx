"use client";

import { BlogCard } from "@/components/ui/BlogCard";
import FlanneryImage from "@/public/images/blog-interview/Flannery.png";
import Image from "next/image";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import TasdipDip from "@/public/images/blog-interview/TasdikDip.jpg";
import ShahPoran from "@/public/images/blog-interview/ShahParan.jpg";
import Himika from "@/public/images/blog-interview/Himika.jpg";

const blogs = [
    {
        title: "Beyond the Silence: Why Bangladesh Needs Comprehensive Sexuality Education Now",
        description:
            "To achieve Universal Health Coverage and the Sustainable Development Goals, at least 15% of total budget and 4-5% of gross domestic product (GDP) should be invested in healthcare in Bangladesh. However, t",
        date: "May 15, 2025",
        type: "blog",
        thumbnail: Himika,
    },
    {
        title: "Overcoming Budget Bottlenecks: Ensuring Effective Health Financing for Universal Health Coverage in Bangladesh",
        description:
            "To achieve Universal Health Coverage and the Sustainable Development Goals, at least 15% of total budget and 4-5% of gross domestic product (GDP) should be invested in healthcare in Bangladesh. However, t",
        date: "May 02, 2025",
        type: "blog",
        thumbnail: ShahPoran,
    },
    {
        title: "Bridging the Gaps: Strengthening Mental Healthcare to Build a Resilient Health System in Bangladesh",
        description:
            "Mental health remains a critical yet often neglected aspect of Bangladesh’s healthcare system. The country faces significant challenges.",
        date: "May 01, 2025",
        type: "blog",
        thumbnail: TasdipDip,
    },
];

const BlogPage = () => {
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    return (
        <div className="pb-20">
            {/* Page Title Section */}
            <div className="relative w-full h-auto">
                <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 py-1 gap-4 md:gap-6">
                        <h1
                            className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] lg:shrink-0"
                            style={{ wordSpacing: "0.4rem" }}
                        >
                            Blogs
                        </h1>
                        <div className="text-md text-black font-medium text-center md:text-left max-w-3xl w-full md:w-auto">
                            <p className="text-2xl font-roboto  text-gray-800 font-semibold">
                                &quot;I write to discover what I know&quot;
                            </p>
                            <p className="mt-2">
                                <span className="font-bold text-blue-900">
                                    O&apos;Connor{" "}
                                </span>
                                -{" "}
                                <span className="font-medium text-blue-700/80">
                                    American Author
                                </span>
                            </p>
                        </div>
                        <div>
                            <Image
                                src={FlanneryImage}
                                alt="Flannery O'Connor"
                                width={100}
                                height={100}
                                className="rounded-full my-1 aspect-square object-cover object-top md:mr-12"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Carousel */}
            <div className="max-w-6xl mx-auto px-8 mt-12">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 3000,
                            stopOnInteraction: true,
                            stopOnMouseEnter: true,
                        }),
                    ]}
                    setApi={setApi}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 pb-10">
                        {blogs.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 md:basis-1/2 lg:basis-1/2 pt-1 pb-4"
                            >
                                <BlogCard item={item} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="hidden md:flex -left-12 border-0 bg-[#ffe590] border-[#001844] text-[#001844] text-xl hover:bg-[#001844]" />
                    <CarouselNext className="hidden md:flex -right-12 border-0 bg-[#ffe590] border-[#001844] text-[#001844] text-xl hover:bg-[#001844]" />
                </Carousel>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {blogs.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                current === index
                                    ? "bg-[#1E60AC] w-6"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
