import { useState } from "react";

const services = [
  {
    icon: "🏗️",
    title: "Building Construction",
    text: "Professional construction of residential, commercial and industrial buildings.",
  },
  {
    icon: "🌉",
    title: "Bridge Construction",
    text: "Reliable bridge design and construction using modern engineering techniques.",
  },
  {
    icon: "🛣️",
    title: "Road Construction",
    text: "Durable roads and highways designed for safety, performance and longevity.",
  },
  {
    icon: "📐",
    title: "Structural Engineering",
    text: "Detailed structural analysis and engineering solutions for complex projects.",
  },
  {
    icon: "💧",
    title: "Water Engineering",
    text: "Water supply, drainage and infrastructure solutions for communities.",
  },
  {
    icon: "🏢",
    title: "Project Management",
    text: "Complete project planning, supervision, cost control and delivery.",
  },
];

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "City Highway Project",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Steel Bridge",
    category: "Bridge",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-2xl font-black text-blue-700">
            Build<span className="text-orange-500">Pro</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>

            <a
              href="#contact"
              className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl md:hidden"
          >
            ☰
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t bg-white px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a onClick={() => setMenuOpen(false)} href="#home">
                Home
              </a>
              <a onClick={() => setMenuOpen(false)} href="#about">
                About
              </a>
              <a onClick={() => setMenuOpen(false)} href="#services">
                Services
              </a>
              <a onClick={() => setMenuOpen(false)} href="#projects">
                Projects
              </a>
              <a onClick={() => setMenuOpen(false)} href="#contact">
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center bg-cover bg-center pt-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70"></div>

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <div className="max-w-3xl text-white">
            <p className="mb-4 font-bold uppercase tracking-[4px] text-orange-400">
              Civil Engineering Excellence
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Building the Future
              <span className="block text-orange-400">
                One Project at a Time.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              We deliver innovative civil engineering and construction solutions
              designed for safety, quality, sustainability and long-term
              performance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-orange-500 px-7 py-4 font-bold text-white hover:bg-orange-600"
              >
                Explore Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white px-7 py-4 font-bold text-white hover:bg-white hover:text-slate-900"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-blue-700 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          <Stat number="15+" text="Years Experience" />
          <Stat number="250+" text="Projects Completed" />
          <Stat number="120+" text="Professional Staff" />
          <Stat number="30+" text="Awards Won" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
              alt="Construction workers"
              className="h-[500px] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>

          <div>
            <p className="font-bold uppercase tracking-widest text-orange-500">
              About Our Company
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Engineering Solutions You Can Trust
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              BuildPro Engineering is a civil engineering and construction
              company focused on delivering high-quality infrastructure and
              construction projects.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From structural design to construction and project management, our
              experienced team combines engineering expertise with modern
              technology to deliver outstanding results.
            </p>

            <div className="mt-8 space-y-4">
              <Feature text="Experienced engineering professionals" />
              <Feature text="High-quality construction materials" />
              <Feature text="Safety-focused project execution" />
              <Feature text="On-time and cost-effective delivery" />
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-lg bg-blue-700 px-7 py-4 font-bold text-white hover:bg-blue-800"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Our Engineering Services
            </h2>

            <p className="mt-4 text-slate-600">
              Professional engineering services for projects of every size and
              complexity.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-5xl">{service.icon}</div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>

                <a
                  href="#contact"
                  className="mt-5 inline-block font-bold text-blue-700"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-widest text-orange-500">
                Our Portfolio
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-900">
                Featured Projects
              </h2>
            </div>

            <a href="#contact" className="font-bold text-blue-700">
              View All Projects →
            </a>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <p className="font-semibold text-orange-500">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">{project.title}</h3>

                  <a
                    href="#contact"
                    className="mt-4 inline-block font-bold text-blue-700"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-black text-white md:text-4xl">
              Have a construction project?
            </h2>

            <p className="mt-3 text-slate-300">
              Let's discuss your next engineering project.
            </p>
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-orange-500 px-8 py-4 font-bold text-white hover:bg-orange-600"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-100 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-orange-500">
              Get In Touch
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Let's Build Something Great
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Contact our team to discuss your construction, structural
              engineering or infrastructure project.
            </p>

            <div className="mt-8 space-y-6">
              <ContactInfo icon="📍" title="Office" text="Lagos, Nigeria" />

              <ContactInfo icon="📞" title="Phone" text="+234 800 000 0000" />

              <ContactInfo icon="✉️" title="Email" text="info@buildpro.com" />
            </div>
          </div>

          <form className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="grid gap-5 md:grid-cols-2">
              <Input label="Your Name" placeholder="John Doe" />
              <Input label="Email Address" placeholder="john@example.com" />
            </div>

            <div className="mt-5">
              <Input label="Subject" placeholder="Project enquiry" />
            </div>

            <div className="mt-5">
              <label className="mb-2 block font-semibold">Message</label>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-blue-700 py-4 font-bold text-white hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-black">
              Build<span className="text-orange-500">Pro</span>
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Professional civil engineering and construction solutions built
              for the future.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Company</h4>
            <div className="mt-4 space-y-3 text-slate-400">
              <a className="block hover:text-white" href="#about">
                About Us
              </a>
              <a className="block hover:text-white" href="#services">
                Services
              </a>
              <a className="block hover:text-white" href="#projects">
                Projects
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Services</h4>
            <div className="mt-4 space-y-3 text-slate-400">
              <p>Building Construction</p>
              <p>Road Construction</p>
              <p>Structural Engineering</p>
              <p>Project Management</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Follow Us</h4>
            <div className="mt-4 flex gap-3">
              <Social text="f" />
              <Social text="in" />
              <Social text="X" />
              <Social text="ig" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 BuildPro Engineering. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Stat({ number, text }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-black">{number}</div>
      <p className="mt-2 text-blue-100">{text}</p>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-sm text-white">
        ✓
      </span>
      <span>{text}</span>
    </div>
  );
}

function ContactInfo({ icon, title, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-xl">
        {icon}
      </div>

      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block font-semibold">{label}</label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
      />
    </div>
  );
}

function Social({ text }) {
  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 font-bold hover:bg-orange-500"
    >
      {text}
    </a>
  );
}

export default App;
