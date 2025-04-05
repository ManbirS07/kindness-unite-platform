
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About Kindness Unite</h1>
          
          <div className="mb-12 relative overflow-hidden rounded-xl">
            <div className="aspect-[21/9] bg-gradient-to-r from-brand-orange/40 to-orange-400/40 flex items-center justify-center">
              <p className="text-2xl font-medium text-white text-center max-w-2xl p-8">
                Connecting passionate volunteers with meaningful causes
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                Kindness Unite was founded with a simple yet powerful mission: to bridge the gap between willing volunteers 
                and the organizations that need their help. We believe that everyone has something valuable to offer, and by 
                facilitating these connections, we can create a more compassionate and supportive community.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Kindness Unite began in 2023 when a group of community organizers noticed how difficult it was to find and 
                coordinate volunteers for local projects. What started as a simple spreadsheet grew into a comprehensive 
                platform that now serves thousands of volunteers and organizations across the country.
              </p>
              <p className="text-gray-700">
                Through dedication and collaboration, we've created a space where goodwill can thrive, making it easier 
                than ever for people to contribute to causes they care about.
              </p>
            </section>
            
            <section className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">For Volunteers</h3>
                <p className="text-gray-600">
                  Discover opportunities that match your skills, interests, and availability. 
                  Track your impact and connect with like-minded individuals.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">For Organizations</h3>
                <p className="text-gray-600">
                  Post events, manage volunteer applications, and amplify your impact 
                  with a dedicated community of helpers.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">For Communities</h3>
                <p className="text-gray-600">
                  Build stronger, more resilient neighborhoods through collective action 
                  and shared purpose.
                </p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium">Compassion</h3>
                  <p className="text-gray-700">We believe in the power of empathy and understanding to drive meaningful change.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Accessibility</h3>
                  <p className="text-gray-700">Volunteering should be accessible to everyone, regardless of background or experience.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Impact</h3>
                  <p className="text-gray-700">We focus on creating measurable, sustainable change in communities.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Collaboration</h3>
                  <p className="text-gray-700">By working together, we can accomplish far more than we could individually.</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
              <p className="text-gray-700 mb-4">
                Whether you're looking to volunteer your time, seeking help for your organization, or simply want to 
                support our mission, we welcome you to the Kindness Unite community.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/register" className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors">
                  Register Now
                </a>
                <a href="/contact" className="bg-white border border-gray-300 hover:bg-gray-50 px-6 py-2 rounded-md transition-colors">
                  Contact Us
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
