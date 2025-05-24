import Carousel from "../component/Content-carousel";
import Form from "../component/Form";
import ShopCarousel from "../component/ShopCarousel";
import PartnersCarousel from "../component/PartnerCarousel";
import ContactForm from "../component/ContactForm";
import Cliente from '../component/Cliente'

function Home() {
    return (
        <>
        <Carousel />
        <Form />
        <ShopCarousel />
        <PartnersCarousel />
        <ContactForm />
        <Cliente />
        </>
    );
}

export default Home;