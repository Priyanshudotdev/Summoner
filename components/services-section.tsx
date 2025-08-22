export function ServicesSection() {
  const services = [
    "Brand Strategy",
    "Creative Direction",
    "Digital Marketing",
    "Content Creation",
    "Campaign Development",
    "Social Media",
  ]

  return (
    <section className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-medium mb-16 tracking-tight">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-white/20 p-8 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-medium tracking-wide">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
