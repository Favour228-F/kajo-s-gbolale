import { useState } from "react";

const services = [
  {
    icon: "🏗️",
    title: "Building Construction",
    description:
      "We deliver durable residential, commercial, and industrial construction projects.",
  },
  {
    icon: "🛣️",
    title: "Road Construction",
    description:
      "Professional road development, rehabilitation, drainage, and infrastructure works.",
  },
  {
    icon: "🌉",
    title: "Bridge Engineering",
    description:
      "Safe and reliable bridge design and construction using modern engineering standards.",
  },
  {
    icon: "💧",
    title: "Water & Drainage",
    description:
      "Efficient drainage, water supply, flood control, and other water infrastructure.",
  },
  {
    icon: "📐",
    title: "Structural Engineering",
    description:
      "Structural analysis and engineering solutions focused on safety and durability.",
  },
  {
    icon: "👷",
    title: "Project Management",
    description:
      "Complete project planning, supervision, budgeting, and quality management.",
  },
];

const projects = [
  {
    title: "Modern Highway Development",
    category: "Road Construction",
    image: "/images/daddy's 1.jpeg",
  },
  {
    title: "Commercial Office Complex",
    category: "Building Construction",g
    image: "/images/daddy 52.jpeg",
  },
  {
    title: "Steel Bridge Project",
    category: "Bridge Engineering",
    image: "/images/daddy 47.jpeg",
  },
  {
    title: "Urban Infrastructure",
    category: "Infrastructure",
    image: "/images/daddy 57.jpeg",
  },
  {
    title: "Residential Estate",
    category: "Construction",
    image: "/images/dfaddy 36.jpeg",
  },
  {
    title: "Water Infrastructure",
    category: "Water Engineering",
    image: "/images/daddy 31.jpeg",
  },
];

const testimonials = [
  {
    name: "David Johnson",
    role: "Property Developer",
    text: "Their team delivered our commercial building ahead of schedule while maintaining excellent quality.",
  },
  {
    name: "Sarah Williams",
    role: "Project Director",
    text: "Professional, reliable, and technically strong. We were impressed with their project management.",
  },
  {
    name: "Michael Brown",
    role: "Business Owner",
    text: "From planning to completion, the entire construction process was handled professionally.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500 text-xl font-black text-white">
              CE
            </div>

            <div>
              <h1 className="text-lg font-bold text-white">
                KAJO'S GBOLALEYE NIG.LTD
              </h1>
              <p className="text-[10px] tracking-[3px] text-gray-400">
                ENGINEERING
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-200 transition hover:text-orange-500"
                >
                  {item}
                </a>
              ),
            )}

            <a
              href="#contact"
              className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="border-t border-gray-800 bg-slate-950 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="font-medium text-white hover:text-orange-500"
                  >
                    {item}
                  </a>
                ),
              )}

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg bg-orange-500 px-5 py-3 text-center font-bold text-white"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 h-[100vh]"
          style={{
            backgroundImage: "/images/hhh4.jpeg",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24">
          <div className="max-w-3xl">
            <span className="mb-5 inline-block rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
              ENGINEERING • CONSTRUCTION • INFRASTRUCTURE
            </span>

            <h2 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Building Today.
              <br />
              <span className="text-orange-500">Engineering Tomorrow.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              We provide innovative civil engineering and construction solutions
              that create safer, stronger, and more sustainable communities.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-lg bg-orange-500 px-7 py-4 text-center font-bold text-white transition hover:bg-orange-600"
              >
                Explore Our Projects →
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-orange-500">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-10 md:grid-cols-4">
          {[
            ["15+", "Years Experience"],
            ["250+", "Projects Completed"],
            ["120+", "Professional Staff"],
            ["98%", "Client Satisfaction"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="border-white/20 px-4 py-4 text-center first:border-0 md:border-l"
            >
              <h3 className="text-4xl font-black text-white">{number}</h3>
              <p className="mt-1 text-sm font-medium text-orange-100">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/daddy 81.jpeg"
              alt="Construction workers"
              className="h-[500px] w-full rounded-2xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-5 rounded-xl bg-slate-950 p-6 text-white shadow-xl">
              <p className="text-4xl font-black text-orange-500">15+</p>
              <p className="text-sm text-gray-300">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-widest text-orange-500">
              About Our Company
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
              Engineering excellence from concept to completion.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Kajo's GBOLALEYE Engineering is a civil engineering and
              construction company focused on delivering high-quality
              infrastructure and construction solutions.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our multidisciplinary team combines technical expertise,
              innovative construction methods, and rigorous project management
              to deliver projects safely, efficiently, and on schedule.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Experienced Engineers",
                "Quality Materials",
                "Safety First",
                "On-Time Delivery",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    ✓
                  </span>
                  <span className="font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-lg bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-orange-500"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
              Our Engineering Services
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Complete engineering and construction solutions tailored to your
              project requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100 text-3xl transition group-hover:bg-orange-500">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-block font-bold text-orange-500"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-orange-500">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              We don't just build structures.
              <span className="text-orange-500"> We build trust.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Every project is approached with attention to detail, technical
              expertise, safety, and long-term performance.
            </p>

            <div className="mt-10 space-y-6">
              {[
                [
                  "01",
                  "Quality Engineering",
                  "Our engineers use proven techniques and modern technology.",
                ],
                [
                  "02",
                  "Safety & Compliance",
                  "Safety is integrated into every stage of our projects.",
                ],
                [
                  "03",
                  "Transparent Management",
                  "Clear communication and project reporting from start to finish.",
                ],
              ].map(([number, title, text]) => (
                <div key={number} className="flex gap-5">
                  <span className="text-2xl font-black text-orange-500">
                    {number}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-1 text-gray-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="/images/daddy59.jpeg"
              alt="Engineer working on construction project"
              className="h-[550px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-widest text-orange-500">
                Our Portfolio
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
                Featured Projects
              </h2>
            </div>

            <a
              href="#contact"
              className="font-bold text-orange-500 hover:text-orange-600"
            >
              Discuss Your Project →
            </a>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl bg-slate-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-950">
                    {project.title}
                  </h3>

                  <a
                    href="#contact"
                    className="mt-4 inline-block font-bold text-orange-500"
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
      <section className="bg-orange-500 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-4xl font-black text-white">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-orange-100">
              Let's turn your engineering vision into reality.
            </p>
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-slate-950 px-8 py-4 font-bold text-white transition hover:bg-slate-800"
          >
            Request a Consultation
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              Client Reviews
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950">
              What Our Clients Say
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="text-2xl text-orange-500">★★★★★</div>

                <p className="mt-5 leading-7 text-gray-600">
                  "{testimonial.text}"
                </p>

                <div className="mt-6 border-t pt-5">
                  <h3 className="font-bold text-slate-950">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-orange-500">
              Contact Us
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
              Let's build something great together.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Tell us about your project and our engineering team will get back
              to you to discuss your requirements.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-bold">Office</h3>
                  <p className="text-gray-600">
                    43, Unreni Yusuf Road,Alagbad,lagos State.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2x1">📞</div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600">08133731229.08023788843</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2x1">🟨</div>
                <div className="font-bold">Email</div>
                <p className="text-gray-600">Kajosgbolaleyenigltd@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you!your message has been submitted.");
          }}
          className="rounded-2x1 bg-slate-950 p-8 shadow-xl md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="favour"
                className="w-full rounded-1g border border-gray-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="ayomidefavour228@gmail.com"
                className="w-full rounded-1g border border-gray-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-500"
              />
            </div>
          </div>

          <div className="mt-5"></div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+234....."
            className="w-full rounded-1g border border-gray-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-500"
          />

          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-white">
              Service Required
            </label>

            <select className="w-full rounded-1g border border-gray-700 bg-slate-900 px-4 py-3 text-gray-300 outline-none focus:border-orange-500">
              <option>Building Construction</option>
              <option>Road contruction</option>
              <option>Bridge Engineering</option>
              <option>Structural Engineering</option>
              <option>Water & Drinage</option>
              <option>Project Management</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-white">
              Project details
            </label>

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full resize-none rounded-1g border border-gray-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-1g bg-oranded-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            send project Request
          </button>
        </form>
      </section>

      {/*footer*/}
      <footer className="bg-scale-950 text-white">
        <div className="mx-auto grid max-w-7x1 gap-10 px-6 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-1g bg-orange-500 text-xl font-black text-white ">
                CE
              </div>
              <div>
                <h1 className="text-lg font-bold text-orange-500">
                  KAJO'S GBOLALEYE NIG.LTD
                </h1>
                <p className="text-[10px] tracking-[3px] text-gray-400">
                  ENGINEERING
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md lending-7 text-gray-400">
              Delivering reliable civil engineering, construction,and
              infrastructure solutions for a stroner future
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick links</h3>

            <div className="mt-5 space-y-3 text-gray-400">
              <a href="#home" className="block hover:text-orange-500">
                Home
              </a>
              <a href="#home" className="block hover:text-orange-500">
                About
              </a>
              <a href="#home" className="block hover:text-orange-500">
                services
              </a>
              <a href="#home" className="block hover:text-orange-500">
                projects
              </a>
              <a href="#home" className="block hover:text-orange-500">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">services</h3>

            <div className="mt-5 space-y-3 text-gray-400">
              <option>Building Construction</option>
              <p>Road contruction</p>
              <p>Bridge Engineering</p>
              <p>Structural Engineering</p>
              <p>Water & Drinage</p>
              <p>Project Management</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="mx-auto flex max-w-7x1 flex-col justify-between gap-3 px-6 text-sm text-gray-500 md:flex-row">
            <p>2026 Buildpro Engineering. All rights reserved.</p>
            <p>Build with </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
