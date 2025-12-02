import React, { useState } from 'react';
import Card from '../ui/Card';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise Cloud Migration',
    category: 'Cloud Solutions',
    description: 'Migrated a large enterprise from legacy systems to a modern cloud architecture.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Software Development',
    description: 'Built a scalable e-commerce platform with advanced analytics and personalization.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Security Infrastructure Overhaul',
    category: 'Cybersecurity',
    description: 'Implemented a comprehensive security solution for a financial services company.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Data Warehouse Implementation',
    category: 'Data Management',
    description: 'Designed and deployed a modern data warehouse for a retail corporation.',
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Business Intelligence Dashboard',
    category: 'Data Analytics',
    description: 'Created interactive BI dashboards to visualize KPIs and business metrics.',
    image: 'https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'IT Strategy Consulting',
    category: 'IT Consulting',
    description: 'Developed a 5-year technology roadmap for a growing manufacturing company.',
    image: 'https://images.pexels.com/photos/8000675/pexels-photo-8000675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Projects: React.FC = () => {
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20" id="projects">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries and technologies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="h-full">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <Card.Content>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                  {project.category}
                </span>
                <Card.Title>{project.title}</Card.Title>
                <Card.Description>{project.description}</Card.Description>
              </Card.Content>
              <Card.Footer>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;