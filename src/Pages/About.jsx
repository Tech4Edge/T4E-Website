import Team from "../components/Team";
import CTA from "../components/CTA";

const keyGoals = [
  "Custom website development tailored to business needs",
  "Strategic branding to build a strong identity",
  "Digital growth solutions focused on measurable results",
  "Modern, user-friendly, and responsive designs",
  "Client-focused collaboration for long-term success",
];

const whyChooseUs = [
  "From planning to final delivery, we keep every stage clear, smooth, and worth your investment.",
  "Strong and skilled team that applies modern technologies in smart and practical ways.",
  "Industry experience that helps us solve real-world business problems.",
  "Full transparency through regular meetings and clear documentation.",
  "Fast and efficient delivery without unnecessary delays.",
  "Reliable quality focused on secure, stable, and long-lasting solutions.",
];

const futurePoints = [
  "Technology alone does not create growth; strategy and execution do.",
  "We turn business ideas into practical, scalable digital systems.",
  "Every system we build is designed to perform today and scale tomorrow.",
  "We build for relevance, adaptability, and long-term impact.",
];

const services = [
  {
    title: "Software & App Development",
    description:
      "We build custom software and apps tailored to your business needs.",
  },
  {
    title: "Website Development",
    description:
      "We build fast, modern websites that look strong and work smoothly for users.",
  },
  {
    title: "SaaS Products",
    description:
      "We build reliable, user-friendly SaaS products designed for speed, quality, and growth.",
  },
  {
    title: "Digital Marketing",
    description:
      "We help you grow online by reaching the right audience with the right strategy.",
  },
  {
    title: "Designing",
    description:
      "We create clean website and graphic designs that make your brand stand out.",
  },
];

const coreValues = [
  {
    title: "Innovation",
    description:
      "We use modern technologies to build efficient and scalable solutions, and we constantly improve to deliver smarter products.",
  },
  {
    title: "Client Focus",
    description:
      "We work closely with clients to understand their goals and prioritize solutions that create real business value.",
  },
  {
    title: "Quality & Reliability",
    description:
      "We focus on stable, secure, high-performance applications with strong attention to detail and long-term usability.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-[#f4f4f6] overflow-x-hidden cabin-400">
      <section className="bg-gradient-to-r from-(--color-dark) to-[#1a2d57] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <h1 className="mt-1 text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-(--color-primary)">Tech4Edges</span> Profile
          </h1>
          <p className="mt-5 max-w-3xl text-base md:text-lg text-white/85">
            Reflecting on success and paving the path forward through practical digital
            solutions.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-8">
        <article className="bg-white border border-blue-100 rounded-3xl shadow-sm p-6 md:p-9">
          <p className="uppercase tracking-wide text-sm text-(--color-primary) font-semibold">
            About Our Company
          </p>
          <div className="mt-4 grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-(--color-dark)">About T4E</h2>
              <p className="mt-4 text-(--color-gray-600)">
                Tech4Edges is a software development company helping startups and businesses
                build scalable, high-performance digital products. We turn ideas into real,
                market-ready solutions.
              </p>
              <p className="mt-4 font-semibold text-(--color-dark)">Our goal is simple:</p>
              <p className="text-(--color-gray-600)">
                Help businesses grow using the right mix of design, technology, and strategy.
              </p>
            </div>
            <div className="bg-[#f2f8ff] rounded-2xl p-5 border border-blue-100">
              <h3 className="text-xl font-semibold text-(--color-dark)">What we do</h3>
              <ul className="mt-4 space-y-2 text-(--color-gray-600)">
                <li>• Web Application Development</li>
                <li>• SaaS Product Development</li>
                <li>• Mobile App Development</li>
                <li>• UI/UX Design</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-(--color-dark)">Our Services</h2>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-blue-100 p-4 bg-[#f7fbff]"
                >
                  <h3 className="text-xl font-semibold text-(--color-primary)">{service.title}</h3>
                  <p className="mt-2 text-(--color-gray-600) text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-(--color-dark)">What Makes Us Different</h2>
            <ul className="mt-5 space-y-3">
              {keyGoals.map((goal) => (
                <li key={goal} className="flex gap-3 text-(--color-gray-600)">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-(--color-primary) shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="rounded-3xl overflow-hidden shadow-sm border border-blue-100 bg-gradient-to-r from-(--color-primary) to-[#69adff] text-white">
          <div className="px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Built for long-term growth</h2>
            <p className="text-white/95 text-lg">
              We combine product thinking, engineering quality, and execution speed.
            </p>
          </div>
        </article>

        <article className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-(--color-dark)">Why Choose Us?</h2>
            <ul className="mt-5 space-y-3 text-(--color-gray-600)">
              {whyChooseUs.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--color-primary) shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-(--color-dark)">Building For The Future</h2>
            <ul className="mt-5 space-y-3 text-(--color-gray-600)">
              {futurePoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--color-primary) shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-[#f2f8ff] border border-blue-100 p-5">
              <h3 className="text-2xl font-bold text-(--color-dark)">Why Work With Tech4Edge?</h3>
              <ul className="mt-3 text-(--color-gray-600) space-y-2">
                <li>• Connected, scalable systems that support your business at every stage.</li>
                <li>• Practical solutions without unnecessary complexity.</li>
                <li>• Day-one scalability mindset for long-term growth.</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-(--color-dark)">Vision & Mission</h2>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-(--color-primary) text-white p-5">
                <h3 className="text-2xl font-semibold">Mission Statement</h3>
                <p className="mt-2 text-white/95">
                  To build scalable, high-quality digital products for startups and businesses.
                  We focus on speed, reliability, and delivering real value.
                </p>
              </div>
              <div className="rounded-2xl bg-(--color-primary) text-white p-5">
                <h3 className="text-2xl font-semibold">Vision Statement</h3>
                <p className="mt-2 text-white/95">
                  To become a trusted global technology partner for startups. We aim to help turn
                  ideas into successful digital products.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-(--color-dark)">Performance Snapshot</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-blue-100 bg-[#f7fbff] p-5 text-center">
                <p className="text-4xl font-bold text-(--color-primary)">100%</p>
                <p className="mt-2 text-(--color-dark) font-semibold">Client Satisfaction</p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-[#f7fbff] p-5 text-center">
                <p className="text-4xl font-bold text-(--color-primary)">90%</p>
                <p className="mt-2 text-(--color-dark) font-semibold">Technologies Used</p>
              </div>
            </div>
            <p className="mt-5 text-(--color-gray-600)">
              We maintain a <span className="font-semibold text-(--color-dark)">95%</span> client
              satisfaction benchmark through transparent communication and delivery quality.
            </p>
          </div>
        </article>

        <article className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-(--color-dark)">Important Value</h2>
          <div className="mt-5 grid md:grid-cols-3 gap-4">
            {coreValues.map((value) => (
              <div key={value.title} className="rounded-2xl border border-gray-200 p-5">
                <h3 className="text-2xl font-semibold text-(--color-dark)">{value.title}</h3>
                <p className="mt-2 text-(--color-gray-600)">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-[#f2f8ff] border border-blue-100 p-5">
            <h3 className="text-3xl font-bold text-(--color-dark)">Conclusion</h3>
            <p className="mt-3 text-(--color-gray-600) max-w-4xl">
              At Tech4Edges, we are committed to delivering high-quality digital solutions
              tailored to your needs. Our focus is on building scalable, reliable, and
              user-friendly products. We work closely with clients to turn ideas into real,
              impactful results.
            </p>
          </div>
        </article>
      </section>

      <Team />
      <CTA />
    </main>
  );
};

export default About;
