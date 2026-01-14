"use client"

import { getImagePath } from "@/lib/image-utils"

export function ProductsSection() {
  const categories = [
    {
      title: "Disposables",
      image: "/vapes.jpeg",
      alt: "Disposable vape devices on display",
    },
    {
      title: "Vape Juice",
      image: "/vapeJuice.jpeg",
      alt: "Bottles of vape juice on display",
    },
    {
      title: "Vape Mods",
      image: "/vapeMods.jpeg",
      alt: "Vape mod devices on display",
    },
    {
      title: "ATM",
      image: "/atm.jpeg",
      description: "Convenient ATM service available in-store",
    },
    {
      title: "Cigars",
      image: "/premium-cigar-collection.jpg",
      description: "Premium cigars and accessories for enthusiasts",
    },
    {
      title: "Free Arcades & More",
      image: "/arcadeAngle.jpeg",
      alt: "Arcade games available in-store",
    },
  ]

  return (
    <section className="py-16 md:py-24" id="products" aria-labelledby="products-heading">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h2 id="products-heading" className="font-serif text-3xl text-green-400 font-bold md:text-4xl">
            Products
          </h2>
          <p className="mt-2 text-muted-foreground">Explore our most popular categories.</p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {categories.map((category, index) => (
            <li key={index} className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
              <img
                src={category.image ? getImagePath(category.image) : "/placeholder.svg"}
                alt={category.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-bold uppercase text-green-800">{category.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
