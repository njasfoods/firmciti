import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    slug:'web',
    description: "We build scalable, responsive, and user-friendly websites tailored to meet your business needs. Our web development services ensure a robust online presence that drives growth.",
    bulletPoints: [
      "Custom website design and development",
      "Mobile-responsive layouts",
      "E-commerce solutions",
      "Content management systems (CMS)",
    ],
    image: "/webdev.jpg",
    reverse: false, // Change to true if you want to reverse the flex direction
  },
  {
    title: "Business Process Automation",
    slug:'automation',
    description: "Streamline your business operations with our automation solutions. We create efficient workflows that save time and reduce errors, allowing you to focus on core business activities.",
    bulletPoints: [
      "Workflow automation",
      "Task management systems",
      "Automated reporting",
      "Integration with existing systems",
    ],
    image: "/automation.jpg",
    reverse: true,
  },
  {
    title: "Software Integration",
    slug:'integration',
    description: "Seamlessly integrate your software systems for enhanced functionality and productivity. Our integration services ensure smooth communication between different applications, optimizing your business processes.",
    bulletPoints: [
      "API integration",
      "Data synchronization",
      "Cross-platform compatibility",
      "Scalable solutions",
    ],
    image: "/integration.jpg",
    reverse: false,
  },
];

export default function HowWeWork() {
  return (
    <section className="py-16 bg-background w-full px-16">
      <h1 className="text-3xl lg:text-5xl font-bold text-center text-secondary-dark">Service Offer</h1>
      <div className="mt-12 w-full">
        {services.map((service, index) => (
          <div key={index} className={`flex flex-col md:flex-row ${service.reverse && 'md:flex-row-reverse md:justify-stretch'} gap-12 py-8 mt-4`}>
            <div className="mb-16 w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-secondary">{service.title}</h2>
              <p className="text-secondary">{service.description}</p>
              <ul className="list-disc ml-4 mt-4 text-secondary">
                {service.bulletPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <div>
                <Link href={{pathname:'/book-consultation', query:{name:service.slug}}} className="px-6 inline-block py-2 rounded-md mt-8 bg-primary text-white hover:bg-accent-orange" type="button">Book Consultation</Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 relative h-80">
              <Image src={service.image} priority alt={service.title} fill className="object-cover rounded-2xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
