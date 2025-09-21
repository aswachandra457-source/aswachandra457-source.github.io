// @jsx React.createElement
// This directive is needed for Babel Standalone to properly handle JSX without imports.
const { useState } = React;

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={setCurrentPage} />;
            case 'cept':
                return <CeptDesignPage onNavigate={setCurrentPage} />;
            case 'contact':
                return <ContactPage onNavigate={setCurrentPage} />;
            default:
                return <HomePage onNavigate={setCurrentPage} />;
        }
    };

    return (
        <div className="bg-gray-900 text-gray-200 min-h-screen font-sans antialiased leading-relaxed">
            <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-lg p-4">
                <nav className="container mx-auto flex justify-center space-x-4">
                    <button onClick={() => setCurrentPage('home')} className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" style={{ backgroundColor: currentPage === 'home' ? '#0d9488' : 'transparent', color: currentPage === 'home' ? '#fff' : '#c9d1d9' }}>
                        Home
                    </button>
                    <button onClick={() => setCurrentPage('cept')} className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" style={{ backgroundColor: currentPage === 'cept' ? '#0d9488' : 'transparent', color: currentPage === 'cept' ? '#fff' : '#c9d1d9' }}>
                        CEPT Design
                    </button>
                    <button onClick={() => setCurrentPage('contact')} className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" style={{ backgroundColor: currentPage === 'contact' ? '#0d9488' : 'transparent', color: currentPage === 'contact' ? '#fff' : '#c9d1d9' }}>
                        Contact
                    </button>
                </nav>
            </header>
            <main className="pt-20">
                {renderPage()}
            </main>
        </div>
    );
};

const HomePage = ({ onNavigate }) => {
    const profile = {
        name: "Aswin C P",
        title: "ABPM (GDS) at Mayyannur BO, Vadakara Division",
        bio: "I'm Aswin C P, an ABPM (GDS) at Mayyannur BO, Vadakara Division, with a strong interest in technology and digital transformation. Alongside my postal role, I have developed skills in React.js, JavaScript, OOP concepts, PostgreSQL, and Python for AI/ML, and I am eager to apply them in CEPT’s projects. My motivation to join CEPT comes from regularly finding issues in existing Post Office websites and tools. Many of them can be made more user-friendly, efficient, and reliable, and I want to use my technical skills to solve these problems and create better tools for employees and customers. I am a fast learner with strong problem-solving skills, always motivated to pick up new technologies quickly and deliver practical results. With my blend of postal knowledge and technical capability, I am confident of contributing to CEPT’s mission in digital innovation.",
        avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocKFra21rw0LaKb8hFa93uxcmwgMLP5qwTyKI8s-HLraNQb7wtdb=s288-c-no"
    };

    const skills = [
        "React.js",
        "JavaScript",
        "Python",
        "OOP Concepts",
        "PostgreSQL",
        "AI/ML"
    ];

    const certifications = [
        {
            name: "Coursera",
            title: "Architecting with Google Compute Engine",
            university: "Google Cloud",
            url: "https://coursera.org/share/36e46649e69fb0393d612777a1c91d40",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-cyan-400"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 6v6.25c0 .414.336.75.75.75h4.25c.414 0 .75-.336.75-.75S17.414 11 17 11h-4v-5z"></path></svg>
            )
        },
        {
            name: "Coursera",
            title: "Introduction to TensorFlow for AI, ML, and DL",
            university: "DeepLearning.AI",
            url: "https://coursera.org/share/407e28fa6f06bf9c9aa04a960a52ec8e",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-cyan-400"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 6v6.25c0 .414.336.75.75.75h4.25c.414 0 .75-.336.75-.75S17.414 11 17 11h-4v-5z"></path></svg>
            )
        },
        {
            name: "Coursera",
            title: "Neural Networks and Deep Learning",
            university: "DeepLearning.AI",
            url: "https://coursera.org/share/3c4f62b1a9182e890bc38c4b374eb6b2",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-cyan-400"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 6v6.25c0 .414.336.75.75.75h4.25c.414 0 .75-.336.75-.75S17.414 11 17 11h-4v-5z"></path></svg>
            )
        },
        {
            name: "Coursera",
            title: "Programming for Everybody (Python)",
            university: "University of Michigan",
            url: "https://coursera.org/share/755f662ce458e131ba10ed7e5116dce2",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-cyan-400"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 6v6.25c0 .414.336.75.75.75h4.25c.414 0 .75-.336.75-.75S17.414 11 17 11h-4v-5z"></path></svg>
            )
        },
        {
            name: "edX",
            title: "Python Basics for Data Science",
            university: "IBM",
            url: "https://courses.edx.org/certificates/ada24f1e5e2d44308c2be0724e81ef20?_gl=1*8uo1rs*_gcl_au*Mzk1NzY0MTUxLjE3NTg0ODU2NjQ.*_ga*MzUwNjQwMTIzLjE3NTg0ODU2NjQ.*_ga_D3KS4KMDT0*czE3NTg0ODU2NjQkbzEkZzEkdDE3NTg0ODU3NzYkajEwJGwwJGgw",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-400"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 11H8M16 15H8"></path></svg>
            )
        },
        {
            name: "edX",
            title: "CS50's Introduction to Artificial Intelligence with Python",
            university: "Harvard University",
            url: "https://www.edx.org/course/...", // Placeholder link
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-400"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 11H8M16 15H8"></path></svg>
            )
        },
        {
            name: "Swayam NPTEL",
            title: "Python for Datascience",
            university: "IIT Madras",
            url: "https://swayam.gov.in/course/...",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-400"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V5H6.5A2.5 2.5 0 0 0 4 7.5v12z"></path><path d="M8 9h8"></path><path d="M8 13h8"></path></svg>
            )
        }
    ];

    const projectUrl = "https://github.com/aswachandra457/source";

    const certificationsByPlatform = certifications.reduce((acc, cert) => {
        const platform = cert.name;
        if (!acc[platform]) {
            acc[platform] = [];
        }
        acc[platform].push(cert);
        return acc;
    }, {});

    return (
        <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16">
            <section id="profile" className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
                    <img className="object-cover w-full h-full" src={profile.avatarUrl} alt="Aswin C P" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100">{profile.name}</h1>
                <p className="text-lg md:text-xl text-gray-400">{profile.title}</p>
                <div className="max-w-prose text-sm md:text-base text-gray-300">
                    <p className="mb-4">{profile.bio}</p>
                </div>
            </section>

            <section id="skills" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">Skills</h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {skills.map((skill, index) => (
                        <span key={index} className="bg-gray-800 text-cyan-400 text-sm font-medium px-4 py-1.5 rounded-full shadow-md">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <section id="certifications" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.keys(certificationsByPlatform).map((platform, index) => (
                        <div key={index} className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                            <div className="p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                    <span className="text-2xl">{certificationsByPlatform[platform][0].icon}</span>
                                    <h3 className="text-xl font-semibold text-gray-100">{platform}</h3>
                                </div>
                                <div className="space-y-4">
                                    {certificationsByPlatform[platform].map((cert, certIndex) => (
                                        <div key={certIndex} className="bg-gray-700 rounded-md p-4 transition-all duration-300 transform group-hover:scale-105">
                                            <h4 className="font-bold text-gray-100">{cert.title}</h4>
                                            <p className="text-sm text-cyan-400 mb-2">{cert.university}</p>
                                            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200">
                                                View Certificate
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="projects" className="mb-16 text-center">
                <h2 className="text-3xl font-bold text-gray-100 mb-4">My Projects</h2>
                <p className="text-gray-300 max-w-prose mx-auto mb-6">
                    You can explore all of my projects, including the ones mentioned in my bio, on my GitHub profile.
                </p>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border-2 border-cyan-400 text-base font-medium rounded-full text-cyan-400 bg-transparent hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 3c.95-2.64-.52-5.36-2.61-6a5.07 5.07 0 00-2.42.59A5.44 5.44 0 0012 3c-1.57 0-3.04.59-4.14 1.56A5.44 5.44 0 003 4.77a5.44 5.44 0 00-5-7c-3.14.35-6.44 1.54-6.44 7a5.44 5.44 0 001.37 3.73A3.37 3.37 0 003.55 16.13a3.37 3.37 0 00-.94 2.61v3.87c2-1.5 7-1.5 7-3l.5-.5z" /></svg>
                    GitHub Profile
                </a>
            </section>
        </div>
    );
};

const CeptDesignPage = ({ onNavigate }) => (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16">
        <div className="flex justify-center mb-8">
            <button onClick={() => onNavigate('home')} className="px-6 py-3 border-2 border-cyan-400 text-base font-medium rounded-full text-cyan-400 bg-transparent hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300">
                Go Back
            </button>
        </div>
        <h1 className="text-4xl font-bold text-gray-100 mb-2 text-center">
            Conceptual Redesign: CEPT.gov.in
        </h1>
        <p className="text-gray-400 mb-10 text-center">This is a project in its primary stage to demonstrate potential improvements to the existing site.</p>
        
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-12 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6 text-center">A Modern, User-Focused CEPT</h2>
            
            <div className="w-full h-auto bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between p-4 bg-gray-700">
                    <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                        <span className="font-semibold text-gray-200">CEPT Website</span>
                    </div>
                    <div className="flex space-x-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                </div>
                
                <div className="p-8 space-y-12">
                    <div className="text-center">
                        <h3 className="text-4xl lg:text-5xl font-extrabold text-cyan-400 mb-4">CEPT: Empowering Digital Transformation</h3>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Designing and building efficient, reliable, and user-friendly digital tools for the Department of Posts.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h4 className="text-xl font-bold text-gray-100 mb-2">Modern User Interface</h4>
                            <p className="text-gray-300 text-sm">A clean and intuitive design for a seamless user experience for both employees and customers.</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h4 className="text-xl font-bold text-gray-100 mb-2">Enhanced Efficiency</h4>
                            <p className="text-gray-300 text-sm">Streamlined workflows and reliable tools to increase productivity within postal operations.</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h4 className="text-xl font-bold text-gray-100 mb-2">Secure & Scalable</h4>
                            <p className="text-gray-300 text-sm">Architected with modern technologies to ensure robust security and future scalability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ContactPage = ({ onNavigate }) => (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16 text-center">
        <div className="flex justify-center mb-8">
            <button onClick={() => onNavigate('home')} className="px-6 py-3 border-2 border-cyan-400 text-base font-medium rounded-full text-cyan-400 bg-transparent hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300">
                Go Back
            </button>
        </div>
        <h1 className="text-4xl font-bold text-gray-100 mb-4">Contact Me</h1>
        <p className="text-gray-400 mb-12">I'm always open to new opportunities and collaborations. Feel free to get in touch!</p>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 space-y-8 max-w-lg mx-auto">
            <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <h3 className="text-lg font-semibold text-gray-100">Email Address</h3>
                <a href="mailto:aswincp457@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">aswincp457@gmail.com</a>
            </div>

            <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2.06 19.5 19.5 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.07-8.63A2 2 0 0 1 3.07 4H6c.44 0 .76.1.9-.34l.2-1.21A2 2 0 0 1 9.4 1h5.2a2 2 0 0 1 1.3 2.1l-.2 1.21c-.14.44-.46.54-.9.54h-3.3c-.66 0-1.2.54-1.2 1.2v.3c0 .66.54 1.2 1.2 1.2h3.3c.44 0 .76-.1.9-.34l.2-1.21A2 2 0 0 1 14.6 23h-5.2a2 2 0 0 1-1.3-2.1l.2-1.21c.14-.44.46-.54.9-.54h3.3c.66 0 1.2-.54 1.2-1.2v-.3c0-.66-.54-1.2-1.2-1.2z"></path><line x1="18" y1="13" x2="21.5" y2="13"></line><line x1="2.5" y1="13" x2="6" y2="13"></line><line x1="18" y1="18" x2="21.5" y2="18"></line><line x1="2.5" y1="18" x2="6" y2="18"></line><circle cx="12" cy="18" r="1.5"></circle></svg>
                <h3 className="text-lg font-semibold text-gray-100">Phone Number</h3>
                <p className="text-gray-300">8921747026</p>
            </div>
            
            <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><path d="M16 16c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z"></path><path d="M12 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path><path d="M12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>
                <h3 className="text-lg font-semibold text-gray-100">Designation</h3>
                <p className="text-gray-300">ABPM (GDS)</p>
            </div>
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
