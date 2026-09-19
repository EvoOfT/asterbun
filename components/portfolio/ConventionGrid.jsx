import ConventionCard from "./ConventionCard";

function ConventionGrid({ conventions }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {conventions.map((convention) => (
        <ConventionCard
          key={convention.id}
          {...convention}
        />
      ))}

    </div>
  );
}

export default ConventionGrid;