import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

function ConventionCard({
  title,
  description,
  technologies,
  image,
  demoUrl,
  githubUrl,
}) {
  return (
    <Card className="overflow-hidden">

      {/* Project image */}
      <img
        src={image}
        alt={`${title} project preview`}
        className="aspect-video w-full object-cover"
        loading="lazy"
      />

      <div className="p-6">

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">

          {technologies.map((technology) => (
            <Badge key={technology}>
              {technology}
            </Badge>
          ))}

        </div>

        {/* Links */}
        <div className="mt-6 flex gap-3">

          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Button size="sm">
              View
            </Button>
          </a>

        </div>

      </div>

    </Card>
  );
}

export default ConventionCard;