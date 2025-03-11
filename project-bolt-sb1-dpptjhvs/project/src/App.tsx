import React, { useState, useEffect } from 'react';
import { Leaf, Phone, Mail, MapPin, Clock, Shield, Users, Award, CheckCircle2, Scale, Banknote, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const slides = [
    {
      url: "https://i.pinimg.com/474x/87/ea/dd/87eadd2698ebefa3b8e13d8851ebc725.jpg",
      title: "Premium Tea Leaf Agency",
      subtitle: "Serving tea farmers for over 20 years with trust, reliability, and excellence.",
      description: "Learn more about our commitment to quality and sustainable farming practices. We work directly with farmers to ensure the best tea leaves reach the market.",
    },
    {
      url: "https://i.pinimg.com/474x/43/99/31/439931f0bb208b778ad8ec18af19ff76.jpg",
      title: "Quality Tea Production",
      subtitle: "From garden to cup - ensuring premium quality at every step.",
      description: "We maintain strict quality control throughout the entire process, from picking to processing, ensuring only the finest tea leaves make it to market.",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setShowDescription(false);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowDescription(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setShowDescription(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setShowDescription(false);
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-emerald-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-semibold">Siva Sathi Tea</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-emerald-200 transition">Home</a>
              <a href="#about" className="hover:text-emerald-200 transition">About</a>
              <a href="#services" className="hover:text-emerald-200 transition">Services</a>
              <a href="#contact" className="hover:text-emerald-200 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <div id="home" className="relative h-[600px]">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={slide.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              {showDescription && index === currentSlide && (
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-8">
                  <div className="text-white max-w-2xl">
                    <p className="text-xl mb-4">{slide.description}</p>
                    <button 
                      onClick={toggleDescription}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button 
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slide Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">{slides[currentSlide].title}</h1>
            <p className="text-xl mb-8">{slides[currentSlide].subtitle}</p>
            <button 
              onClick={toggleDescription}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
              <h3 className="text-xl font-semibold mb-2">Trusted Agency</h3>
              <p className="text-gray-600">20+ years of excellence in serving tea farmers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
              <h3 className="text-xl font-semibold mb-2">100+ Happy Customers</h3>
              <p className="text-gray-600">Strong relationships with farmers and factories</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Best prices for your premium tea leaves</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://i.pinimg.com/474x/b2/88/68/b28868d2d96b3b72b4697b208461c1fb.jpg" 
                alt="Tea processing" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Our Agency</h2>
              <p className="text-gray-600 mb-4">
                For two decades, Siva Sathi Tea Leaf Agency has been a cornerstone of the tea farming community. 
                We've built lasting relationships with over 100 farmers and multiple processing facilities, 
                ensuring fair prices and timely payments for our valued partners.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence and transparency has made us the most trusted tea leaf agency in the region.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services & Working Rules</h2>
          
          {/* Labor Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Labor Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Clock className="h-8 w-8 text-emerald-600 mb-4" />
                <h4 className="text-xl font-semibold mb-3">Working Hours</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Regular shift: 9:00 AM - 5:00 PM</li>
                  <li>• Lunch break: 1:00 PM - 2:00 PM</li>
                  <li>• Flexible hours during peak seasons</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Scale className="h-8 w-8 text-emerald-600 mb-4" />
                <h4 className="text-xl font-semibold mb-3">Fair Practices</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Equal opportunities for all workers</li>
                  <li>• Safe working conditions</li>
                  <li>• Regular health check-ups</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Banknote className="h-8 w-8 text-emerald-600 mb-4" />
                <h4 className="text-xl font-semibold mb-3">Payment Terms</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Weekly payments every Monday</li>
                  <li>• Performance-based incentives</li>
                  <li>• Festival bonuses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Working Rules */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Working Rules & Guidelines</h3>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-2" />
                    General Rules
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">1.</span>
                      <span>All workers must wear appropriate safety gear provided by the agency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">2.</span>
                      <span>Maintain cleanliness and hygiene in the work area</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">3.</span>
                      <span>Report any issues or concerns to the supervisor immediately</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">4.</span>
                      <span>Follow proper tea leaf picking techniques as trained</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-2" />
                    Quality Standards
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">1.</span>
                      <span>Pick only two leaves and a bud for premium quality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">2.</span>
                      <span>Handle leaves with care to prevent damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">3.</span>
                      <span>Use proper collection bags provided by the agency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">4.</span>
                      <span>Regular quality checks will be conducted</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 944-360-4332</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>anithasiva2005@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>Beragal Village, Thuneari Post, Nilgiris</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-6 w-6" />
            <span className="text-xl font-semibold">Siva Sathi Tea</span>
          </div>
          <p className="text-emerald-200">Government Approved Agency</p>
          <p className="text-sm mt-4">© 2024 Siva Sathi Tea Leaf Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
