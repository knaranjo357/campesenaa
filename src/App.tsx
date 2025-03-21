import React from 'react';
import { ChevronRight, Phone, Mail, MessageCircle, CheckCircle2, MapPin } from 'lucide-react';

function App() {
  const whatsappMessage = encodeURIComponent("¡Hola! Estoy interesado en obtener mi certificación a través del programa CampeSENA. ¿Me pueden brindar más información?");
  const whatsappUrl = `https://wa.me/573183911098?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#f7f3eb]">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
              <img 
                src="https://www.soydebuenaventura.com/media/transparent/20230802_logosena.png" 
                alt="SENA Logo" 
                className="h-12 sm:h-16 object-contain hover:scale-105 transition-transform duration-300"
              />
              <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
              
            </div>
            <div className="flex items-center">
              <a 
                href="#contact" 
                className="text-green-700 hover:text-green-800 font-medium px-4 py-2 rounded-full border-2 border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-32 bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        <div className="container mx-auto px-4 text-center text-white relative">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
              Estrategia CampeSENA
            </h1>
            <p className="text-2xl sm:text-3xl mb-8 font-light">Certifica tu Experiencia Laboral</p>
            <div className="bg-green-600 text-white inline-block px-8 py-3 rounded-full font-bold text-xl mb-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse">
              ¡Totalmente GRATIS!
            </div>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              ¡Gran oportunidad para los campesinos! Certifica lo que ya sabes hacer sin necesidad de estudiar desde cero.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
              ¿Por qué certificarse?
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Acceso a recursos del FONDO EMPRENDER para proyectos productivos',
              'Mayor reconocimiento en el mercado laboral',
              'Acceso a créditos y subsidios para el campo',
              'Aumenta la confianza de clientes y compradores'
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-8 bg-[#f7f3eb] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CheckCircle2 className="text-green-600 w-8 h-8 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Proceso de Certificación</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: '1. Conocimiento',
                description: 'Entrevista sobre tu experiencia en la labor'
              },
              {
                title: '2. Desempeño',
                description: 'Observación del trabajo en campo'
              },
              {
                title: '3. Producto',
                description: 'Diligenciar documentación básica'
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-4 mt-2">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-xl font-medium bg-green-50 p-6 rounded-full shadow-inner max-w-3xl mx-auto">
            El proceso es totalmente gratuito y lo realizamos en tu comunidad. ¡No tienes que desplazarte!
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Certificaciones Rurales</h2>
          <p className="text-center text-xl text-gray-600 mb-16">Disponible en todo Santander</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Venta de productos agrícolas',
                norm: 'Norma 260101047',
                subtitle: 'Vender Productos y Servicios',
                description: 'Certifica tu experiencia en la venta de productos y servicios agrícolas, mejorando tus oportunidades de negocio.'
              },
              {
                title: 'Guía turístico',
                norm: 'Norma 260201077',
                subtitle: 'Guía de Turismo Local',
                description: 'Certifica tu experiencia como guía turístico local y abre nuevas oportunidades en el sector turístico.'
              }
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-[#f7f3eb] rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <h3 className="text-3xl font-bold text-green-700 mb-3">{cert.title}</h3>
                <p className="text-gray-600 mb-2 font-medium">{cert.norm}</p>
                <p className="text-xl mb-4 text-green-800">{cert.subtitle}</p>
                <p className="text-gray-700 mb-8 text-lg">{cert.description}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-transform duration-300"
                >
                  Quiero certificarme
                  <ChevronRight size={24} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: '¿Cuántas personas se necesitan para organizar una certificación?',
                a: 'Para organizar una jornada de certificación en tu municipio, necesitamos un mínimo de personas interesadas. Esto nos ayuda a optimizar los recursos y garantizar que el evaluador pueda atender a todos los participantes de manera efectiva.'
              },
              {
                q: '¿Cómo puedo ayudar como líder comunitario?',
                a: 'Puedes informar a la comunidad, sobre la certificación y sus beneficios, motivar a los trabajadores del campo a participar.'
              },
              {
                q: '¿Qué documentos necesito para certificarme?',
                a: 'Fotocopia de la cédula y/o física'
              },
              {
                q: '¿Cuánto tiempo dura el proceso de certificación?',
                a: '4 horas.'
              },
              {
                q: '¿Tiene algún costo la certificación?',
                a: 'No, el proceso de certificación es completamente GRATUITO. El SENA asume todos los costos como parte de su compromiso con el desarrollo rural.'
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-xl font-bold text-green-700 mb-4 group-hover:text-green-600 transition-colors">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contacto</h2>
          <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">
            <a 
              href="mailto:cbmartinez@sena.edu.co"
              className="flex items-center gap-4 text-xl text-gray-700 hover:text-green-700 p-4 w-full rounded-xl hover:bg-green-50 transition-all duration-300"
            >
              <Mail className="w-8 h-8" />
              cbmartinez@sena.edu.co
            </a>
            <a 
              href="tel:3183911098"
              className="flex items-center gap-4 text-xl text-gray-700 hover:text-green-700 p-4 w-full rounded-xl hover:bg-green-50 transition-all duration-300"
            >
              <Phone className="w-8 h-8" />
              318 391 1098
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-white bg-green-600 p-6 rounded-2xl hover:bg-green-700 transition-all duration-300 w-full justify-center shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-8 h-8" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-3 mb-6 text-lg">
            <MapPin className="w-6 h-6" />
            <span>Santander, Colombia</span>
          </div>
          <p className="text-lg opacity-90">© 2024 CampeSENA - Una iniciativa del SENA y la Cámara de Comercio</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
