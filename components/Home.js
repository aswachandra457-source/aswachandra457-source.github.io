// @jsx React.createElement
// This directive is needed for Babel Standalone to properly handle JSX without imports.
const { useState } = React;

const HomePage = () => {
  const profile = {
    name: "Aswin C P",
    title: "ABPM (GDS) at Mayyannur BO, Vadakara Division",
    bio: "I'm Aswin C P, an ABPM (GDS) at Mayyannur BO, Vadakara Division, with a strong interest in technology and digital transformation. Alongside my postal role, I have developed skills in React.js, JavaScript, OOP concepts, PostgreSQL, and Python for AI/ML, and I am eager to apply them in CEPT’s projects. My motivation to join CEPT comes from regularly finding issues in existing Post Office websites and tools. Many of them can be made more user-friendly, efficient, and reliable, and I want to use my technical skills to solve these problems and create better tools for employees and customers. I have worked on projects such as React + JavaScript web apps with dynamic forms and dashboards, OOP-based mini systems, AI/ML classification models with Python for predictions, and full-stack practice projects. I am a fast learner with strong problem-solving skills, always motivated to pick up new technologies quickly and deliver practical results. With my blend of postal knowledge and technical capability, I am confident of contributing to CEPT’s mission in digital innovation.",
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

  const gitHubUrl = "https://github.com/your-username";

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
      url: "https://coursera.org/share/407e28fa6f06bf9c9aa04a52ec8e",
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
      name: "edX (Harvard)",
      title: "CS50's Introduction to Artificial Intelligence with Python",
      university: "Harvard University",
      url: "https://www.edx.org/course/...",
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

  const certificationsByPlatform = certifications.reduce((acc, cert) => {
    const platform = cert.name;
    if (!acc[platform]) {
      acc[platform] = [];
    }
    acc[platform].push(cert);
    return acc;
  }, {});

  return (
    <>
      <main className="container mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16">
        <section id="profile" className="flex flex-col items-center justify-center text-center space-y-4 mb-16 relative z-10">
          <div className="relative w-40 h-40 rounded-full before:absolute before:inset-0 before:bg-radial-gradient before:from-cyan-500 before:to-transparent before:opacity-30 before:rounded-full before:z-0">
            <img src={profile.avatarUrl} alt="Aswin C P's Photo" className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-lg transition-transform duration-300 hover:scale-105 z-10 relative mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">{profile.name}</h1>
          <p className="text-xl md:text-2xl font-light text-gray-400">{profile.title}</p>
          <div className="max-w-3xl mx-auto">
            <p className="text-md md:text-lg text-gray-400 rounded-lg p-6 bg-gray-800 shadow-inner">
              {profile.bio}
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-700" />

        <section id="introduction" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Why I'm a good fit for CEPT</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-400">
            <ul className="list-disc list-inside space-y-2">
              <li>
                **Motivation:** Eager to solve real-world problems by improving existing Post Office websites and tools.
              </li>
              <li>
                **Project-Based Experience:**
                <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                  <li>React + JavaScript web apps with dynamic forms and dashboards.</li>
                  <li>OOP-based mini systems using clean, modular code.</li>
                  <li>AI/ML classification models with Python for predictions.</li>
                  <li>Full-stack practice projects integrating frontend, backend, and databases.</li>
                </ul>
              </li>
              <li>
                **Problem-Solving Skills:** A fast and motivated learner who quickly picks up new technologies.
              </li>
              <li>
                **Unique Blend of Skills:** Combines deep postal knowledge with technical capability to contribute to digital innovation.
              </li>
            </ul>
          </div>
        </section>

        <hr className="my-12 border-gray-700" />
        
        <section id="skills" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-cyan-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg transition-transform duration-200 hover:scale-110">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <hr className="my-12 border-gray-700" />

        <section id="certifications" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Certifications</h2>
          {Object.keys(certificationsByPlatform).map(platform => (
            <div key={platform} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-4">{platform}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificationsByPlatform[platform].map((cert, index) => (
                  <a key={index} href={cert.url} target="_blank" rel="noopener noreferrer" className="group block rounded-xl bg-gray-800 p-6 shadow-md border border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400">
                    <div className="flex items-center space-x-4 mb-4">
                      {cert.icon}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-200">{cert.title}</h3>
                        <p className="text-sm font-medium text-cyan-400">{cert.university}</p>
                      </div>
                    </div>
                    <div className="h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:h-auto group-hover:opacity-100">
                      <p className="text-sm font-light text-gray-400 mt-2">
                        {cert.name}
                      </p>
                      <div className="mt-4 inline-flex items-center text-cyan-400 text-sm font-medium">
                        View Certificate
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-2h6m-6 0v6m0-6l6-6"/></svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        <hr className="my-12 border-gray-700" />

        <section id="projects" className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Projects</h2>
          <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gray-800 text-cyan-400 font-semibold px-6 py-3 rounded-full shadow-lg border border-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 21c-5.523 0-10-4.477-10-10S4.477 1 10 1s10 4.477 10 10-4.477 10-10 10zm-1-12h2v4H9v-4zm0 6h2v2H9v-2z"/>
            </svg>
            My GitHub Profile
          </a>
          <p className="mt-4 text-gray-400">Explore my work and projects on GitHub.</p>
        </section>
      </main>
    </>
  );
};
