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
      <h1 className="text-3xl md:text-4xl font-bold">Book a Free Consultation</h1>
      <p className="text-gray-600 mt-2">Share your details and we’ll get back within 1 business day.</p>
      <form onSubmit={submit} className="card p-6 mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone / WhatsApp</label>
            <input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Interested In</label>
          <select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2">
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
          <textarea rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" />
        </div>
        <button className="btn btn-primary">Submit</button>
        {ok && <p className="text-green-600">{ok}</p>}
        {err && <p className="text-red-600">{err}</p>}
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Visit Us</h2>
        <p className="text-gray-700 mt-2">Colombo, Sri Lanka · Mon–Fri 9:00–17:00</p>
      </div>
    </section>
  );
}
