export function AboutSection() {
  return (
    <section className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-medium mb-8 tracking-tight">
              We are a<br />
              Co-Creative
              <br />
              Marketing Studio
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed opacity-80">
              We partner with brands to create meaningful connections through strategic storytelling, innovative
              campaigns, and authentic experiences that resonate with audiences.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              Our collaborative approach ensures every project reflects both our creative vision and your brand's unique
              identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
