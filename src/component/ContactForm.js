export default function ContactForm() {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center px-6 py-12 max-w-6xl mx-auto">
        {/* Left Side Text */}
        <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl text-center font-semibold text-gray-900 leading-relaxed">
            Let Us Hear from <br /> you
          </h2>
        </div>
  
        {/* Right Side Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <h3 className="text-sm uppercase font-semibold mb-4">Send us a message</h3>
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-xs text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="info@example.com ..."
                className="w-64 border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>
  
            {/* Checkbox */}
            <div className="flex items-center space-x-2 text-xs text-gray-700">
              <label htmlFor="call">
                Want us to give you a call?
              </label>
              <input
                id="call"
                type="checkbox"
                className="form-checkbox"
              />
            </div>
  
            {/* Mobile Number */}
            <div>
              <label className="block text-xs text-gray-700 mb-1">Mobile No</label>
              <input
                type="tel"
                placeholder="+000 0000 000"
                className="w-64 border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>
  
            {/* Text Field */}
            <div>
              <label className="block text-xs text-gray-700 mb-1">Textfield</label>
              <textarea
                rows="3"
                placeholder="Placeholder ..."
                className="w-64 border rounded px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-black"
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white text-xs px-4 py-2 rounded hover:bg-gray-800"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }
  