import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-purple-100 min-h-screen  flex flex-col">
      <section className="grid grid-cols-2 h-[70vh]">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center gap-6 px-16">
          <h1 className="text-4xl font-bold text-purple-700">About Our URL Shortener</h1>
          <p className="text-lg text-center text-gray-700">
            Our mission is simple — to make link shortening fast, private, and effortless. 
            Unlike most URL shorteners that require logins or track your clicks, 
            our service keeps things clean, lightweight, and completely transparent.
          </p>
          <p className="text-md text-center text-gray-700">
            Whether you're sharing links with friends, managing marketing campaigns, 
            or just want shorter URLs for your social profiles — we’ve got you covered. 
            Your privacy and simplicity come first, always.
          </p>

          <div className="flex gap-3">
            <Link href="/generate">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-bold shadow-md">
                Get Started
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white border border-purple-400 text-purple-700 px-4 py-2 rounded-lg font-bold shadow-md hover:bg-purple-50">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex relative">
          <Image
            className="object-contain mix-blend-darken"
            alt="Illustration of URL shortening"
            src="/vector.jpg"
            fill
          />
        </div>
      </section>

      {/* Extra Info Section */}
      <section className="flex flex-col items-center py-10 px-20 bg-white rounded-t-3xl shadow-inner">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Why Choose Us?</h2>
        <ul className="text-gray-700 text-center space-y-2">
          <li>🔒 <b>No tracking</b> — your data and privacy are never compromised.</li>
          <li>⚡ <b>Instant shortening</b> — get your short link in seconds.</li>
          <li>🎨 <b>Simple interface</b> — no distractions, just results.</li>
          <li>🌍 <b>Accessible anywhere</b> — works perfectly on all devices.</li>
        </ul>
      </section>
    </main>
  );
}
