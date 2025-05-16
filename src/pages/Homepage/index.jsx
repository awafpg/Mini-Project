const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">User Apps</h1>
        <nav className="space-x-4">
          <a href="/login" className="text-gray-700 hover:text-blue-600">
            Login
          </a>
        </nav>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Mini Project User Apps
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-xl">
          You can see a list of user if you logged in
        </p>
        <a
          href="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
