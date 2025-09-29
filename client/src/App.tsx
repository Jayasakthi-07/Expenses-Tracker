import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            💰 Expenses Tracker
          </h1>
          <p className="text-xl text-gray-600">
            A premium expense tracking application with modern UI/UX
          </p>
        </header>
        
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Welcome to Your Expense Tracker
            </h2>
            <p className="text-gray-600 mb-6">
              Your React + TypeScript + TailwindCSS application is ready!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-semibold text-gray-800">Analytics</h3>
                <p className="text-sm text-gray-600">Track spending patterns</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-3xl mb-2">💳</div>
                <h3 className="font-semibold text-gray-800">Management</h3>
                <p className="text-sm text-gray-600">Organize expenses</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl mb-2">🔐</div>
                <h3 className="font-semibold text-gray-800">Security</h3>
                <p className="text-sm text-gray-600">Secure authentication</p>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="text-center mt-12 text-gray-600">
          <p>Built with ❤️ using React, TypeScript, and TailwindCSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
