import { NavLink } from "react-router-dom";

const MainNavbar = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

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
                            className={classNames(  item.current ? 'bg-gray-900 text-white' : 'text-black-700 hover:ease-out', 'rounded-md px-3 py-2 text-lg font-medium' )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </NavLink>
                    ))}
            </>
     );
}
 
export default MainNavbar;
