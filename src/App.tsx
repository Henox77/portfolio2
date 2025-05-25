import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Languages from './components/Languages';
import Footer from './components/Footer';
import GithubProjects from './components/GithubProjects';

function App() {
  return (
    <div data-theme="dark">
      <Navbar />
      <main>
        <Hero />
        <Languages />
        <GithubProjects />
      </main>
      <Footer />
    </div>
  );
}

export default App;