import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

function ContactSection() {
  function handleSubmit(event) {
    event.preventDefault();

    // Replace this with your actual
    // form submission logic later.
    console.log("Form submitted");
  }

  return (
    <section
      id="contact"
      className="py-24"
    >

      <Container>

        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project in mind? Get in touch."
        />

        <form
          onSubmit={handleSubmit}
          className="mt-12 max-w-2xl space-y-6"
        >

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              required
              className="w-full resize-y rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <Button type="submit">
            Send Message
          </Button>

        </form>

      </Container>

    </section>
  );
}

export default ContactSection;