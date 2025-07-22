'use client';

import { useState } from 'react';

export default function ContactForm() {
  return (
    <section className="flex flex-col items-center justify-center px-8 py-16 text-center space-y-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
      <form
        action="https://formspree.io/f/mgvybwlz"
        method="POST"
        className="w-full space-y-6"
      >
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your message"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

