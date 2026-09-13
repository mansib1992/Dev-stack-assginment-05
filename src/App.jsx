import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import TechGrid from './components/TechGrid';
import YourStack from './components/YourStack';
import Footer from './components/Footer';
import { defaultTechnologies } from './data/defaultTech';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/technologies.json');
        if (!res.ok) {
          throw new Error('Failed to load JSON data');
        }
        const data = await res.json();
        setTimeout(() => {
          setTechnologies(data);
          setIsLoading(false);
        }, 600);
      } catch (err) {
        console.warn('Falling back to local data:', err);
        setTimeout(() => {
          setTechnologies(defaultTechnologies);
          setIsLoading(false);
        }, 600);
      }
    };

    fetchTechnologies();
  }, []);

  const handleAddToStack = (tech) => {
    const exists = stack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`, {
        icon: '⚠️',
      });
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      icon: '🚀',
    });
  };

  const handleRemoveFromStack = (techId) => {
    const itemToRemove = stack.find((item) => item.id === techId);
    setStack((prev) => prev.filter((item) => item.id !== techId));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from stack.`, {
        icon: '🗑️',
      });
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('Cleared all technologies from your stack.', {
      icon: '🧹',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />

      <main className="flex-grow">
        <HeroBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 xl:col-span-9">
              <TechGrid
                technologies={technologies}
                isLoading={isLoading}
                stack={stack}
                onAddToStack={handleAddToStack}
              />
            </div>

            <div className="lg:col-span-4 xl:col-span-3">
              <YourStack
                stack={stack}
                onRemoveItem={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
