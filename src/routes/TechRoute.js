import SecondaryLayout from "../layout/SecondaryLayout";
import { Route } from 'react-router-dom';
import Services from "../pages/tech/Services";
import Product from "../pages/tech/Product";
import Index from "../pages/tech/Index";

const TechRoute = () => {
    return (
        <>
          {/* tech section nav links header & footer */}
                <Route path='/tech' element={<SecondaryLayout  basePath="tech" />} >
                <Route index element={<Index />} />
                <Route path="services" element={<Services />} />
                <Route path="shop" element={<Product />} />
                <Route path="about" element={<Product />} />
                <Route path="contact" element={<Product />} />
                </Route>
        </> 
        
    );
}
 
export default TechRoute ;