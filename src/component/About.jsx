import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const About = () => {
    return (
      <div>
        <section className="py-12">
          <div className="container mx-auto px-6 text-gray-800">
            <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
  
            <p className="text-lg text-center max-w-3xl mx-auto mb-6">
              At <span className="font-bold text-[#273248]">SportAxis</span>,
              we are committed to providing high-quality sports equipment to help
              athletes and fitness enthusiasts reach their full potential. From
              beginners to professionals, our store caters to all, ensuring you
              have the right gear to excel in your sport.
            </p>
  
            <div 
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="true"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
  
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">Premium Equipment</h3>
                <p>
                  Discover a wide range of top-quality sports gear designed to
                  enhance your performance and durability.
                </p>
              </div>
  
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">Expert Recommendations</h3>
                <p>
                  Benefit from our team expertise to choose the perfect gear for
                  your specific needs and goals.
                </p>
              </div>
  
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
                <p>
                  Explore a diverse range of products for various sports, ensuring
                  you always find what you need at SportAxis.
                </p>
              </div>
  
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;
  