import Image from "next/image";

export default function ToolCard({ tool }) {
  return (
    <article className="rounded-2xl border border-brand-border bg-white p-5 sm:p-6">

      {tool.appIcon && (
        <Image
          src={tool.appIcon}
          alt={`${tool.appTitle} icon`}
          width={56}
          height={56}
          className="h-14 w-14 object-contain"
        />
      )}

      <p className="mt-5 text-sm font-semibold text-brand-teal">
        {tool.appCategory}
      </p>

      <h3 className="mt-2 text-xl font-bold text-brand-navy">
        {tool.appTitle}
      </h3>

      <p className="mt-3 text-sm leading-6 text-brand-slate">
        {tool.appTechnology}
      </p>

      {tool.appUrl && (
        <a
          href={tool.appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center font-semibold text-brand-teal hover:underline"
        >
          Open Tool →
        </a>
      )}

    </article>
  );
}