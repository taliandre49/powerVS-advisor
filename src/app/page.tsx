import Link from 'next/link';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Zap className="text-blue-600" size={64} />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            PowerVS Fit Advisor
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Find out if IBM PowerVS is the right fit for your workload in just 2 minutes.
            Get personalized recommendations based on your specific requirements.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Start Assessment
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <Target className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Tailored Analysis
            </h3>
            <p className="text-gray-600">
              Answer 6 quick questions about your workload, infrastructure, and requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <TrendingUp className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Clear Recommendation
            </h3>
            <p className="text-gray-600">
              Get a straightforward assessment: Strong Fit, Maybe, or Not Ideal.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <Zap className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Actionable Next Steps
            </h3>
            <p className="text-gray-600">
              Receive specific guidance on architecture patterns and next actions.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Trusted by IBM teams worldwide</p>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <span>Sales Engineering</span>
            <span>•</span>
            <span>Solution Architects</span>
            <span>•</span>
            <span>Product Marketing</span>
          </div>
        </div>
      </div>
    </div>
  );
}