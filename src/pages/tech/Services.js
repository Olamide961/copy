import img from "../../assets/img/img.png"

export default function Services() {
    const services = [
      "Networking", "System Maintenance", "Acces Control", "IT Consultants",
      "Software Developement", "Procurements", "Cyber Security", "Smart Homes",
    ];
  
    return (
      <section className="py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-mono mb-6">Services</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 border border-gray-300 rounded-md flex flex-col items-center justify-center relative"
              >
                <img 
                src={img}
                alt=""
                />
                <span className="absolute -bottom-2 bg-white px-2 text-[10px] text-gray-500">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  