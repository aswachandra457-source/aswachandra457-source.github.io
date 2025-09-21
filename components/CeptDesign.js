// @jsx React.createElement
// This directive is needed for Babel Standalone to properly handle JSX without imports.
const CeptDesignPage = () => (
  <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16">
    <div className="bg-white p-6 md:p-12 rounded-lg shadow-2xl">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img src="https://cept.gov.in/Img/cept_logo.png" alt="CEPT Logo" className="h-12" />
          <h1 className="text-2xl md:text-3xl font-bold text-blue-800 tracking-wide">CEPT</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">About Us</a>
          <a href="#" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">Services</a>
          <a href="#" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">Contact</a>
        </nav>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight mb-4">Conceptual Redesign: CEPT.gov.in (Primary Stage)</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          My conceptual redesign of the CEPT website focuses on a clean, intuitive, and efficient user experience for both employees and the public.
        </p>
        <p className="mt-4 text-sm text-gray-500 italic">
          Note: This is a conceptual project in its primary stage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">User-Centric Design</h3>
          <p className="text-gray-600">Improving navigation and accessibility to make tools more user-friendly for all.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Streamlined Services</h3>
          <p className="text-gray-600">Simplifying complex processes with clear, step-by-step digital workflows.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Enhanced Performance</h3>
          <p className="text-gray-600">Building a fast and reliable platform optimized for performance on all devices.</p>
        </div>
      </div>

      <button 
        onClick={() => setCurrentPage('home')} 
        className="mt-12 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold transition-transform duration-200 hover:scale-105 shadow-lg"
      >
        Go Back
      </button>
    </div>
  </div>
);
