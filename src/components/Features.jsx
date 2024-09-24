const Features = () => (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 animate-slideIn">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard title="High-Performance Equipment" description="Top sports gear used by famous athletes." delay="0.2s" />
          <FeatureCard title="Expert Training Programs" description=" Offer access to training guides or video tutorials." delay="0.4s" />
          <FeatureCard title="Exclusive Discounts" description="Sspecial deals and discounts on popular products." delay="0.6s" />
        </div>
      </div>
    </section>
  );
  
  const FeatureCard = ({ title, description, delay }) => (
    <div className={`bg-white p-6 shadow-lg rounded-lg animate-fadeIn delay-${delay}`}>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
  
  export default Features;
  