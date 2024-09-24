const Header = () => (
    <header className="bg-white shadow-md py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 animate-fadeIn">Sports Complex</div>
        <nav className="space-x-4">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
  
  export default Header;
  