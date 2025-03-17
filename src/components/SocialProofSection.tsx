
import React from 'react';
import { AnimatedElement, AnimatedText } from '@/utils/animations';
import { useIsMobile } from '@/hooks/use-mobile';

const tiktokVideos = [
  {
    id: 1,
    url: "https://www.tiktok.com/@ero_horse/video/7444477094328929558",
    embedUrl: "https://www.tiktok.com/embed/v2/7444477094328929558",
  },
  {
    id: 2,
    url: "https://www.tiktok.com/@ero_horse/video/7444481611304865046",
    embedUrl: "https://www.tiktok.com/embed/v2/7444481611304865046",
  },
  {
    id: 3,
    url: "https://www.tiktok.com/@ero_horse/video/7444478864228699414",
    embedUrl: "https://www.tiktok.com/embed/v2/7444478864228699414",
  },
];

const SocialProofSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="social-proof" className="py-24 bg-white relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedElement animation="slide-up" className="mb-2">
            <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
              Social Media
            </span>
          </AnimatedElement>
          
          <AnimatedText element="h2" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" animation="fade-in" delay={200}>
            EroHorse w mediach społecznościowych
          </AnimatedText>
          
          <AnimatedText element="p" className="text-xl text-gray-600 max-w-3xl mx-auto" animation="fade-in" delay={400}>
            Zobacz prawdziwe opinie i doświadczenia użytkowników EroHorse udostępniane w mediach społecznościowych.
          </AnimatedText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiktokVideos.map((video, index) => (
            <AnimatedElement 
              key={video.id}
              animation="fade-in" 
              delay={300 + index * 150}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-[9/16] w-full">
                <iframe 
                  src={`${video.embedUrl}?hideSharingOptions=true&hideComments=true&hideReactions=true`} 
                  allowFullScreen 
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement animation="fade-in" delay={700} className="mt-16 text-center">
          <a 
            href="https://www.tiktok.com/@ero_horse" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-black px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-black/90 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
            Obserwuj nas na TikToku
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default SocialProofSection;
