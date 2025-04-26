"use client";

import { useState } from "react";
// import { motion } from "framer-motion";
import Link from "next/link";
// import Image from "next/image";
/* eslint-disable react/no-unescaped-entities */
const BioOfSharmeenYasmeen = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        Bio of Prof. Sharmeen Yesmeen,{" "}
        <span className="text-base">MBBS, MPH, M.Phil</span>
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Professor Dr. Sharmeen Yasmeen is a distinguished public health
            academic in Bangladesh with over 33 years of teaching experience.
            She currently serves as Professor and Head of the Department of
            Community Medicine at Bangladesh Medical College, Dhaka. Dr. Yasmeen
            holds an MPhil in Preventive and Social Medicine (2005) and an MPH
            in Community Medicine (1997), both from NIPSOM under the University
            of Dhaka, graduating with highest distinction. She earned her MBBS
            from Chittagong Medical College in 1990 with distinction. <br />{" "}
            <br />
            She has served as an Adjunct Professor at Independent University,
            Bangladesh, and as an external examiner for international PhD
            theses. In 2010, she contributed to the WHO project “Guidelines to
            Improve Teaching of Public Health in Undergraduate Medical Schools
            in South East Asia” as a temporary adviser. Dr. Yasmeen is a
            contributing author to the widely used Textbook of Community
            Medicine and Public Health (3rd–6th editions). Her team’s poster,
            “Tobacco Cessation Module in Imparting Education,” was featured in
            the book “Educating Medical Students About Tobacco,” edited by Robyn
            Richmond of the University of New South Wales.
            <br />
            <br />
            Her consultancy work includes projects such as “Family Welfare and
            Reproductive Health for Garment Workers” (BGMEA/UNFPA/GOB) and
            Public Health Epidemiologist Training, a collaborative program by US
            CDC and LGRD Ministry, implemented by Save the Children and
            SafetyNet across 12 city corporations.
            <br />
            <br />
            She also an active organizer of public health conferences,
            trainings, and workshops, Dr. Yasmeen frequently appears in
            electronic media to promote health awareness and has presented at
            national and international platforms. She is an elected Executive
            Committee member of the South East Asia Public Health Education
            Institutions Network (SEAPHEIN), Editor-in-Chief of Bangladesh
            Medical College Journal, and a reviewer for several academic
            journals. She has published over 50 papers in national and
            international journals.
            <br />
            <br />
            Dr. Yasmeen is a Founding Member and former Chairperson,
            Vice-Chairperson, and CEO of the Public Health Foundation of
            Bangladesh (PHFBD), where she now serves as Adviser. She is also
            Chairperson of the Autism Welfare Foundation (AWF), Scientific
            Secretary of the Public Health Association of Bangladesh (PHAB), and
            Managing Director of Smart Healthcare and Research Limited (SHRL).
            <br />
            <br />
            Recognized for her versatile contributions, Dr. Yasmeen is committed
            to mentoring young professionals and advancing the public health
            landscape in Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfSharmeenYasmeen;
