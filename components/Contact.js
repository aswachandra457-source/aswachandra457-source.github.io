// @jsx React.createElement
// This directive is needed for Babel Standalone to properly handle JSX without imports.
const ContactPage = () => (
  <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16">
    <div className="bg-gray-800 p-6 md:p-12 rounded-lg shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Contact Me</h2>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div className="text-gray-300">
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-lg">aswincp457@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.185l-2.498 1.571a3 3 0 00-.715 3.012l.276.534a1 1 0 001.27.46l4.243-2.673a1 1 0 011.267.46l.276.534a3 3 0 00-.715 3.012l-2.498 1.571a1 1 0 01-.502 1.185l1.498 4.493a1 1 0 01.948.684H19a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" />
          </svg>
          <div className="text-gray-300">
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-lg">8921747026</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v6zM7 11h10a2 2 0 012 2v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4a2 2 0 012-2z" />
          </svg>
          <div className="text-gray-300">
            <h3 className="text-xl font-semibold">Designation</h3>
            <p className="text-lg">ABPM (GDS)</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <button 
          onClick={() => setCurrentPage('home')} 
          className="px-8 py-3 rounded-full bg-cyan-600 text-white font-semibold transition-transform duration-200 hover:scale-105 shadow-lg"
        >
          Go Back
        </button>
      </div>
    </div>
  </div>
);
