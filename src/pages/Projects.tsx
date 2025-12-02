import React from 'react';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { ChevronRight } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  industry: string;
  client: string;
  duration: string;
  investment: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, industry, client, duration, investment, challenge, solution, results, image }) => {
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg">
          {industry}
        </div>
        <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg">
          ROI: {investment}
        </div>
      </div>
      <Card.Content>
        <div className="mb-4">
          <Card.Title className="mb-2 text-lg">{title}</Card.Title>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <span className="font-semibold text-blue-700">{client}</span>
            <span className="mx-2">•</span>
            <span>{duration}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-900 mb-2 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            Challenge
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">{challenge}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-900 mb-2 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Solution
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">{solution}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Measurable Results
          </h4>
          <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
            {results.map((result, index) => (
              <li key={index} className="font-medium">{result}</li>
            ))}
          </ul>
        </div>
      </Card.Content>
      <Card.Footer>
        <Button
          variant="primary"
          size="sm"
          icon={<ChevronRight size={16} />}
          iconPosition="right"
          className="w-full"
        >
          View Complete Enterprise Study
        </Button>
      </Card.Footer>
    </Card>
  );
};

const ProjectsPage: React.FC = () => {
  const caseStudies = [
    {
      title: "Global Banking Institution Digital Core Transformation",
      industry: "Banking & Finance",
      client: "Fortune 500 Banking Corporation",
      duration: "24 months",
      investment: "$45M",
      challenge: "A leading global bank with $500B+ assets needed to modernize their 30-year-old core banking system while maintaining 99.999% uptime and ensuring strict regulatory compliance across 15 countries.",
      solution: "Architected and implemented a phased digital core transformation involving microservices architecture, cloud-native infrastructure, real-time fraud detection, and unified customer experience platforms serving 50M+ customers.",
      results: [
        "$180M annual operational savings",
        "40% reduction in time-to-market for new products",
        "99.999% system availability achieved",
        "60% improvement in customer satisfaction scores",
        "Full regulatory compliance across 15 jurisdictions",
        "Real-time fraud detection reducing losses by 75%"
      ],
      image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Enterprise Healthcare Platform Modernization",
      industry: "Healthcare",
      client: "Leading Healthcare Network",
      duration: "18 months",
      investment: "$28M",
      challenge: "A major healthcare network with 200+ facilities needed to unify fragmented Electronic Health Records (EHR) systems, improve patient outcomes, and reduce operational costs while maintaining HIPAA compliance.",
      solution: "Delivered a comprehensive healthcare platform integrating EHR, telemedicine, AI-powered diagnostics, predictive analytics, and patient engagement tools across all facilities with seamless data migration.",
      results: [
        "$85M cost reduction over 5 years",
        "45% improvement in patient outcomes",
        "60% reduction in administrative overhead",
        "Real-time data access across 200+ facilities",
        "HIPAA and GDPR compliance certified",
        "Telemedicine adoption increased by 300%"
      ],
      image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Manufacturing IoT & AI-Powered Operations",
      industry: "Manufacturing",
      client: "Global Manufacturing Conglomerate",
      duration: "15 months",
      investment: "$35M",
      challenge: "A multinational manufacturer with 50+ factories needed to implement predictive maintenance, optimize production efficiency, and reduce carbon footprint while maintaining 24/7 operations.",
      solution: "Deployed enterprise-grade IoT infrastructure with 100,000+ sensors, AI-powered predictive analytics, digital twins, and real-time monitoring dashboards integrated with existing ERP systems.",
      results: [
        "$120M annual operational savings",
        "55% reduction in unplanned downtime",
        "35% increase in production efficiency",
        "40% reduction in energy consumption",
        "Carbon footprint reduced by 30%",
        "ROI achieved in 18 months"
      ],
      image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <>
      <div className="bg-blue-900 pt-32 pb-20 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-blue-100">
              Explore our portfolio of successful IT projects and discover how we've helped businesses achieve their goals.
            </p>
          </div>
        </Container>
      </div>
      
      <section className="py-20">
        <Container>
          <Projects />
        </Container>
      </section>
      
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Enterprise Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover how Fortune 500 corporations and global industry leaders leverage our expertise to drive
              multi-million dollar transformations and achieve sustainable competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudy
                key={index}
                title={study.title}
                industry={study.industry}
                client={study.client}
                duration={study.duration}
                investment={study.investment}
                challenge={study.challenge}
                solution={study.solution}
                results={study.results}
                image={study.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="primary"
              icon={<ChevronRight size={18} />}
              iconPosition="right"
            >
              View All Case Studies
            </Button>
          </div>
        </Container>
      </section>
      
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Project Approach</h2>
              <p className="text-gray-600 mb-6">
                Every project at Sysdak Inc is guided by our proven methodology that ensures clear communication, 
                efficient execution, and successful outcomes. We combine agile practices with robust project management 
                to deliver solutions that exceed expectations.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">1. Requirements Analysis</h3>
                  <p className="text-gray-600">We begin by thoroughly understanding your business needs, technical requirements, and project goals.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">2. Solution Design</h3>
                  <p className="text-gray-600">Our experts design a tailored solution that addresses your specific challenges and aligns with your long-term objectives.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">3. Agile Development</h3>
                  <p className="text-gray-600">We employ agile methodologies to ensure flexibility, transparency, and regular delivery of functional components.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">4. Quality Assurance</h3>
                  <p className="text-gray-600">Rigorous testing at every stage ensures that the final solution meets the highest quality standards.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">5. Deployment & Training</h3>
                  <p className="text-gray-600">We handle smooth implementation and provide comprehensive training to ensure your team can effectively use the new solution.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">6. Ongoing Support</h3>
                  <p className="text-gray-600">Our relationship continues after deployment with responsive support and maintenance services.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-700 rounded-tl-3xl rounded-br-3xl -rotate-3 opacity-10"></div>
              <div className="absolute -inset-4 bg-blue-500 rounded-tr-3xl rounded-bl-3xl rotate-3 opacity-10"></div>
              <img
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Project planning"
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

export default ProjectsPage;