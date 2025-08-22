"use client"

import Image from "next/image"

export function ThePackSection() {
  const teamMembers = [
    {
      id: 1,
      name: "MATT MANAROTH",
      role: "CO-FOUNDER",
      image: "/team-member-1.png",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 2,
      name: "CYBER SPECIALIST",
      role: "CREATIVE DIRECTOR",
      image: "/team-member-2.png",
      color: "from-purple-500 to-violet-500",
    },
    {
      id: 3,
      name: "MAY-YEN LEE",
      role: "ART DIRECTOR",
      image: "/team-member-3.png",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section className="relative min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="font-serif italic">The</span> — Pack
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">( MEET THE DEMON DOGS )</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-white/20 transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
