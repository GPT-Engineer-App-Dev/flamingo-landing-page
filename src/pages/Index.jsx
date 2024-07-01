import React from "react";

function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/flamingo-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Flamingo World</h1>
          <p className="mt-4 text-xl">Discover the fascinating world of flamingos</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">About Flamingos</h2>
          <div className="mt-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed">
                Flamingos are a type of wading bird in the family Phoenicopteridae. They are known for their distinctive pink feathers, long legs, and curved beaks. Flamingos are found in both the Western Hemisphere and Eastern Hemisphere, but they are more numerous in the latter.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                These birds are highly social and live in colonies that can number in the thousands. Flamingos are filter feeders and primarily eat small organisms like algae, crustaceans, and plankton. Their pink coloration comes from carotenoid pigments in their diet.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
              <img src="/images/flamingo-about.jpg" alt="Flamingo" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Habitat Section */}
      <section id="habitat" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Flamingo Habitats</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/habitat-1.jpg" alt="Habitat 1" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Lakes and Lagoons</h3>
              <p className="mt-2 text-lg leading-relaxed">
                Flamingos are commonly found in shallow lakes and lagoons where they can easily wade and feed on small organisms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/habitat-2.jpg" alt="Habitat 2" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Salt Flats</h3>
              <p className="mt-2 text-lg leading-relaxed">
                Some species of flamingos inhabit salt flats, where they feed on brine shrimp and other salt-tolerant organisms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/habitat-3.jpg" alt="Habitat 3" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Mangrove Swamps</h3>
              <p className="mt-2 text-lg leading-relaxed">
                Mangrove swamps provide a rich feeding ground for flamingos, with plenty of small fish and invertebrates to eat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Flamingo Gallery</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="/images/gallery-1.jpg" alt="Gallery 1" className="rounded-lg shadow-lg" />
            <img src="/images/gallery-2.jpg" alt="Gallery 2" className="rounded-lg shadow-lg" />
            <img src="/images/gallery-3.jpg" alt="Gallery 3" className="rounded-lg shadow-lg" />
            <img src="/images/gallery-4.jpg" alt="Gallery 4" className="rounded-lg shadow-lg" />
            <img src="/images/gallery-5.jpg" alt="Gallery 5" className="rounded-lg shadow-lg" />
            <img src="/images/gallery-6.jpg" alt="Gallery 6" className="rounded-lg shadow-lg" />
            <img src="/images/gallery-7.jpg" alt="Gallery 7" className="rounded-lg shadow-lg" />
            <img src="/images/gallery-8.jpg" alt="Gallery 8" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <div className="mt-8 max-w-lg mx-auto">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium">Name</label>
                <input type="text" id="name" className="w-full mt-2 p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium">Email</label>
                <input type="email" id="email" className="w-full mt-2 p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium">Message</label>
                <textarea id="message" className="w-full mt-2 p-2 border rounded-lg" rows="4"></textarea>
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
          <p className="mt-4">&copy; 2023 Flamingo World. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;