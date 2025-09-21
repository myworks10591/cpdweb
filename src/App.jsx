import React, { useState, useEffect } from 'react';
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

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  // Make setCurrentPage available globally for navigation
  useEffect(() => {
    window.setCurrentPage = setCurrentPage;
    return () => {
      delete window.setCurrentPage;
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const response = await fetch('/data.json');
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
      
      <Banner banners={data.banners} isHomePage={currentPage === 'home'} />
      
      {currentPage !== 'home' && (
        <PageHeader 
          title={currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} 
          breadcrumb={currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} 
        />
      )}
      
      {currentPage === 'home' && (
        <>
          <StatsSection stats={data.stats} />
          <AboutSection />
          <ServicesSection services={data.services} />
          <FeatureSection />
          <ProjectsSection />
          <QuoteSection />
          <TeamSection team={data.team} />
          <TestimonialSection testimonials={data.testimonials} />
        </>
      )}
      
      {currentPage === 'about' && (
        <>
          <StatsSection stats={data.stats} />
          <AboutSection />
          <TeamSection team={data.team} />
        </>
      )}
      
      {currentPage === 'service' && (
        <>
          <ServicesSection services={data.services} />
          <FeatureSection />
          <TestimonialSection testimonials={data.testimonials} />
        </>
      )}
      
      {currentPage === 'contact' && (
        <ContactSection />
      )}
      
      {currentPage === 'project' && (
        <ProjectsSection />
      )}
      
      <Footer 
        contact={data.contact}
        social={data.social}
      />
      
      {/* Back to Top Button */}
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

export default App;