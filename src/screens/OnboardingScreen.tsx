import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import imgFarmerHands from "figma:asset/55397d36b8ebd1854d445b7fea27f41f3225ea85.png";

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1653302800594-7e40cf0767fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjb2ZmZWUlMjBwbGFudGF0aW9uJTIwbW91bnRhaW5zJTIwc3VucmlzZXxlbnwxfHx8fDE3NzE2OTUzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Café de Origen',
    description: 'Descubre el mejor café de especialidad directamente desde las fincas cafeteras de Colombia'
  },
  {
    image: 'https://images.unsplash.com/photo-1738597966690-3fc3ce0063aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWQlMjB3YXJtJTIwbGlnaHR8ZW58MXx8fHwxNzcxNjk1MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Calidad Premium',
    description: 'Cafés de especialidad seleccionados por expertos, tostados artesanalmente para ti'
  },
  {
    image: 'https://images.unsplash.com/photo-1760085160740-3f0c652116e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiYXJpc3RhJTIwZXNwcmVzc28lMjBtYWNoaW5lJTIwd2FybXxlbnwxfHx8fDE3NzE2OTUzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Experiencias Únicas',
    description: 'Vive el turismo cafetero: tours, talleres y catas en las mejores fincas del país'
  }
];

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      
      <div className="flex-1 relative overflow-hidden">
        {/* Image */}
        <div className="absolute inset-0">
          <ImageWithFallback 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-32 pt-20">
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[32px] leading-[40px] text-white mb-3">
            {slides[currentSlide].title}
          </h1>
          <p className="font-['Poppins:Regular',sans-serif] text-[16px] leading-[24px] text-white/90">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 px-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/40 w-2'
              }`}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <button
            onClick={handleSkip}
            className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-white/80 py-3 px-6"
          >
            Saltar
          </button>
          <button
            onClick={handleNext}
            className="bg-[#f72585] font-['Poppins:SemiBold',sans-serif] text-[16px] text-white py-3 px-8 rounded-full shadow-lg"
          >
            {currentSlide < slides.length - 1 ? 'Siguiente' : 'Comenzar'}
          </button>
        </div>
      </div>
    </div>
  );
}