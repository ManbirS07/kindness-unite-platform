
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { UserRound, Building2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Join Kindness Unite</h1>
              <p className="text-gray-600">
                Choose how you'd like to register with our platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <UserRound className="h-8 w-8 text-brand-orange" />
                  </div>
                  <CardTitle>I'm a Volunteer</CardTitle>
                  <CardDescription>
                    I want to find and participate in volunteer opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Create a volunteer account to discover events, track your impact, and connect with organizations in your community.
                  </p>
                  <Link to="/volunteer-register" className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-md inline-block transition-colors">
                    Volunteer Registration
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>I'm an Organization</CardTitle>
                  <CardDescription>
                    I want to post events and recruit volunteers
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Register your organization to create volunteer events, manage applications, and make a difference in your community.
                  </p>
                  <Link to="/organization-register" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md inline-block transition-colors">
                    Organization Registration
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Already have an account? <Link to="/login" className="text-brand-orange hover:underline">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
