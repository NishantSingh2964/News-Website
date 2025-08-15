import React, { useState } from 'react';

const categories = ['general', 'technology', 'business', 'health', 'sports', 'entertainment'];
const countries = [
  { code: 'in', name: 'India' },
  { code: 'us', name: 'USA' },
  { code: 'au', name: 'Australia' },
  { code: 'gb', name: 'England' },
  { code: 'ru', name: 'Russia' },
];

const Navbar = ({ setCategory, setCountry }) => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [country, setCountryState] = useState('in');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCategory(category);
    setMenuOpen(false); // Close menu on mobile after selection
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountryState(selectedCountry);
    setCountry(selectedCountry);
  };

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 relative z-50 shadow">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
          <span className="text-2xl font-semibold dark:text-white">News-Mag</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`py-2 px-3 rounded-md font-medium ${
                selectedCategory === cat
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
          <select
            onChange={handleCountryChange}
            value={country}
            className="py-2 px-3 rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {countries.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-50 dark:bg-gray-800 p-4 shadow-md md:hidden">
          <ul className="flex flex-col space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => handleCategoryClick(cat)}
                  className={`w-full text-left py-2 px-3 rounded-md font-medium ${
                    selectedCategory === cat
                      ? 'bg-blue-700 text-white'
                      : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              </li>
            ))}
            <li>
              <select
                onChange={handleCountryChange}
                value={country}
                className="w-full py-2 px-3 rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {countries.map(({ code, name }) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
