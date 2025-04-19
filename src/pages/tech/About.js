import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

export default function About () {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
      const slides = [
        {
          image: "https://via.placeholder.com/60",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          image: "https://via.placeholder.com/60",
          text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          image: "https://via.placeholder.com/60",
          text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ];

      const news = [
        "Product News: Lorem Ipsum",
        "Promo: 50% Percent OFF",
        "Flash Sales: 50% Percent OFF",
        "Product News: Lorem Ipsum",
        "Promo: 50% Percent OFF",
        "Flash Sales: 50% Percent OFF",
        "Product News: Lorem Ipsum",
        "Promo: 50% Percent OFF",
        "Flash Sales: 50% Percent OFF",
      ];

    return (
        <>
        <section className="py-10 px-4 text-center">
        {/* ABOUT US */}
            <div className="max-w-2xl mx-auto mb-16">
                <h2 className="text-lg md:text-xl font-semibold mb-4">ABOUT US</h2>
                <p className="text-sm md:text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-sm md:text-base text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            {/* MISSION + VISION */}
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {/* MISSION */}
                <div className="flex flex-col items-center text-center">
                    <h3 className="w-full text-lg font-semibold mb-2">Mission</h3>
                    <p className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/* VISION */}
                <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold mb-2">Vision</h3>
                <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div>
            </div>

            <div className="py-12 px-4 text-center mt-5">
            <h2 className="text-2xl font-mono">Core Values</h2>

            <div className="flex justify-center items-start gap-10 px-4 py-10 flex-wrap md:flex-nowrap">
            {/* Carousel Box */}
            <div className="border rounded-md p-6 w-full h-60 max-w-2xl">
                <Slider {...settings}>
                {slides.map((item, idx) => (
                    <div key={idx}>
                    <div className="flex items-center gap-4">
                        <div className="border p-3">
                        <img src={item.image} alt="slide" className="w-14 h-14" />
                        </div>
                        <p className="text-sm">{item.text}</p>
                    </div>
                    </div>
                ))}
                </Slider>
            </div>

            {/* News Box */}
            <div className="border rounded-md p-4 w-full max-w-xs h-60 overflow-y-auto">
                <h2 className="text-sm font-semibold mb-2">Latest News</h2>
                <ul className="space-y-1 text-xs">
                {news.map((n, i) => (
                    <li key={i} className="text-blue-800 hover:underline cursor-pointer">
                    {n}
                    </li>
                ))}
                </ul>
            </div>
            </div>
            </div>
        </section>
        </>
    )
}