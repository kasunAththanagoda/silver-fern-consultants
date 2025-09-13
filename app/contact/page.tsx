'use client';

import { useState } from 'react';

export default function ContactPage(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', interest:'', message:'' });
  const [ok, setOk] = useState<string|undefined>();
  const [err, setErr] = useState<string|undefined>();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setOk(undefined); setErr(undefined);
    try {
      const res = await fetch('/api/lead', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)});
      if(!res.ok) throw new Error('Failed');
      setOk('Thanks! Our team will contact you soon.');
      setForm({ name:'', email:'', phone:'', interest:'', message:'' });
    } catch {
      setErr('Something went wrong. Please call us or WhatsApp.');
    }
  };

  return (
    <section className="container py-12 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold">Talk to Us</h1>
      <p className="text-gray-400 mt-2">Share your details and we'll get back within 1 business day.</p>
      <form onSubmit={submit} className="card p-6 mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-900 text-gray-100 placeholder:text-gray-400 px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-900 text-gray-100 placeholder:text-gray-400 px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone / WhatsApp</label>
            <input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-900 text-gray-100 placeholder:text-gray-400 px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Interested In</label>
          <select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})} className="mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-900 text-gray-100 px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-transparent">
            <option value="">Select an option</option>
            <option>Foundation / Pathway</option>
            <option>Undergraduate</option>
            <option>Postgraduate</option>
            <option>Diploma / Trades</option>
            <option>English Language</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-900 text-gray-100 placeholder:text-gray-400 px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
        </div>
        <button className="btn btn-primary">Submit</button>
        {ok && <p className="text-brand-400">{ok}</p>}
        {err && <p className="text-red-400">{err}</p>}
      </form>
      <div className="mt-12 text-center mb-12">
        <a 
          href="https://wa.me/94702169762" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.498 14.382v-.002c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.174.195-.349.22-.646.074-.3-.15-1.27-.466-2.42-1.485-.888-.794-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.133.298-.347.446-.52.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.148-.669-1.614-.916-2.207-.242-.579-.487-.5-.669-.51-.172-.008-.371-.01-.571-.01-.2 0-.523.074-.797.36-.273.3-1.045 1.02-1.045 2.48s1.07 2.88 1.219 3.08c.149.196 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.879.118.57-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.172-1.413-.074-.119-.272-.184-.57-.297m-5.446 7.443h-.016c-1.77 0-3.523-.48-5.055-1.38l-.36-.214-3.754.99 1.005-3.645-.239-.375a9.878 9.878 0 01-1.51-5.261c.001-5.45 4.436-9.885 9.888-9.885 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.888-9.885 9.888m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.55 4.14 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.465h.006c6.554 0 11.89-5.335 11.89-11.893 0-3.176-1.24-6.165-3.495-8.411"/>
          </svg>
          Chat with us on WhatsApp
        </a>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Address Card - Commented out for now
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-brand-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/10">
            <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Office</h3>
            <p className="text-gray-300">Colombo, Sri Lanka</p>
          </div>
          */}

          {/* Phone Card */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-brand-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/10">
            <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <div className="space-y-2">
              <p className="text-gray-300 hover:text-brand-400 transition-colors">
                <a href="tel:0223400422" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  022 340 0422
                </a>
              </p>
              <p className="text-gray-300 hover:text-brand-400 transition-colors">
                <a href="tel:+94702169762" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  +94 70 216 9762
                </a>
              </p>
            </div>
          </div>

          {/* Email & Hours Card */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-brand-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/10">
            <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Email & Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@silverfrenconsultans.nz" className="text-gray-300 hover:text-brand-400 transition-colors break-all">
                  contact@silverfrenconsultans.nz
                </a>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-gray-300">
                  <p className="text-white font-medium">Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
