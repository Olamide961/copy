import { NavLink } from "react-router-dom";
import classNames from 'classnames';


const SecondaryNavbar = ({basePath}) => {

    function getNavLinkClasses(isActive) {
        return classNames(
          isActive ? 'bg-gray-900 text-white' : 'text-black-700 hover:ease-out',
          'rounded-md px-3 py-2 text-lg font-medium'
        );
      }
      
    return (
        <>
        {/* generic link that all second section of the platform has */}
        {/* pass the logo as a prop */}
            <nav>
                <NavLink to={`/${basePath}/shop`} className={({ isActive }) => getNavLinkClasses(isActive)} >Shop</NavLink>
                <NavLink to={`/${basePath}/about`} className={({ isActive }) => getNavLinkClasses(isActive)} >About Us</NavLink>
                <NavLink to={`/${basePath}/services`} className={({ isActive }) => getNavLinkClasses(isActive)} >Services</NavLink>
                <NavLink to={`/${basePath}/contact`} className={({ isActive }) => getNavLinkClasses(isActive)}>Contact Us</NavLink>
            </nav>
        </> 
            );
}
 
export default SecondaryNavbar;