import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

import ConventionGrid from "../portfolio/ConventionGrid";

import { conventions } from "../../data/conventions";

function ConventionSection() {
  return (
    <section
      id="conventions"
      className="py-24"
    >

      <Container>

        <SectionHeading
          eyebrow="Convention"
          title="Featured Conventions"
          description="A selection of Convetions I'm attending."
        />

        <div className="mt-12">

          <ConventionGrid
            conventions={conventions}
          />

        </div>

      </Container>

    </section>
  );
}

export default ConventionSection;