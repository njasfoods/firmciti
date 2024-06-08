import Link from "next/link";

export default function CTA() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className=" overflow-hidden pt-16  sm:px-16 md:pt-24 lg:flex justify-center lg:gap-x-20 lg:px-24 lg:pt-0">
          
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center text-secondary-dark">
                Boost your productivity.
                <br />
                Start with us today.
              </h2>
            
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/book-consultation"
                  className="rounded-md bg-primary text-white hover:bg-accent-orange px-3.5 py-2.5 text-sm font-semibold  shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </Link>
                <Link href="/services" className="text-sm font-semibold leading-6 text-secondary">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    )
  }
  