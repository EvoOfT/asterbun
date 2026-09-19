import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function AboutSection() {
  return (
    <section
      id="about"
      className="py-24"
    >

      <Container>

        <SectionHeading
          eyebrow="About"
          title="A little about me"
          description="Lorem lorem"
        />

        <div className="mt-8 max-w-3xl space-y-4 text-slate-400">

          <p>
            Asterbun asterbun text text
          </p>

          <p>
            I am not writing this I can't spell
          </p>

        </div>

      </Container>

    </section>
  );
}

export default AboutSection;