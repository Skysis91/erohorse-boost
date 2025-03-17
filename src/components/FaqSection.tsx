
import React, { useState } from 'react';
import { AnimatedElement, AnimatedText } from '@/utils/animations';

const faqs = [
  {
    id: 1,
    question: 'Czym dokładnie jest EroHorse i dla kogo jest przeznaczony?',
    answer: 'EroHorse to suplement diety dla mężczyzn, stworzony z myślą o poprawie potencji, libido i ogólnej sprawności seksualnej. Zawiera kompozycję naturalnych składników zwiększających męską witalność. Jest przeznaczony dla dorosłych mężczyzn, którzy chcą wzmocnić swoją pewność siebie w łóżku, walczą z obniżonym libido, słabą erekcją lub po prostu chcą podnieść jakość swojego życia intymnego. Niezależnie od tego, czy masz okazjonalne problemy, czy chcesz wejść na wyższy poziom sprawności – EroHorse jest dla Ciebie.',
  },
  {
    id: 2,
    question: 'Jak stosować EroHorse, aby osiągnąć najlepsze efekty?',
    answer: 'To zależy od Twoich potrzeb. Jeśli chcesz szybkiego efektu przed zbliżeniem, zażyj 5 kapsułek EroHorse na około godzinę przed seksem – uzyskasz wtedy maksymalną twardość i wytrzymałość (efekt utrzyma się nawet do 16 godzin). Jeżeli zależy Ci na stałej poprawie kondycji, możesz stosować EroHorse jako kurację: 3 kapsułki dziennie (najlepiej rano) przez 30 dni, po czym zrób 2 tygodnie przerwy. Taka regularna suplementacja podniesie Twój naturalny poziom testosteronu, libido i doda energii na co dzień. Nigdy nie przekraczaj 5 kapsułek na dobę.',
  },
  {
    id: 3,
    question: 'Czy EroHorse jest bezpieczny? Czy występują skutki uboczne?',
    answer: 'Tak, EroHorse jest bezpieczny dla zdrowych osób i nie powoduje efektów ubocznych przy stosowaniu zgodnie z zaleceniami. Formuła opiera się na naturalnych ekstraktach roślinnych, witaminach i minerałach – bez żadnej „chemii" czy niebezpiecznych substancji. Każdy składnik został przebadany pod kątem bezpieczeństwa. Nie odnotowano działań niepożądanych, takich jak bóle głowy czy podwyższone ciśnienie, które często towarzyszą syntetycznym środkom. Ostrożność powinni zachować jedynie panowie mający poważne problemy kardiologiczne lub inne schorzenia – w takich przypadkach zalecamy konsultację z lekarzem przed rozpoczęciem suplementacji.',
  },
  {
    id: 4,
    question: 'Po jakim czasie od zażycia odczuję pierwsze efekty?',
    answer: 'Wielu mężczyzn odczuwa pierwsze efekty już po około 30-60 minutach od zażycia jednorazowej dawki przed stosunkiem – pojawia się przypływ energii, poprawia nastrój i odczuwasz zwiększoną ochotę na seks. Pełne efekty w postaci mocniejszej erekcji pojawiają się w ciągu godziny i utrzymują się przez wiele godzin. Jeśli stosujesz EroHorse codziennie, pierwsze wyraźne zmiany (większa energia, częstsza ochota na seks, lepsza wydolność) zauważysz po kilku dniach regularnego przyjmowania.',
  },
  {
    id: 5,
    question: 'Czy muszę mieć receptę, żeby kupić EroHorse?',
    answer: 'Nie, EroHorse jest dostępny bez recepty. To suplement diety, a nie lek na receptę, więc możesz go zamówić wygodnie online bez wizyty u lekarza. Formuła jest bezpieczna i przetestowana – nie wymaga nadzoru medycznego przy stosowaniu zgodnie z instrukcją. Oczywiście jeśli masz poważne problemy zdrowotne lub przyjmujesz leki na stałe, warto skonsultować suplementację z lekarzem, ale dla przeciętnego zdrowego mężczyzny EroHorse jest w pełni dostępny od ręki.',
  },
  {
    id: 6,
    question: 'Jak wygląda przesyłka? Czy zachowujecie dyskrecję?',
    answer: 'Doskonale rozumiemy potrzebę dyskrecji. EroHorse jest wysyłany w neutralnym, zwykłym opakowaniu bez oznaczeń zdradzających zawartość. Na paczce nie ma nazwy produktu ani niczego, co wskazywałoby na jej zawartość – pełna prywatność gwarantowana. Ponadto zapewniamy szybką dostawę – zazwyczaj 1-2 dni robocze kurierem pod wskazany adres. Dzięki temu nie tylko zachowasz dyskrecję, ale też błyskawicznie rozpoczniesz swoją przemianę w sypialni.',
  },
];

const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedElement animation="slide-up" className="mb-2">
            <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
              Najczęściej zadawane pytania
            </span>
          </AnimatedElement>
          
          <AnimatedText element="h2" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" animation="fade-in" delay={200}>
            Masz wątpliwości? Mamy odpowiedzi
          </AnimatedText>
          
          <AnimatedText element="p" className="text-xl text-gray-600 max-w-3xl mx-auto" animation="fade-in" delay={400}>
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące EroHorse i odkryj wszystko, co musisz wiedzieć.
          </AnimatedText>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-100">
            {faqs.map((faq, index) => (
              <AnimatedElement 
                key={faq.id} 
                animation="fade-in" 
                delay={200 + index * 100} 
                className="bg-white"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}>
                    <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
          
          <AnimatedElement animation="fade-in" delay={700} className="mt-8 text-center">
            <p className="text-gray-600">
              Masz inne pytania? Skontaktuj się z nami poprzez{' '}
              <a href="mailto:kontakt@erohorse.pl" className="text-brand-red hover:underline">
                kontakt@erohorse.pl
              </a>
            </p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
