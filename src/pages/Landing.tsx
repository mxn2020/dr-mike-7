// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { Heart, Stethoscope, Calendar, Users, Star, User, Clock, Shield, Award, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

const getServiceCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['service-card-0', 'service-card-1', 'service-card-2', 'service-card-3'];
  return ids[index] || 'noID';
};

const getSpecialtyBadgeId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['specialty-badge-0', 'specialty-badge-1', 'specialty-badge-2', 'specialty-badge-3', 'specialty-badge-4', 'specialty-badge-5'];
  return ids[index] || 'noID';
};

const getSpecialtyIconId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['specialty-icon-0', 'specialty-icon-1', 'specialty-icon-2', 'specialty-icon-3', 'specialty-icon-4', 'specialty-icon-5'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    reason: '',
    message: ''
  });
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle appointment request submission
    console.log('Appointment request:', appointmentForm);
    // Reset form
    setAppointmentForm({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      reason: '',
      message: ''
    });
    alert('Appointment request submitted! We will contact you soon.');
  };

  const services = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Cardiology",
      description: "Comprehensive heart health assessments and treatments for optimal cardiovascular wellness"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
      title: "General Medicine",
      description: "Primary care services including routine checkups, preventive care, and health screenings"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Preventive Care",
      description: "Proactive healthcare approach focusing on disease prevention and health maintenance"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Specialized Treatment",
      description: "Advanced medical treatments tailored to individual patient needs and conditions"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Patients Treated", value: "10K+" },
    { label: "Success Rate", value: "98%" },
    { label: "Awards", value: "25+" }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with medical gradient background"
        className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100"
      >
      {/* Header */}
      <Header 
        devId="main-header" 
        devName="Main Header" 
        devDescription="Primary site header with navigation"
        className="container mx-auto px-4 py-6"
      >
        <Nav 
          devId="main-nav" 
          devName="Main Navigation" 
          devDescription="Primary navigation bar"
          className="flex items-center justify-between"
        >
          <Div 
            devId="logo-section" 
            devName="Logo Section" 
            devDescription="Doctor Mike logo and brand name"
            className="flex items-center space-x-2"
          >
            <Div devId="noID" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </Div>
            <Span 
              devId="brand-name" 
              devName="Brand Name" 
              devDescription="Doctor Mike brand name"
              className="text-2xl font-bold text-blue-900"
            >
              Dr. Mike
            </Span>
          </Div>
          <Div 
            devId="nav-actions" 
            devName="Navigation Actions" 
            devDescription="Navigation buttons and user menu"
            className="flex items-center space-x-4"
          >
            <Button 
              devId="services-button" 
              devName="Services Button" 
              devDescription="Link to services section"
              variant="ghost" 
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              Services
            </Button>
            <Button 
              devId="about-button" 
              devName="About Button" 
              devDescription="Link to about section"
              variant="ghost" 
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              About
            </Button>
            {isAuthenticated ? (
              <Div 
                devId="user-section" 
                devName="User Section" 
                devDescription="Authenticated user welcome area"
                className="flex items-center space-x-4"
              >
                <Span 
                  devId="welcome-message" 
                  devName="Welcome Message" 
                  devDescription="Welcome message for authenticated user"
                  className="text-blue-700"
                >
                  Welcome, {user?.name?.split(' ')[0]}!
                </Span>
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-button"
                    devName="Navigation Dashboard Button"
                    devDescription="Dashboard button in navigation header for authenticated users"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </Div>
            ) : (
              <Div 
                devId="auth-buttons" 
                devName="Authentication Buttons" 
                devDescription="Login and register buttons for unauthenticated users"
                className="flex items-center space-x-2"
              >
                <Link to="/login">
                  <Button 
                    devId="nav-login-button"
                    devName="Navigation Login Button"
                    devDescription="Login button in navigation header"
                    variant="ghost" 
                    className="text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    devId="nav-register-button"
                    devName="Navigation Register Button"
                    devDescription="Get started button in navigation header"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Book Appointment
                  </Button>
                </Link>
              </Div>
            )}
          </Div>
        </Nav>
      </Header>

      {/* Hero Section */}
      <Container componentId="hero-section">
        <Section 
          devId="hero-content" 
          devName="Hero Content" 
          devDescription="Main hero section with title and call-to-action"
          className="container mx-auto px-4 py-20 text-center"
        >
          <Div 
            devId="hero-content-wrapper" 
            devName="Hero Content Wrapper" 
            devDescription="Animated wrapper for hero content"
            className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <H1 
              devId="hero-title" 
              devName="Hero Title" 
              devDescription="Main hero title showcasing Dr. Mike's practice"
              className="text-5xl md:text-7xl font-bold text-blue-900 mb-6"
            >
              Your Health, 
              <Span 
                devId="care-highlight" 
                devName="Care Highlight" 
                devDescription="Highlighted care text in gradient"
                className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
              >
                {' '}Our Priority
              </Span>
            </H1>
            <P 
              devId="hero-description" 
              devName="Hero Description" 
              devDescription="Hero section description explaining Dr. Mike's approach"
              className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto"
            >
              Providing comprehensive, compassionate healthcare with over 15 years of experience. 
              Your wellness journey starts with personalized care and expert medical guidance.
            </P>
            <Div 
              devId="hero-cta-buttons" 
              devName="Hero CTA Buttons" 
              devDescription="Call-to-action buttons in hero section"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                devId="hero-book-appointment"
                devName="Book Appointment Button"
                devDescription="Primary call-to-action button for booking appointments"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                onClick={() => document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button 
                devId="hero-learn-more"
                devName="Learn More Button"
                devDescription="Secondary button to learn more about services"
                variant="outline"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Stats Section */}
      <Container componentId="stats-section">
        <Section 
          devId="stats-content" 
          devName="Stats Content" 
          devDescription="Statistics section showing practice metrics"
          className="container mx-auto px-4 py-12"
        >
          <Div 
            devId="stats-grid" 
            devName="Stats Grid" 
            devDescription="Grid container for statistics cards"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                devId={getStatCardId(index)}
                devName={`${stat.label} Stat Card`}
                devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-200 shadow-lg"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</Div>
                  <Div devId="noID" className="text-blue-600">{stat.label}</Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Services Section */}
      <Container componentId="services-section">
        <Section devId="noID" className="container mx-auto px-4 py-20" id="services-section">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-blue-900 mb-4">Medical Services</H2>
            <P devId="noID" className="text-blue-700 max-w-2xl mx-auto">
              Comprehensive healthcare services tailored to meet your individual needs with the highest standards of medical care
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                devId={getServiceCardId(index)}
                devName={`${service.title} Service Card`}
                devDescription={`Service card highlighting ${service.title}: ${service.description}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200 hover:border-blue-400 transition-all shadow-lg hover:shadow-xl"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{service.icon}</Div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                  <P devId="noID" className="text-blue-600">{service.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Specialties Section */}
      <Container componentId="specialties-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-blue-900 mb-4">Areas of Expertise</H2>
            <P devId="noID" className="text-blue-700 max-w-2xl mx-auto">
              Specialized medical expertise across multiple healthcare disciplines
            </P>
          </Div>
          <Div devId="noID" className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              { name: "Cardiology", color: "from-red-400 to-red-500" },
              { name: "Internal Medicine", color: "from-blue-400 to-blue-500" },
              { name: "Preventive Care", color: "from-green-400 to-green-500" },
              { name: "Geriatrics", color: "from-purple-400 to-purple-500" },
              { name: "Wellness", color: "from-teal-400 to-teal-500" },
              { name: "Diagnostics", color: "from-orange-400 to-orange-500" }
            ].map((specialty, index) => (
              <Div key={index} devId="noID" className="text-center">
                <Div devId={getSpecialtyIconId(index)} className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${specialty.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{specialty.name[0]}</span>
                </Div>
                <Badge 
                  devId={getSpecialtyBadgeId(index)}
                  devName={`${specialty.name} Specialty Badge`}
                  devDescription={`Specialty badge for ${specialty.name}`}
                  className="text-blue-700 font-medium bg-transparent border-none"
                >
                  {specialty.name}
                </Badge>
              </Div>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Appointment Request Form */}
      <Container componentId="appointment-form-section">
        <Section devId="noID" className="container mx-auto px-4 py-20" id="appointment-form">
          <Div devId="noID" className="max-w-2xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm border border-blue-200 shadow-xl">
              <CardContent devId="noID" className="p-8">
                <Div devId="noID" className="text-center mb-8">
                  <H2 devId="noID" className="text-3xl font-bold text-blue-900 mb-4">Request an Appointment</H2>
                  <P devId="noID" className="text-blue-700">
                    Fill out the form below and we'll contact you to schedule your appointment
                  </P>
                </Div>
                <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                  <Div devId="noID" className="grid md:grid-cols-2 gap-4">
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-blue-900 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={appointmentForm.name}
                        onChange={(e) => setAppointmentForm({...appointmentForm, name: e.target.value})}
                        className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full name"
                      />
                    </Div>
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-blue-900 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={appointmentForm.email}
                        onChange={(e) => setAppointmentForm({...appointmentForm, email: e.target.value})}
                        className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                      />
                    </Div>
                  </Div>
                  <Div devId="noID" className="grid md:grid-cols-2 gap-4">
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-blue-900 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={appointmentForm.phone}
                        onChange={(e) => setAppointmentForm({...appointmentForm, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                      />
                    </Div>
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-blue-900 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        value={appointmentForm.preferredDate}
                        onChange={(e) => setAppointmentForm({...appointmentForm, preferredDate: e.target.value})}
                        className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </Div>
                  </Div>
                  <Div devId="noID" className="grid md:grid-cols-2 gap-4">
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-blue-900 mb-2">Preferred Time</label>
                      <select
                        value={appointmentForm.preferredTime}
                        onChange={(e) => setAppointmentForm({...appointmentForm, preferredTime: e.target.value})}
                        className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 8PM)</option>
                      </select>
                    </Div>
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-blue-900 mb-2">Reason for Visit</label>
                      <select
                        value={appointmentForm.reason}
                        onChange={(e) => setAppointmentForm({...appointmentForm, reason: e.target.value})}
                        className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select reason</option>
                        <option value="checkup">Regular Checkup</option>
                        <option value="consultation">Consultation</option>
                        <option value="followup">Follow-up</option>
                        <option value="emergency">Urgent Care</option>
                        <option value="other">Other</option>
                      </select>
                    </Div>
                  </Div>
                  <Div devId="noID">
                    <label className="block text-sm font-medium text-blue-900 mb-2">Additional Message</label>
                    <textarea
                      rows={4}
                      value={appointmentForm.message}
                      onChange={(e) => setAppointmentForm({...appointmentForm, message: e.target.value})}
                      className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Any additional information or specific concerns..."
                    />
                  </Div>
                  <Button 
                    type="submit"
                    devId="submit-appointment"
                    devName="Submit Appointment Button"
                    devDescription="Submit button for appointment request form"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Request Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Div>
        </Section>
      </Container>

      {/* Contact Section */}
      <Container componentId="contact-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-2xl p-12 text-center border border-blue-300">
            <H2 devId="noID" className="text-4xl font-bold text-blue-900 mb-4">Get in Touch</H2>
            <P devId="noID" className="text-blue-700 mb-8 max-w-2xl mx-auto">
              Have questions or need immediate assistance? Contact our office directly
            </P>
            <Div devId="noID" className="grid md:grid-cols-3 gap-6 mb-8">
              <Div devId="noID" className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-2" />
                <P devId="noID" className="font-semibold text-blue-900">Phone</P>
                <P devId="noID" className="text-blue-700">(555) 123-4567</P>
              </Div>
              <Div devId="noID" className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-2" />
                <P devId="noID" className="font-semibold text-blue-900">Email</P>
                <P devId="noID" className="text-blue-700">info@drmike.com</P>
              </Div>
              <Div devId="noID" className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-2" />
                <P devId="noID" className="font-semibold text-blue-900">Address</P>
                <P devId="noID" className="text-blue-700">123 Health St, Medical City</P>
              </Div>
            </Div>
            <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                devId="contact-call"
                devName="Call Now Button"
                devDescription="Button to call the office"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                devId="contact-email"
                devName="Send Email Button"
                devDescription="Button to send email"
                variant="outline"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Footer */}
      <Footer 
        devId="main-footer" 
        devName="Main Footer" 
        devDescription="Site footer with links and copyright"
        className="container mx-auto px-4 py-8 border-t border-blue-200"
      >
        <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
          <Div devId="noID" className="text-blue-700 mb-4 md:mb-0">
            © 2024 Dr. Mike Medical Practice. Providing quality healthcare with compassion.
          </Div>
          <Div devId="noID" className="flex space-x-6">
            <a href="#" className="text-blue-600 hover:text-blue-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-600 hover:text-blue-900 transition-colors">Terms of Service</a>
            <a href="#" className="text-blue-600 hover:text-blue-900 transition-colors">Patient Portal</a>
          </Div>
        </Div>
      </Footer>
      </Div>
    </Container>
  );
};