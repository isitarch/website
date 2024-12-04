---
title: "Contact"
permalink: "/contact.html"
---

# Contact

<form action="https://formspree.io/roland@neurospicy.icu" method="POST" class="bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
  <p class="text-gray-300">Send your message to <strong class="text-cyan-400">Is it Architecture</strong>. We will get back to you as soon as possible!</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-400">Name*</label>
      <input 
        id="name" 
        type="text" 
        name="name" 
        placeholder="Your name" 
        class="form-input bg-gray-700 text-gray-300 border border-gray-600 rounded-md w-full p-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
        required 
        aria-required="true">
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-400">Email Address*</label>
      <input 
        id="email" 
        type="email" 
        name="_replyto" 
        placeholder="Your email address" 
        class="form-input bg-gray-700 text-gray-300 border border-gray-600 rounded-md w-full p-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
        required 
        aria-required="true">
    </div>
  </div>

  <div>
    <label for="message" class="block text-sm font-medium text-gray-400">Message*</label>
    <textarea 
      id="message" 
      name="message" 
      rows="6" 
      placeholder="Your message" 
      class="form-textarea bg-gray-700 text-gray-300 border border-gray-600 rounded-md w-full p-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
      required 
      aria-required="true">
    </textarea>
  </div>

  <p class="text-sm">
    Privacy Notice: Your request will be processed by <strong class="text-cyan-400">formspree.io</strong> and forwarded to us. Please do not send sensitive information.
  </p>

  <div class="text-right">
    <button type="submit" class="btn btn-primary bg-cyan-400 text-gray-800 px-4 py-2 rounded-md hover:bg-cyan-500 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:outline-none">
      Send Message
    </button>
  </div>
</form>