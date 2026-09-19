function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}) {
    const alignment = 
        align === "center"
            ? "mx-auto text-center"
            : "text-left";

    return (
        <div className={`max-w-2xl ${alignment}`}>

            {eyebrow && (
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                    {eyebrow}
                </p>
            )}

            <h2 classname="text-3xl font-bold tracking-tight text-white text-white sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-lg leading-relaxed text-slate-400">
                    {description}
                </p>
            )}

        </div>
    );
}

export default SectionHeading;