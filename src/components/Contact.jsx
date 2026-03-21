import React from "react";

const Contact = () => {
  return (
    <section className="bg-white" aria-labelledby="contact-heading">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-14">
        {/* Header */}
        <header className="mb-6">
          <span className="bg-(--accent-color) italic font-light text-xl sm:text-3xl leading-tight">
            let's chat
          </span>
          <h2 id="contact-heading" className="uppercase text-2xl sm:text-3xl">
            Contact Me.
          </h2>
        </header>

        {/* Form */}
        <form
          className="space-y-5"
          method="POST"
          aria-describedby="contact-description"
        >
          <p id="contact-description" className="sr-only">
            Send a message for project inquiries, feedback, or collaboration.
          </p>

          {/* Name + Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Name"
                className="w-full px-2 py-2 border-b border-black outline-none focus:border-red-500 transition"
              />
            </div>

            <div className="w-full">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email"
                className="w-full px-2 py-2 border-b border-black outline-none focus:border-red-500 transition"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              autoComplete="off"
              spellCheck={false}
              placeholder="Got feedback, job opportunities, or just want to say hi? I’d love to hear from you 😊"
              className="w-full px-2 py-2 border border-black resize-none outline-none focus:border-red-500 transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full inline-flex items-center justify-center
              px-6 py-2.5
              bg-black text-white
              uppercase text-sm font-medium
              hover:bg-gray-800
              transition
              focus:outline-none focus-visible:ring-2 focus-visible:ring-black
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
