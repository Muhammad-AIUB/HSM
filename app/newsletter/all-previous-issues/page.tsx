import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

const AllPreviousIssuesPage = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="All Previous Issues" />

      <div className="my-12 px-4 max-w-5xl mx-auto">
        <p className="font-medium text-[18px]">
          Health Systems Matter is a newly launched platform and the newsletter
          will be featured here upon publication. We sincerely appreciate your
          interest and patience as we prepare to share our first edition.{" "}
          <span className="text-2xl">👌</span>
        </p>
      </div>
    </div>
  );
};

export default AllPreviousIssuesPage;
