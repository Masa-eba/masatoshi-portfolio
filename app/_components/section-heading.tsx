type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-stone-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-stone-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
