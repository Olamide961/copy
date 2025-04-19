import { NavLink } from "react-router-dom";

const MainNavbar = () => {


    //map routes to link
      const navigation = [
        { name: 'tech', href: '/tech', current: false },
        { name: 'media', href: '/media', current: false },
        { name: 'culinary', href: '/culinary', current: false },
    ]
    
    //mainpage navbar links 
    return (
            <>  
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className="text-black hover:text-gray-500 text-sm lg:text-base"
                        >
                            {item.name}
                        </NavLink>
                    ))}
            </>
     );
}
 
export default MainNavbar;
