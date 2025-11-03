import Link from 'next/link';
import NewsletterForm from './components/NewsletterForm';
import ContactForm from './components/ContactForm';
import Logo from '@/components/Logo';

export default function Page(){
  return (
    <main>
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <Logo className="w-16 h-16" />
            <div className="text-2xl font-bold">BuildAfricaAI</div>
          </div>
          <h1 className="text-5xl font-extrabold">Powering Africa's Future with AI</h1>
          <p className="mt-4 text-blue-100 max-w-xl">Africa will not just consume AI. Africa will build it, shape it, and lead with it.</p>
          <div className="mt-8 flex gap-3">
            <Link href="#join" className="px-5 py-3 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors">Get Involved</Link>
            <Link href="#contact" className="px-5 py-3 rounded-md bg-white/10 ring-1 ring-white/20 hover:bg-white/20 transition-colors">Partner With Us</Link>
          </div>
        </div>
      </section>

      <section className="py-16" id="who">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            BuildAfricaAI is a pan-African initiative dedicated to positioning Africa at the forefront of the AI revolution.
            We believe that Africa's unique challenges and opportunities require homegrown AI solutions built by Africans, for Africans.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50" id="mission">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">Education & Training</h3>
              <p className="text-slate-600">
                Empowering the next generation of African AI researchers, engineers, and entrepreneurs through world-class training programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-3">Research & Innovation</h3>
              <p className="text-slate-600">
                Advancing AI research that addresses Africa's unique challenges in healthcare, agriculture, education, and infrastructure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Community Building</h3>
              <p className="text-slate-600">
                Creating a vibrant ecosystem of AI practitioners, startups, and organizations across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="programs">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Our Programs</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold mb-2">AI Fellowship Program</h3>
              <p className="text-slate-600">
                A 12-month intensive program for exceptional African AI talent, providing mentorship, resources, and funding to build impactful AI solutions.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold mb-2">Research Grants</h3>
              <p className="text-slate-600">
                Supporting groundbreaking AI research at African universities and institutions, focusing on locally relevant applications.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-bold mb-2">Startup Accelerator</h3>
              <p className="text-slate-600">
                Accelerating African AI startups with funding, technical support, and access to global markets and partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50" id="impact">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">AI Practitioners Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-slate-600">Research Projects Funded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-slate-600">Startups Accelerated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-slate-600">African Countries</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="join">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Whether you're a researcher, developer, entrepreneur, or organization, there's a place for you in Africa's AI future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/blog" className="px-6 py-3 rounded-md border border-slate-300 hover:bg-slate-50 transition-colors">
              Read Our Blog
            </Link>
          </div>

          <div id="newsletter" className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-slate-600 mb-6">Get the latest updates on AI innovation in Africa</p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white" id="contact">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Partner With Us</h4>
                  <p className="text-blue-100 mb-2 text-sm">
                    Interested in supporting Africa's AI ecosystem? Let's collaborate to create lasting impact.
                  </p>
                  <a href="mailto:partnerships@buildafricaai.org" className="text-blue-400 hover:underline">
                    partnerships@buildafricaai.org
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Join Our Community</h4>
                  <p className="text-blue-100 mb-2 text-sm">
                    Connect with thousands of AI practitioners, researchers, and enthusiasts across Africa.
                  </p>
                  <a href="mailto:community@buildafricaai.org" className="text-blue-400 hover:underline">
                    community@buildafricaai.org
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
