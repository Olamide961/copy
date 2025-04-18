import SecondaryLayout from "../layout/SecondaryLayout";
import { Route } from 'react-router-dom';
import Services from "../pages/media/Services";
import Product from "../pages/media/Product";

const MediaRoute = () => {
    return ( 
                
        <>
           {/* media section nav links header & footer */}
                <Route path='/media' element={<SecondaryLayout  basePath="media" />} >
                <Route path="services" element={<Services />} />
                <Route path="shop" element={<Product />} />
                <Route path="about" element={<Product />} />
                <Route path="contact" element={<Product />} />
                </Route>
        </> 
        
     );
}
 
export default MediaRoute;