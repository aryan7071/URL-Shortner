import Image from "next/image";

export default function Contact() {
  return (
    <main className="bg-purple-100 min-h-screen flex flex-col">
      <section className="grid grid-cols-2 h-[70vh]">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col justify-center items-center gap-6 px-16">
          <h1 className="text-4xl font-bold text-purple-700">Get in Touch</h1>
          <p className="text-lg text-center text-gray-700">
            Have questions, feedback, or suggestions? We’d love to hear from you!  
            Fill out the form below and our team will get back to you as soon as possible.
          </p>

          <form className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold text-purple-600 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold text-purple-600 mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-semibold text-purple-600 mb-1">Message</label>
              <textarea
                id="message"
                placeholder="Write your message..."
                rows="4"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded-lg shadow-md transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="flex relative">
          <Image
            className="object-contain mix-blend-darken"
            alt="Contact illustration"
            src="/vector.jpg"
            fill
          />
        </div>
      </section>

      {/* Bottom Section */}
      <section className="flex flex-col items-center py-8 bg-white rounded-t-3xl shadow-inner">
        <h2 className="text-xl font-semibold text-purple-700 mb-2">Other Ways to Reach Us</h2>
        <p className="text-gray-700 text-center">
          📧 Email: <b>aryan002005@gmail.com</b><br />
          🐙 GitHub: <b>github.com/shortly</b> <br />
          🌐 Website: <b>www.shortlyapp.com</b>
        </p>
      </section>
    </main>
  );
}

