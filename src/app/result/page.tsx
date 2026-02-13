'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ResultCard from '@/components/ResultCard';

export default function Result() {
  const router = useRouter();
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Retrieve result from sessionStorage
    const storedResult = sessionStorage.getItem('powervs_result');
    
    if (!storedResult) {
      // If no result found, redirect to home
      router.push('/');
      return;
    }

    setResult(JSON.parse(storedResult));
  }, [router]);

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="container mx-auto">
        <ResultCard result={result} />
      </div>
    </div>
  );
}