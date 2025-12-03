import React from 'react';
import Contact from '../components/sections/Contact';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import { Mail, MapPin, MessagesSquare } from 'lucide-react';

const FAQ: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  return (
    <div className="border-b border-gray-200 pb-5 mb-5 last:border-0 last:mb-0 last:pb-0">
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with businesses of all sizes across various industries, from startups to large enterprises. Our solutions are tailored to meet the specific needs of each client."
    },
    {
      question: "How quickly can you respond to IT emergencies?",
      answer: "Our support team is available 24/7 for critical emergencies. For clients with support contracts, we guarantee response times as quick as 1 hour for critical issues."
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, we offer various maintenance and support packages to ensure your systems continue to run smoothly after implementation. These can be customized based on your specific needs."
    },
    {
      question: "What is your approach to project management?",
      answer: "We use agile methodologies for most projects, providing regular updates and maintaining transparent communication throughout the development process. Each project is assigned a dedicated project manager."
    },
    {
      question: "Do you provide training for new systems?",
      answer: "Yes, we provide comprehensive training for all implemented solutions. This ensures your team can effectively use and manage the new systems from day one."
    }
  ];

  return (
    <>
      <div className="bg-blue-900 pt-32 pb-20 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Have questions or ready to discuss your project? Our team is here to help you find the right IT solutions for your business.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <Card.Content>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-full mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>

                <p className="text-gray-600 mt-3 mb-2">For support requests:</p>
                <a href="mailto:contact@sysdak.com" className="text-blue-700 hover:text-blue-800 transition-colors">
                  contact@sysdak.com
                </a>
              </Card.Content>
            </Card>

            <Card className="text-center">
              <Card.Content>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-full mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-3">
                  Plot no 48 Nirmun Layout A<br />
                  Samanapalli Road Sipcot 2<br />
                  Hosur - 635109
                </p>
                <a
                  href="https://maps.app.goo.gl/GK625XzubwyE1bYy7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 transition-colors"
                >
                  View on Map
                </a>
              </Card.Content>
            </Card>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 mb-12">
            <div className="flex items-center mb-4">
              <MessagesSquare className="h-6 w-6 text-blue-700 mr-2" />
              <h2 className="text-xl font-semibold text-blue-900">Live Chat Support</h2>
            </div>
            <p className="text-gray-600">
              Need immediate assistance? Our live chat support is available to help you with any questions or technical issues.
              Click the chat icon in the bottom right corner of the screen to speak with a support representative.
            </p>
          </div>
        </Container>
      </section>

      <Contact />

      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and how we work with clients.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <Card.Content>
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </Card.Content>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;