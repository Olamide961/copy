import SecondaryLayout from "../layout/SecondaryLayout";
import { Route } from 'react-router-dom';
import Services from "../pages/culinary/Services";
import Product from "../pages/culinary/Product";

const CulinaryRoute = () => {
    return ( 
        <>
        {/* culinary section nav links header & footer */}
                <Route path='/culinary' element={<SecondaryLayout />} >
                <Route path="services" element={<Services />} />
                <Route path="shop" element={<Product />} />
                <Route path="about" element={<Product />} />
                <Route path="contact" element={<Product />} />
                </Route>
      </> 
     );
}
 
export default CulinaryRoute;