export function OrganizationStorySection() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground font-[family-name:var(--font-dm-sans)] leading-relaxed">
              <p>
                Imbago Care Kid was founded in 2018 when Dr. Maria Santos, a pediatric researcher, witnessed firsthand
                the healthcare disparities affecting children in rural communities during her medical mission work. She
                realized that while medical interventions were crucial, sustainable change required a comprehensive
                approach combining research, community engagement, and global collaboration.
              </p>
              <p>
                What started as a small initiative to provide basic healthcare services has grown into a global
                organization dedicated to advancing innovative research and improving quality of life for children in
                underserved populations. Our work spans across three continents, focusing on preventive care, health
                education, and community empowerment.
              </p>
              <p>
                Today, we continue to be driven by the belief that every child deserves access to quality healthcare.
                Through our research initiatives, community partnerships, and advocacy efforts, we're working to create
                a world where a child's zip code doesn't determine their health outcomes.
              </p>
            </div>
          </div>

          {/* Story Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-background">
              <img
                src="/community-clinic-group.png"
                alt="Healthcare workers with children in community clinic"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Timeline highlight */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">2018</div>
                <div className="text-sm font-[family-name:var(--font-dm-sans)]">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
