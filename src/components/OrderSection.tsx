
import React, { useState, useEffect } from 'react';
import { AnimatedElement, AnimatedText } from '@/utils/animations';

const OrderSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    postalCode: '',
    city: '',
    phone: '',
    email: '',
    packageChoice: '1',
    paymentMethod: 'cod',
    notes: '',
  });
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 24 hours
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (in a real app this would connect to a payment processor)
    console.log('Form submitted:', formData);
    alert('Dziękujemy za złożenie zamówienia! Skontaktujemy się wkrótce w celu finalizacji.');
  };
  
  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section 
      id="order"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle at 10% 90%, rgba(204,0,0,0.05) 0%, transparent 40%), radial-gradient(circle at 90% 10%, rgba(204,0,0,0.05) 0%, transparent 40%)'
        }}
      />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedElement animation="slide-up" className="mb-2">
            <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
              Ograniczona oferta promocyjna
            </span>
          </AnimatedElement>
          
          <AnimatedText element="h2" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" animation="fade-in" delay={200}>
            Zamów teraz i oszczędź 40%
          </AnimatedText>
          
          <AnimatedText element="p" className="text-xl text-gray-600 max-w-3xl mx-auto" animation="fade-in" delay={400}>
            Nie zwlekaj – skorzystaj z wyjątkowej promocji, zanim będzie za późno. Pierwsza partia EroHorse rozchodzi się błyskawicznie!
          </AnimatedText>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left column with promotional info */}
              <div className="lg:col-span-2 bg-gradient-to-br from-brand-dark to-black text-white p-8 sm:p-10 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-red-500/20 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-red-500/20 blur-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Tylko teraz: -40% zniżki</h3>
                  
                  <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <p className="text-lg font-medium mb-2">Oferta kończy się za:</p>
                    <div className="flex justify-center space-x-2 text-center">
                      <div className="bg-black/30 backdrop-blur-sm rounded px-3 py-2 w-16">
                        <div className="text-2xl font-bold">{formatTime(timeLeft.hours)}</div>
                        <div className="text-xs uppercase text-gray-300">Godzin</div>
                      </div>
                      <div className="bg-black/30 backdrop-blur-sm rounded px-3 py-2 w-16">
                        <div className="text-2xl font-bold">{formatTime(timeLeft.minutes)}</div>
                        <div className="text-xs uppercase text-gray-300">Minut</div>
                      </div>
                      <div className="bg-black/30 backdrop-blur-sm rounded px-3 py-2 w-16">
                        <div className="text-2xl font-bold">{formatTime(timeLeft.seconds)}</div>
                        <div className="text-xs uppercase text-gray-300">Sekund</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-300">Cena promocyjna: <span className="font-bold text-white">99 zł</span> zamiast <span className="line-through">139 zł</span></p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-300">Darmowa dostawa przy zamówieniu 2+ opakowań</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-300">Dyskretna przesyłka w 24-48h</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-300">Gwarancja satysfakcji 30 dni</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-red-500/20 backdrop-blur-sm rounded-lg mb-8">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="ml-2 text-sm">
                        Promocja ograniczona czasowo lub do wyczerpania zapasów. Nie przegap okazji!
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-300">
                    <p>
                      * Cena promocyjna obowiązuje do końca miesiąca lub do wyczerpania zapasów. Ostateczna cena zależy od wybranego pakietu.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right column with order form */}
              <div className="lg:col-span-3 p-8 sm:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Wypełnij formularz zamówienia</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Imię i nazwisko
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Adres e-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Adres dostawy
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                        Kod pocztowy
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm"
                      />
                    </div>
                    
                    <div className="sm:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        Miasto
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Numer telefonu
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Wybierz ilość opakowań
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <label className="relative border rounded-lg p-4 flex items-center hover:border-brand-red cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="packageChoice"
                          value="1"
                          checked={formData.packageChoice === '1'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`h-4 w-4 rounded-full border ${formData.packageChoice === '1' ? 'border-brand-red' : 'border-gray-300'} flex items-center justify-center mr-3`}>
                          {formData.packageChoice === '1' && (
                            <div className="h-2 w-2 rounded-full bg-brand-red"></div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium">1 opakowanie</p>
                          <p className="text-sm text-gray-600">99 zł</p>
                        </div>
                      </label>
                      
                      <label className="relative border rounded-lg p-4 flex items-center hover:border-brand-red cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="packageChoice"
                          value="2"
                          checked={formData.packageChoice === '2'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`h-4 w-4 rounded-full border ${formData.packageChoice === '2' ? 'border-brand-red' : 'border-gray-300'} flex items-center justify-center mr-3`}>
                          {formData.packageChoice === '2' && (
                            <div className="h-2 w-2 rounded-full bg-brand-red"></div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium">2 opakowania</p>
                          <p className="text-sm text-gray-600">178 zł <span className="text-brand-red">(oszczędzasz 20 zł)</span></p>
                        </div>
                      </label>
                      
                      <label className="relative border-2 border-brand-red rounded-lg p-4 flex items-center cursor-pointer bg-red-50/50">
                        <input
                          type="radio"
                          name="packageChoice"
                          value="3"
                          checked={formData.packageChoice === '3'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`h-4 w-4 rounded-full border ${formData.packageChoice === '3' ? 'border-brand-red' : 'border-gray-300'} flex items-center justify-center mr-3`}>
                          {formData.packageChoice === '3' && (
                            <div className="h-2 w-2 rounded-full bg-brand-red"></div>
                          )}
                        </div>
                        <div>
                          <div className="absolute -top-3 -right-1 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded">
                            Bestseller
                          </div>
                          <p className="font-medium">3 opakowania</p>
                          <p className="text-sm text-gray-600">249 zł <span className="text-brand-red">(oszczędzasz 48 zł)</span></p>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Metoda płatności
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="relative border rounded-lg p-4 flex items-center hover:border-brand-red cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`h-4 w-4 rounded-full border ${formData.paymentMethod === 'cod' ? 'border-brand-red' : 'border-gray-300'} flex items-center justify-center mr-3`}>
                          {formData.paymentMethod === 'cod' && (
                            <div className="h-2 w-2 rounded-full bg-brand-red"></div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium">Płatność przy odbiorze</p>
                        </div>
                      </label>
                      
                      <label className="relative border rounded-lg p-4 flex items-center hover:border-brand-red cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="online"
                          checked={formData.paymentMethod === 'online'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`h-4 w-4 rounded-full border ${formData.paymentMethod === 'online' ? 'border-brand-red' : 'border-gray-300'} flex items-center justify-center mr-3`}>
                          {formData.paymentMethod === 'online' && (
                            <div className="h-2 w-2 rounded-full bg-brand-red"></div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium">Karta / BLIK / Przelew online</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Uwagi do zamówienia (opcjonalnie)
                    </label>
                    <textarea
                      name="notes"
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red sm:text-sm"
                    />
                  </div>
                  
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full bg-brand-red text-white rounded-md py-3 px-6 text-lg font-medium hover:bg-brand-red/90 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition-colors shadow-lg"
                    >
                      Zamawiam teraz
                    </button>
                    <p className="mt-2 text-xs text-center text-gray-500">
                      Wciśnięcie przycisku "Zamawiam teraz" oznacza złożenie zamówienia z obowiązkiem zapłaty.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
