import Container from "../ui/Container";
import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="home"
      className="py-24 sm:py-32"
    >

      <Container>

        <div className="max-w-3xl">

          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Lorem Ipsum
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae repellendus eaque sunt, obcaecati, rem corporis porro ipsum a quo illo. Possimus, necessitatibus? Accusamus mollitia ab accusantium quaerat saepe cumque?
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In omnis ducimus deleniti necessitatibus optio, id, tenetur quaerat et commodi ullam rerum corrupti, veritatis nihil illum? Optio quibusdam sequi inventore labore!
            Ratione natus dicta quisquam officiis. Incidunt consequatur corporis cupiditate perferendis beatae cumque, dolorem quibusdam esse odit et distinctio praesentium quae, deserunt consectetur modi impedit? Nisi perspiciatis vero hic quas saepe!
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a href="#projects">
              <Button size="lg">
                View Projects
              </Button>
            </a>

            <a href="#contact">
              <Button
                size="lg"
                variant="secondary"
              >
                Contact Me
              </Button>
            </a>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Hero;