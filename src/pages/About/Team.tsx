import { Target, Users, Handshake, Zap, Rocket, TrendingUp, Star, Cloud, Bot, Smartphone, Shield, BarChart3, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const Team = () => {
  const navigate = useNavigate();
  const handleStartJourney = () => {
    navigate('/contact');
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Who We Are
              <span className="block text-secondary-light">DataIns Technology LLS</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 animate-fade-in-up [animation-delay:0.3s]">
              A forward-thinking technology company empowering businesses through innovative solutions, 
              expert consulting, and transformational digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              From humble beginnings to industry leaders - discover our journey of innovation and growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Rocket,
                title: 'Founded with Vision',
                year: '2013',
                description: 'Started as a small team of passionate technologists with a vision to democratize cutting-edge technology solutions for businesses of all sizes.'
              },
              {
                icon: TrendingUp,
                title: 'Rapid Growth',
                year: '2020-2023',
                description: 'Expanded our services and client base, establishing ourselves as trusted partners in digital transformation across multiple industries.'
              },
              {
                icon: Star,
                title: 'Industry Recognition',
                year: '2023-Present',
                description: 'Recognized as an industry leader in innovative solutions, serving Fortune 500 companies and startups alike with equal dedication.'
              }
            ].map((milestone, index) => (
              <Card key={milestone.title} className="gradient-card border-0 shadow-medium card-hover animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <milestone.icon className="w-8 h-8" />
                  </div>
                  <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                  <h3 className="text-2xl font-semibold mb-4">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: 'Cloud Solutions',
                description: 'Migration, architecture, and optimization across AWS, Azure, and Google Cloud platforms.',
                features: ['Cloud Migration', 'Multi-Cloud Strategy', 'Cost Optimization', 'Security & Compliance']
              },
              {
                icon: Bot,
                title: 'AI & Machine Learning',
                description: 'Intelligent automation and data-driven insights to transform your business operations.',
                features: ['Predictive Analytics', 'Process Automation', 'Natural Language Processing', 'Computer Vision']
              },
              {
                icon: Smartphone,
                title: 'Digital Transformation',
                description: 'End-to-end modernization of legacy systems and business processes.',
                features: ['System Modernization', 'Process Automation', 'Change Management', 'Training & Support']
              },
              {
                icon: Shield,
                title: 'Cybersecurity',
                description: 'Comprehensive security solutions to protect your digital assets and data.',
                features: ['Security Assessment', 'Threat Detection', 'Compliance Management', 'Incident Response']
              },
              {
                icon: BarChart3,
                title: 'Data Analytics',
                description: 'Transform raw data into actionable insights for strategic decision-making.',
                features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization']
              },
              {
                icon: Globe,
                title: 'Web & Mobile Development',
                description: 'Custom applications that deliver exceptional user experiences across all platforms.',
                features: ['React/Vue Applications', 'Mobile Apps', 'API Development', 'Progressive Web Apps']
              }
            ].map((service, index) => (
              <Card key={service.title} className="gradient-card border-0 shadow-soft card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Excellence', description: 'We strive for perfection in every project, delivering solutions that exceed expectations.' },
              { icon: Handshake, title: 'Integrity', description: 'We build trust through transparency, honesty, and ethical business practices.' },
              { icon: Zap, title: 'Innovation', description: 'We constantly explore new technologies and methodologies to stay ahead of the curve.' },
              { icon: Users, title: 'Partnership', description: 'We collaborate closely with clients as true partners in their success journey.' }
            ].map((value, index) => (
              <div key={value.title} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Partner with DataIns Technology LLS and unlock your organization's full potential 
            through innovative technology solutions tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary animate-bounce-in" style={{ animationDelay: '0.2s' }} onClick={handleStartJourney}>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
