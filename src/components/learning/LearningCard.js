import Image from "next/image";

export default function LearningCard({ item }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-brand-border bg-white">

      {item.learningImg && (
        <Image
          src={item.learningImg}
          alt={`${item.learningTitle} preview`}
          width={900}
          height={560}
          className="aspect-[16/10] w-full object-cover"
        />
      )}

      <div className="p-5 sm:p-6">

        <p className="text-sm font-semibold text-brand-teal">
          {item.learningCategory}
        </p>

        <h2 className="mt-2 text-xl font-bold text-brand-navy">
          {item.learningTitle}
        </h2>

        <p className="mt-4 leading-7 text-brand-slate">
          {item.learningTopics}
        </p>

      </div>
    </article>
  );
}