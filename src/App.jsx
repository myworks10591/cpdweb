import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import PageHeader from './components/PageHeader';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServiceCard';
import FeatureSection from './components/FeatureSection';
import ProjectsSection from './components/ProjectsSection';
import QuoteSection from './components/QuoteSection';
import TeamSection from './components/TeamSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

const AppContent = ({ data }) => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        company={data.company}
        contact={data.contact}
        social={data.social}
        navigation={data.navigation.map(item => ({
          ...item,
          active: item.name.toLowerCase() === currentPage
        }))}
      />
      
      <Routes>
        <Route path="/" element={
          <>
            <Banner banners={data.banners} isHomePage={true} />
            <StatsSection stats={data.stats} />
            <AboutSection />
            <ServicesSection services={data.services} />
            <FeatureSection />
            <ProjectsSection />
            <QuoteSection />
            <TeamSection team={data.team} />
            <TestimonialSection testimonials={data.testimonials} />
          </>
        } />
        
        <Route path="/about" element={
          <>
            <PageHeader 
              title={data.pageHeaders.about.title}
              breadcrumb={data.pageHeaders.about.title}
              backgroundImage={data.pageHeaders.about.image}
            />
            <StatsSection stats={data.stats} />
            <AboutSection />
            <TeamSection team={data.team} />
          </>
        } />
        
        <Route path="/service" element={
          <>
            <PageHeader 
              title={data.pageHeaders.service.title}
              breadcrumb={data.pageHeaders.service.title}
              backgroundImage={data.pageHeaders.service.image}
            />
            <ServicesSection services={data.services} />
            <FeatureSection />
            <TestimonialSection testimonials={data.testimonials} />
          </>
        } />
        
        <Route path="/project" element={
          <>
            <PageHeader 
              title={data.pageHeaders.project.title}
              breadcrumb={data.pageHeaders.project.title}
              backgroundImage={data.pageHeaders.project.image}
            />
            <ProjectsSection />
          </>
        } />
        
        <Route path="/contact" element={
          <>
            <PageHeader 
              title={data.pageHeaders.contact.title}
              breadcrumb={data.pageHeaders.contact.title}
              backgroundImage={data.pageHeaders.contact.image}
            />
            <ContactSection />
          </>
        } />
      </Routes>
      
      <Footer 
        contact={data.contact}
        social={data.social}
      />
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-40 flex items-center justify-center"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const response = await fetch('/cpdweb/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Data</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-primary text-white px-6 py-2 rounded hover:bg-primary-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Data Available</h2>
          <p className="text-gray-600">Please check your data source.</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <AppContent data={data} />
    </Router>
  );
};

export default App;