import React, {
    useState,
    useEffect,
    useRef
} from "react";
import {
    Link
} from "react-router-dom";
import {
    Grid
} from "antd";
import {
    AlignRightOutlined,
    CloseOutlined,
    PlusOutlined,
    MinusOutlined,

} from "@ant-design/icons";

const {
    useBreakpoint
} = Grid;

// ✅ Submenu Items
// const subMenu = [
//   { title: "Wind Energy", link: "/wind" },
//   // { title: "Solar Energy", link: "/solar" },
//   // { title: "Hydrogen Energy", link: "/hydrogen" },
//   { title: "Energy Optimization", link: "/energy-optimization" },
//   { title: "Solutions", link: "/solutions" },

// ];

const HeaderComponent = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isScrolledUp, setIsScrolledUp] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const screens = useBreakpoint();
    const menuRef = useRef(null);




    // ✅ Track Scroll Position to Fix Header

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;

            if (currentScrollTop > 100) {
                // ✅ Only trigger when scrolling up and above 100px
                if (currentScrollTop < lastScrollTop) {
                    setIsScrolledUp(true);
                } else {
                    setIsScrolledUp(false);
                }
            } else {
                // ❌ If less than 100px, always remove class
                setIsScrolledUp(false);
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);

    // ✅ Toggle Menu
    const toggleMenu = () => {
        setMenuActive(!menuActive);
        document.body.classList.toggle("menu-open", !menuActive);
    };

    // ✅ Handle Dropdown Toggle
    const toggleDropdown = (key) => {
        if (!screens.md) {
            setOpenDropdown(openDropdown === key ? null : key);
        }
    };

    // ✅ Close Dropdown on Click Outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return ( <
        div className = {
            `menu_wrapper headergray ${isScrolledUp ? "fixedh" : ""}`
        }
        ref = {
            menuRef
        } >
        <
        div className = "header k2s-green-container" >
        <
        Link to = "/"
        className = "k2s-green_logo"
        title = "K2S Green" >
        K2S Green <
        /Link>


        { /* ✅ Mobile Hamburger Menu */ } <
        div className = "hamburgermenu_icon"
        onClick = {
            toggleMenu
        } > {
            menuActive ? ( <
                CloseOutlined style = {
                    {
                        fontSize: "26px"
                    }
                }
                />
            ) : ( <
                AlignRightOutlined style = {
                    {
                        fontSize: "26px"
                    }
                }
                />
            )
        } <
        /div>

        { /* ✅ Navigation Menu */ } <
        ul className = {
            `navigation ${menuActive ? "fixed" : ""}`
        } >
        <
        li > < Link to = "/"
        className = "navlink"
        onClick = {
            () => {
                setMenuActive(false);
                document.body.classList.remove("menu-open");
            }
        } > Home < /Link></li >
        <
        li > < Link to = "/about"
        className = "navlink"
        onClick = {
            () => {
                setMenuActive(false);
                document.body.classList.remove("menu-open");
            }
        } > About Us < /Link></li >

        <
        li className = {
            `ddp ${openDropdown === "services" ? "open" : ""}`
        } >
        <
        Link to = "/solutions"
        className = "navlink"
        onClick = {
            () => {
                setMenuActive(false);
            }
        }
        // onClick={() => toggleDropdown("services")}
        >
        {!screens.md ? (
                openDropdown === "services" ? < MinusOutlined / > : < PlusOutlined / >
            ) : null
        }
        Solutions { /* <DownOutlined /> */ } <
        /Link> {
            /* <ul className="dropdown">
                          {subMenu.map((item) => (
                            <li key={item.link}>
                              <Link to={item.link} className="navlink" onClick={() => {
                              setMenuActive(false);
                              document.body.classList.remove("menu-open");
                            }}>
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul> */
        } <
        /li> {
            /* 
                      <li><Link to="/marketplace" className="navlink" onClick={() => {
                              setMenuActive(false);
                              document.body.classList.remove("menu-open");
                            }}>Marketplace</Link></li> */
        } <
        li > < Link to = "/booking"
        className = "navlink"
        onClick = {
            () => {
                setMenuActive(false);
                document.body.classList.remove("menu-open");
            }
        } > Booking & Consultation < /Link></li >
        <
        li > < Link to = "/news"
        className = "navlink"
        onClick = {
            () => {
                setMenuActive(false);
                document.body.classList.remove("menu-open");
            }
        } > Insights < /Link></li >
        <
        li className = "buttonLink" >
        <
        Link to = "/contact"
        onClick = {
            () => {
                setMenuActive(false);
                document.body.classList.remove("menu-open");
            }
        } > Contact < i className = "arrow-right" > < /i></Link >
        <
        /li> <
        /ul> <
        /div> <
        /div>
    );
};

export default HeaderComponent;