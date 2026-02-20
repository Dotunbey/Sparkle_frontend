
import React, { useState, useEffect } from 'react';
import { DOMAINS } from './constants';
import { Domain, Subdomain } from './types';
import { DomainCard } from './components/DomainCard';
import { RoadmapView } from './components/RoadmapView';
import { getCareerRecommendation, getCuratedCourses } from './services/geminiService';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'explore' | 'detail' | 'roadmap' | 'matchmaker'>('home');
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [selectedSubdomain, setSelectedSubdomain] = useState<Subdomain | null>(null);
  
  // Courses state
  const [dynamicCourses, setDynamicCourses] = useState<any[]>([]);
  const [isLoadingCourses, setIsLoadingCourses] = useState(false);

  // Matchmaker state
  const [matchStep, setMatchStep] = useState(0);
  const [matchData, setMatchData] = useState({ interests: [] as string[], experience: '', goals: '' });
  const [recommendation, setRecommendation] = useState<any>(null);
  const [isMatching, setIsMatching] = useState(false);

  const handleDomainClick = (id: string) => {
    const d = DOMAINS.find(item => item.id === id);
    if (d) {
      setSelectedDomain(d);
      setView('detail');
      window.scrollTo(0, 0);
    }
  };

  const handleSubdomainClick = (sd: Subdomain) => {
    setSelectedSubdomain(sd);
    setView('roadmap');
    window.scrollTo(0, 0);
  };

  // Fetch dynamic courses when a subdomain is selected
  useEffect(() => {
    if (view === 'roadmap' && selectedSubdomain && selectedDomain) {
      const fetchCourses = async () => {
        setIsLoadingCourses(true);
        const courses = await getCuratedCourses(selectedSubdomain.name, selectedDomain.name);
        setDynamicCourses(courses);
        setIsLoadingCourses(false);
      };
      fetchCourses();
    }
  }, [view, selectedSubdomain, selectedDomain]);

  const startMatchmaker = () => {
    setView('matchmaker');
    setMatchStep(1);
  };

  const handleMatchSubmit = async () => {
    setIsMatching(true);
    const result = await getCareerRecommendation(matchData.interests, matchData.experience, matchData.goals);
    setRecommendation(result);
    setIsMatching(false);
    setMatchStep(4);
  };

  const toggleInterest = (interest: string) => {
    setMatchData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest) 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => setView('home')} className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">S</span>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Sparkle</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => setView('explore')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Explore Careers</button>
            <button onClick={() => setView('matchmaker')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">AI Matchmaker</button>
            <button onClick={() => setView('home')} className="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-700 transition-colors">Sign Up</button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Home View */}
        {view === 'home' && (
          <div className="animate-in fade-in duration-700">
            <section className="py-20 px-4 max-w-7xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6">
                Discover your IT future
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
                Find your <span className="gradient-text">spark</span>,<br />build your path.
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Move from confusion to clarity. Explore the diverse world of IT beyond just coding and design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setView('explore')}
                  className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all transform hover:-translate-y-1"
                >
                  Explore Domains
                </button>
                <button 
                  onClick={startMatchmaker}
                  className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-2xl hover:border-indigo-400 transition-all transform hover:-translate-y-1"
                >
                  Take the AI Quiz
                </button>
              </div>
            </section>

            <section className="bg-white py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">🎯</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Psychological Clarity</h3>
                    <p className="text-slate-500">Integrating the Ikigai framework and Emotional Cycle of Change to ensure mental alignment with your career.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">🤖</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">AI-Powered Guidance</h3>
                    <p className="text-slate-500">Personalized recommendations driven by Gemini AI that analyze your interests and personality.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">🗺️</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Visual Roadmaps</h3>
                    <p className="text-slate-500">Step-by-step visual guides showing exactly what to learn and where to start in each subdomain.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Explore View */}
        {view === 'explore' && (
          <div className="max-w-7xl mx-auto px-4 py-16 animate-in slide-in-from-bottom-8 duration-500">
            <div className="mb-12">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Discover IT Domains</h2>
              <p className="text-slate-600">Browse the 12 primary domains that make up the IT ecosystem.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {DOMAINS.map(domain => (
                <DomainCard key={domain.id} domain={domain} onClick={handleDomainClick} />
              ))}
            </div>
          </div>
        )}

        {/* Domain Detail View */}
        {view === 'detail' && selectedDomain && (
          <div className="max-w-5xl mx-auto px-4 py-16 animate-in fade-in duration-500">
            <button onClick={() => setView('explore')} className="text-sm font-bold text-indigo-600 mb-8 flex items-center gap-2">
              ← Back to Domains
            </button>
            <div className="flex items-center gap-4 mb-4">
               <span className="text-5xl">{selectedDomain.icon}</span>
               <h2 className="text-4xl font-black text-slate-900">{selectedDomain.name}</h2>
            </div>
            <p className="text-xl text-slate-600 mb-12">{selectedDomain.overview}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-indigo-50 p-8 rounded-3xl">
                <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-6 bg-indigo-500 rounded-full"></span>
                  Problems Solved
                </h4>
                <ul className="space-y-3">
                  {selectedDomain.problemsSolved.map((p, i) => (
                    <li key={i} className="flex gap-3 text-indigo-800">
                      <span className="text-indigo-400">✔</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-6 bg-slate-400 rounded-full"></span>
                  Sectors
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDomain.sectors.map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-white rounded-full text-sm border border-slate-200 text-slate-600 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Available Subdomains</h3>
            <div className="grid gap-6">
              {selectedDomain.subdomains.map(sd => (
                <button 
                  key={sd.id}
                  onClick={() => handleSubdomainClick(sd)}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-500 hover:shadow-md transition-all text-left flex justify-between items-center group"
                >
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{sd.name}</h4>
                    <p className="text-slate-500 text-sm mt-1">{sd.description}</p>
                  </div>
                  <span className="text-slate-300 group-hover:text-indigo-400 transition-colors">→</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Roadmap View */}
        {view === 'roadmap' && selectedSubdomain && (
          <div className="max-w-4xl mx-auto px-4 py-16 animate-in slide-in-from-right-8 duration-500">
            <button onClick={() => setView('detail')} className="text-sm font-bold text-indigo-600 mb-8">
              ← Back to {selectedDomain?.name}
            </button>
            <div className="text-center mb-12">
               <h2 className="text-4xl font-black text-slate-900 mb-2">{selectedSubdomain.name} Roadmap</h2>
               <p className="text-slate-500">Follow this path to gain competency in this field.</p>
            </div>
            
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 mb-16">
              <RoadmapView nodes={selectedSubdomain.roadmap} />
            </div>

            <div className="bg-indigo-900 p-10 rounded-[3rem] text-white overflow-hidden relative">
              <div className="relative z-10">
                <div className="flex justify-between items-end mb-6">
                  <h3 className="text-2xl font-bold">Recommended Courses</h3>
                  <span className="text-xs text-indigo-300 font-medium bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    {isLoadingCourses ? 'Fetching with AI...' : 'AI-Curated'}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {isLoadingCourses ? (
                    Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="p-4 bg-white/10 rounded-xl border border-white/20 animate-pulse">
                        <div className="h-2 w-16 bg-white/20 rounded mb-2"></div>
                        <div className="h-4 w-3/4 bg-white/30 rounded"></div>
                      </div>
                    ))
                  ) : (
                    dynamicCourses.map((c, i) => (
                    <div key={i} className="p-5 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-default group flex flex-col">
                      <span className="text-[10px] uppercase font-black text-indigo-400 block mb-1 tracking-widest group-hover:text-indigo-300 transition-colors">
                        {c.platform || `Recommendation 0${i+1}`}
                      </span>
                      <div className="text-base font-bold text-white leading-tight mb-2"> 
                        {c.title || c} 
                      </div>
                      {c.description && (
                        <p className="text-sm text-indigo-200/80 leading-snug line-clamp-2">
                          {c.description}
                        </p>
                      )}
                    </div>
                  ))
                  )}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-30"></div>
            </div>
          </div>
        )}

        {/* Matchmaker View */}
        {view === 'matchmaker' && (
          <div className="max-w-2xl mx-auto px-4 py-16">
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-10">
              {matchStep === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-3xl font-bold mb-4">What excites you?</h2>
                  <p className="text-slate-500 mb-8">Select all the areas you are curious about.</p>
                  <div className="grid grid-cols-2 gap-3 mb-10">
                    {['Solving Problems', 'Designing Visuals', 'Managing Teams', 'Breaking Systems', 'Analyzing Data', 'Physical Gadgets', 'Video Games', 'Protecting Privacy'].map(interest => (
                      <button 
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all ${matchData.interests.includes(interest) ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-bold' : 'border-slate-100 hover:border-slate-200'}`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setMatchStep(2)} className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl">Continue</button>
                </div>
              )}

              {matchStep === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-3xl font-bold mb-4">Your current level?</h2>
                  <div className="space-y-4 mb-10">
                    {['Absolute Beginner', 'Transitioning from non-tech', 'Student in CS/IT', 'Junior Developer'].map(level => (
                      <button 
                        key={level}
                        onClick={() => {
                          setMatchData(prev => ({ ...prev, experience: level }));
                          setMatchStep(3);
                        }}
                        className={`w-full p-6 rounded-2xl border-2 text-left hover:border-indigo-400 transition-all ${matchData.experience === level ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-bold' : 'border-slate-100'}`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchStep === 3 && (
                <div className="animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-3xl font-bold mb-4">What's your ultimate goal?</h2>
                  <textarea 
                    className="w-full p-6 bg-slate-50 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-8"
                    placeholder="e.g., I want to build my own startup or work remotely for a big tech company..."
                    rows={4}
                    value={matchData.goals}
                    onChange={e => setMatchData(prev => ({ ...prev, goals: e.target.value }))}
                  />
                  <button 
                    onClick={handleMatchSubmit}
                    disabled={isMatching}
                    className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl disabled:opacity-50"
                  >
                    {isMatching ? 'Sparking...' : 'Get Recommendation'}
                  </button>
                </div>
              )}

              {matchStep === 4 && recommendation && (
                <div className="animate-in zoom-in-95 duration-500">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-6">✨</div>
                  <h2 className="text-3xl font-bold mb-2">We found your Spark!</h2>
                  <p className="text-slate-500 mb-8">Based on your input, here's a path we think you'll thrive in.</p>
                  
                  <div className="bg-indigo-600 text-white p-8 rounded-[2rem] mb-8">
                    <span className="text-[10px] uppercase font-black tracking-widest text-indigo-300">Recommended Domain</span>
                    <h3 className="text-2xl font-bold mt-1 mb-4">{recommendation.recommendedDomain}</h3>
                    <p className="text-indigo-100 text-sm leading-relaxed">{recommendation.reasoning}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-bold text-slate-800">Top Subdomains:</h4>
                    {recommendation.subdomains.map((sd: any, i: number) => (
                      <div key={i} className="p-4 bg-slate-50 rounded-xl">
                        <span className="font-bold text-slate-900 block">{sd.name}</span>
                        <span className="text-xs text-slate-500">{sd.description}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 border-l-4 border-indigo-600 bg-slate-50 rounded-r-2xl mb-10">
                    <h4 className="font-bold text-slate-900 mb-2">Your First Step:</h4>
                    <p className="text-indigo-600 font-medium">"{recommendation.firstStep}"</p>
                  </div>

                  <button 
                    onClick={() => {
                      const d = DOMAINS.find(dm => dm.name.toLowerCase().includes(recommendation.recommendedDomain.toLowerCase()));
                      if (d) handleDomainClick(d.id);
                      else setView('explore');
                    }}
                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl"
                  >
                    See Full Path
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">S</span>
                <span className="text-2xl font-bold text-white tracking-tight">Sparkle</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                Sparkle is a digital career-guidance platform designed to help students and early-career enthusiasts find their path in IT.
              </p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">𝕏</div>
                 <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">in</div>
                 <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">IG</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Navigation</h4>
              <ul className="space-y-4 text-slate-400">
                <li><button onClick={() => setView('explore')} className="hover:text-white transition-colors">Career Domains</button></li>
                <li><button onClick={() => setView('matchmaker')} className="hover:text-white transition-colors">AI Matchmaker</button></li>
                <li><button className="hover:text-white transition-colors">Roadmaps</button></li>
                <li><button className="hover:text-white transition-colors">Workshops</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-400">
                <li>hello@sparkle.tech</li>
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Sparkle Career Discovery. Built with Gemini AI.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
