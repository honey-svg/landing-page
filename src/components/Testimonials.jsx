const Testimonials = () => (
    <section id="testimonials" className="bg-gray-200 py-20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-12 animate-slideIn">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard 
            text="The gear I bought transformed my game. Highly recommend!" 
            author="Aditi" 
            delay="0.2s"
          />
          <TestimonialCard 
            text="Amazing training programs that helped me improve my skills." 
            author="Rohan Sharma" 
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
  
  const TestimonialCard = ({ text, author, delay }) => (
    <div className={`bg-white p-6 shadow-lg rounded-lg animate-fadeIn delay-${delay}`}>
      <p className="italic mb-4">"{text}"</p>
      <h4 className="font-bold">{author}</h4>
    </div>
  );
  
  export default Testimonials;
  