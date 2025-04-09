import React, { useState } from 'react';
import { ContactFormData } from '@/types';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    topic: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to a backend API to send the message
    console.log('Submitting contact form:', formData);
    // Reset form after submission
    setFormData({ email: '', topic: '', message: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };
  
  return (
    <section className="w-full bg-primary-light text-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-gibson font-light text-2xl text-white text-center mb-10">
          <span className="font-bold">Connect</span> with us.
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-ibm font-semibold text-white">
                Your e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border border-white rounded p-3 text-white"
                placeholder=""
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="topic" className="font-ibm font-semibold text-white">
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="bg-transparent border border-white rounded p-3 text-white appearance-none"
              >
                <option value="" disabled className="bg-primary-light">Select a topic</option>
                <option value="quote" className="bg-primary-light">Request a Quote</option>
                <option value="support" className="bg-primary-light">Support</option>
                <option value="feedback" className="bg-primary-light">Feedback</option>
                <option value="other" className="bg-primary-light">Other</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="bg-transparent border border-white rounded p-3 text-white w-full"
                placeholder="Share any details that you think are important."
              />
              <div className="text-right text-xs text-white">
                {formData.message.length} / 1200
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-transparent border-2 border-white text-white font-gibson font-semibold rounded px-8 py-3 hover:bg-white hover:text-primary-light transition-colors"
            >
              Deliver
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection; 