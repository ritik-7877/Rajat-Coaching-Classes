import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Results from './components/Results';
import CoursesSection from './components/CoursesSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const handleExploreCourses = () => {
    document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar />
      <Hero onExploreCourses={handleExploreCourses} />
      <Results />
      <CoursesSection />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
