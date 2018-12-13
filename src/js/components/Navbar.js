import React from "react";
import { NavLink } from 'react-router-dom';
import '../../css/custom.css'







const Nav = () => (
    <div className={'SidebarCust'}>



                    <div className={"SidebarLi"}>
                        <a className="nav-link">
                        <NavLink activeClassName={'NavSelected'}
                            to="/home"

                        >
                            Home
                        </NavLink>
                        </a>
                    </div>
        <a className="nav-link">


                        <NavLink activeClassName={'NavSelected'}
                            to="/articles"

                        >
                            Articles
                        </NavLink>


        </a>

                    <div className={"SidebarLi"}>
                        <a className="nav-link">
                        <NavLink activeClassName={'NavSelected'}

                            to="/AddArticle"

                        >
                            Add an article
                        </NavLink>
                        </a>
                    </div>
    </div>

);

export default Nav;