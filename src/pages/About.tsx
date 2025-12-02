import React from 'react';
import AboutSection from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { Download } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue-900 pt-32 pb-20 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Sysdak Inc</h1>
            <p className="text-xl text-blue-100">
              Get to know our company, our mission, and the team behind our innovative IT solutions.
            </p>
          </div>
        </Container>
      </div>
      
      <AboutSection />
      
      <section className="py-20 bg-blue-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Approach</h2>
            <p className="text-gray-600 mb-8">
              At Sysdak Inc, we believe that successful technology implementation requires more than just technical 
              expertise. It demands a deep understanding of your business objectives, challenges, and workflows.
            </p>
            <p className="text-gray-600 mb-8">
              We take a consultative approach, working closely with your team to identify the most effective solutions 
              for your unique needs. Our goal is not just to implement technology, but to create meaningful improvements 
              in your business operations.
            </p>
            <Button 
              variant="outline" 
              icon={<Download size={18} />}
              iconPosition="left"
            >
              Download Company Profile
            </Button>
          </div>
        </Container>
      </section>
      
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our History</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">2015: The Beginning</h3>
                  <p className="text-gray-600">Sysdak Inc was founded by a team of technology enthusiasts with a vision to help businesses leverage the power of IT.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">2017: Expansion</h3>
                  <p className="text-gray-600">We expanded our services to include cloud solutions and cybersecurity as demand grew for these critical services.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">2019: Growth & Recognition</h3>
                  <p className="text-gray-600">Sysdak was recognized as a top IT service provider and doubled our team size to accommodate growing client needs.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">2021: Global Reach</h3>
                  <p className="text-gray-600">We began serving international clients and established partnerships with major technology providers.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">Today</h3>
                  <p className="text-gray-600">Sysdak continues to innovate and adapt to the evolving technology landscape, helping our clients stay ahead of the curve.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-700 rounded-tl-3xl rounded-br-3xl -rotate-3 opacity-10"></div>
              <div className="absolute -inset-4 bg-blue-500 rounded-tr-3xl rounded-bl-3xl rotate-3 opacity-10"></div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Company growth"
                className="relative rounded-lg shadow-xl w-full h-auto object-cover z-10"
              />
            </div>
          </div>
        </Container>
      </section>
      
      <Contact />
    </>
  );
};

export default AboutPage;