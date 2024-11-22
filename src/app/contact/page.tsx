import Head from "next/head";
import Header from "../header/page";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me - My Portfolio</title>
        <meta
          name="description"
          content="Get in touch with me for collaborations, opportunities, or inquiries."
        />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-purple-600 via-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6 py-12">
          {/* Heading Section */}
          <section className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-200">
              Have a project in mind? Let’s collaborate and bring your ideas to life!
            </p>
          </section>

          {/* Contact Form Section */}
          <section className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-md max-w-3xl mx-auto">
            <form action="#" method="POST" className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-300"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-300"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Enter your message"
                  required
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-300"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-300 text-gray-800 font-bold py-3 rounded-md hover:bg-yellow-400 transition"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Social Media Section */}
          <section className="text-center mt-12">
            <h2 className="text-3xl font-semibold mb-4">Connect with Me</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 text-2xl transition"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 text-2xl transition"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 text-2xl transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Contact;
