"use client"

export function ProductsSection() {
  const categories = [
    {
      title: "Disposables",
      image: "/vapes.png",
    },
    {
      title: "Vape Juice",
      image: "/vapeJuice.png",
    },
    {
      title: "Vape Mods",
      image: "/vapeMods.jpg",
    },
    {
      title: "Free Arcades & More",
      image: "/arcadeAngle.png",
    },
  ]

  return (
    <section className="py-16 md:py-24" id="products" aria-labelledby="products-heading">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h2 id="products-heading" className="font-serif text-3xl font-bold md:text-4xl">
            Products
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore our most popular categories.
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {categories.map((category, index) => (
            <li key={index} className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-bold uppercase text-secondary-foreground">
                  {category.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
