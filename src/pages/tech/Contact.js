export default function About() {
    const news = [
      "Product News: Lorem Ipsum",
      "Promo: 50% Percent OFF",
      "Flash Sales: 50% Percent OFF",
      "Product News: Lorem Ipsum",
      "Promo: 50% Percent OFF",
      "Flash Sales: 50% Percent OFF",
    ];
  
    return (
      <div className="flex justify-between gap-10 px-4 py-10 flex-wrap md:flex-nowrap mx-14 mt-9">
        {/* Contact Us */}
        <div className="w-full md:w-1/2 max-w-md">
        <h2 className="text-xl mb-4 text-center md:text-left">
          SEND US A MESSAGE
        </h2>
        <div className="w-full max-w-sm">
      {/* Email */}
      <div className="relative mb-6">
        <label className="absolute -top-2 left-3 px-1 bg-white text-sm z-10">
          E-Mail
        </label>
        <input
          type="email"
          placeholder="info@example.com ..."
          className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none text-sm"
        />
      </div>

      {/* Mobile No */}
      <div className="relative mb-6">
        <label className="absolute -top-2 left-3 px-1 bg-white text-sm z-10">
          Mobile No
        </label>
        <input
          type="tel"
          placeholder="+ 000 0000 000"
          className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none text-sm"
        />
      </div>

      {/* Textarea */}
      <div className="relative mb-3">
        <label className="absolute -top-2 left-3 px-1 bg-white text-sm z-10">
          Text Field
        </label>
        <textarea
          placeholder="Placeholder ..."
          rows="3"
          className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none text-sm"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-24 bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800"
      >
        SUBMIT
      </button>

      {/* Checkbox */}
      <div className="text-sm">
        <span className="mr-2 font-semibold">want us to give you a call ?</span>
        <input
          type="checkbox"
          className="w-5 h-5 border border-black rounded-md"
        />
      </div>
    </div>
    </div>
  
        {/* Socials */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-semibold">SOCIALS</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-8 h-8" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Gmail" className="w-8 h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="w-8 h-8" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="X" className="w-8 h-8" />
          </div>
        </div>
  
        {/* News Updates */}
        <div className="border rounded-md p-4 w-full max-w-xs h-60 overflow-y-auto">
          <h3 className="text-sm font-semibold mb-2">NEWS UPDATES</h3>
          <ul className="space-y-1 text-xs">
            {news.map((n, i) => (
              <li key={i} className="text-blue-800 hover:underline cursor-pointer">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  