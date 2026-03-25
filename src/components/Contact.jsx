import { useRef, useState } from "react";
import { Forminit } from "forminit";

const forminit = new Forminit();
const FORM_ID = "ych9f9v6w4o";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  // const [error, setError] = useState("");
  const errorRef = useRef("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FORM_ID) {
      setStatus("error");
      errorRef.current = "Form configuration error. Please try again later.";
      // setError("Form configuration error. Please try again later.");
      return;
    }

    try {
      setStatus("loading");
      errorRef.current = "";
      // setError("");

      const response = await forminit.submit(FORM_ID, {
        blocks: [
          {
            type: "sender",
            properties: {
              fullName: formData.name,
              email: formData.email,
            },
          },
          {
            type: "text",
            name: "message",
            value: formData.message,
          },
        ],
      });

      if (response?.error) {
        throw new Error(response.error.message);
      }

      setStatus("success");
      setFormData(initialState);
    } catch (err) {
      setStatus("error");
      errorRef.current = err.message || "Something went wrong.";
      // setError(err.message || "Something went wrong.");
    }
  };

  return (
    <section className="bg-(--secondary-bg)" aria-labelledby="contact-heading">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-14">
        {/* Header */}
        <header className="text-(--primary-text) mb-12">
          <p className="bg-(--tertiary-highlight) italic font-light text-xl sm:text-3xl inline-block px-2">
            let’s connect!
          </p>

          <h2 id="contact-heading" className="uppercase text-2xl sm:text-3xl">
            Contact Me.
          </h2>
        </header>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
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
                onChange={handleChange}
                value={formData.name}
                autoComplete="name"
                placeholder="Name"
                className="w-full px-2 py-2 border-b border-(--primary-border) placeholder:text-(--placeholder-text) text-(--primary-text) outline-none focus:border-red-500 transition"
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
                onChange={handleChange}
                value={formData.email}
                autoComplete="email"
                placeholder="Email"
                className="w-full px-2 py-2 border-b border-(--primary-border) placeholder:text-(--placeholder-text) text-(--primary-text) outline-none focus:border-red-500 transition"
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
              onChange={handleChange}
              value={formData.message}
              autoComplete="off"
              spellCheck={false}
              placeholder="Got feedback, job opportunities, or just want to say hi? I’d love to hear from you 😊"
              className="w-full px-2 py-2 border border-(--primary-border) placeholder:text-(--placeholder-text) text-(--primary-text) resize-none outline-none focus:border-red-500 transition"
            />
          </div>

          {/* Status */}
          <div aria-live="polite" className="text-sm">
            {/* {status === "loading" && <p>Sending...</p>} */}
            {status === "error" && (
              <p
                role="alert"
                className="capitalize text-sm text-red-600 font-medium"
              >
                something went wrong!
              </p>
            )}

            {status === "success" && (
              <p role="status" className="text-sm text-green-600 font-medium">
                Message sent successfully!
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="
              w-full inline-flex items-center justify-center
              px-6 py-2.5
              bg-black text-white
              uppercase text-sm font-medium
              hover:bg-gray-800
              disabled:opacity-60
              transition
              focus:outline-none focus-visible:ring-2 focus-visible:ring-black
            "
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
