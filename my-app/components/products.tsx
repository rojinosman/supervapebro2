"use client"

import { getImagePath } from "@/lib/image-utils"

export function ProductsSection() {
  const categories = [
    {
      title: "Disposables",
      image: "/vapes.jpeg",
      alt: "Disposable vape devices on display",
      description:
        "Convenient single-use devices in a variety of flavors and nicotine strengths. Perfect for beginners or on-the-go vaping.",
    },
    {
      title: "Vape Juice",
      image: "/vapeJuice.jpeg",
      alt: "Bottles of vape juice on display",
      description:
        "Premium e-liquids from trusted brands. Choose from fruity, menthol, tobacco, dessert, and custom blends in multiple nicotine levels.",
    },
    {
      title: "Vape Mods",
      image: "/vapeMods.jpeg",
      alt: "Vape mod devices on display",
      description:
        "Refillable devices and box mods for customizable vaping. Rebuildable coils, adjustable wattage, and long-lasting performance.",
    },
    {
      title: "ATM",
      image: "/atm.jpeg",
      alt: "ATM machine available in-store",
      description:
        "Convenient ATM service available in-store for your cash needs. Located inside our downtown San Diego shop.",
    },
    {
      title: "Cigars",
      image: "/premium-cigar-collection.jpg",
      alt: "Premium cigars and accessories",
      description:
        "Premium cigars and accessories for enthusiasts. Hand-picked selection from top brands, plus cutters, lighters, and humidors.",
    },
    {
      title: "Hookah",
      image: "/hooka.jpg",
      alt: "Hookah available in-store",
      description:
        "Premium hookah products for enthusiasts. Hand-picked selection from top brands, plus cutters, lighters, and humidors.",
    },
    {
      title: "Scratchers",
      image: "/scratchers.jpg",
      alt: "Scratchers available in-store",
      description:
        "Scratch off the top to reveal the prize inside! Buy a scratcher and scratch off the top to reveal the prize inside!",
    },
    {
      title: "Lottery",
      image: "/lottery.jpg",
      alt: "Lottery available in-store",
      description:
        "Lottery tickets! Enter to win cash prizes!",
    },
    {
      title: "Accessories",
      image: "/accessories.jpg",
      alt: "Accessories available in-store",
      description:
        "Accessories for enthusiasts. Hats, sunglasses, and more!",
    },
    {
      title: "Free Arcades & More",
      image: "/arcadeAngle.jpeg",
      alt: "Arcade games available in-store",
      description:
        "Classic arcade games free to play for customers. Relax in our lounge, browse our products, and enjoy a nostalgic gaming break.",
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
                <p className="mt-2 text-sm text-green-900/90 line-clamp-2">{category.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
