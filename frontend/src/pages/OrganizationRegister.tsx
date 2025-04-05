
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import OrganizationRegisterForm from '@/components/organization/OrganizationRegisterForm';

const OrganizationRegister = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Organization Registration</h1>
              <p className="text-gray-600">
                Create an account for your organization to start hosting volunteer events.
              </p>
            </div>
            
            <OrganizationRegisterForm />
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Already have an account? <Link to="/login" className="text-brand-orange hover:underline">Sign in</Link>
              </p>
              <p className="text-gray-600 mt-2">
                Registering as a volunteer? <Link to="/volunteer-register" className="text-brand-orange hover:underline">Volunteer Registration</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrganizationRegister;
