import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Super Vape Bros | Downtown San Diego Vape Shop",
  description:
    "Learn about Super Vape Bros, a downtown San Diego vape shop offering quality products, a comfortable lounge, and free arcades since serving the community.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-16 min-h-screen">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl mb-8">
            About Super Vape Bros
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Super Vape Bros is a locally owned vape shop and lounge located in the heart of downtown San Diego at 530
              3rd Ave. We opened our doors with a simple mission: to provide quality vaping products, exceptional
              customer service, and a welcoming environment where customers can browse, relax, and enjoy their visit.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">Our Product Selection</h2>
            <p>
              We carry a comprehensive range of vaping products to suit every preference and experience level. Our
              inventory includes popular disposable vapes for convenience, premium vape juice in a wide variety of
              flavors and nicotine strengths, and advanced vape mods for enthusiasts who want customizable performance.
              We also stock a curated selection of premium cigars and accessories, along with essential items like
              lighters, cutters, and humidors.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">The Lounge Experience</h2>
            <p>
              What sets Super Vape Bros apart is our commitment to creating a comfortable retail experience. Our lounge
              provides a relaxed atmosphere where you can take your time exploring our products, try new flavors, or
              simply unwind. We believe shopping for vape products should feel inviting, not rushed—and our staff is
              always on hand to answer questions and offer recommendations without pressure.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">Free Arcades</h2>
            <p>
              As an extra treat for our customers, we offer free arcade games in-store. Whether you&apos;re waiting for a
              recommendation, taking a break, or visiting with friends, our arcade section adds a fun, nostalgic touch
              to your trip. It&apos;s our way of saying thank you and making your visit memorable.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">Service & Convenience</h2>
            <p>
              We understand that convenience matters. In addition to our product selection and lounge, we offer an
              in-store ATM for cash transactions and flexible hours to accommodate downtown visitors. Our team is
              knowledgeable about the products we sell and committed to helping you find the right fit—whether you&apos;re
              new to vaping or looking to upgrade your setup.
            </p>

            <p className="mt-10">
              Visit us at 530 3rd Ave, San Diego, CA 92101. We&apos;re open Sunday through Thursday from 10am to 8pm, and
              Friday through Saturday from 10am to 10pm. We look forward to seeing you.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
