import { NavbarData } from "../data/data"
import Link from "next/link"
function Navbar() {
    return (
        <>
            <div className="wrapper lg:mx-12 sm:mx-0 my-4">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {NavbarData.navbarLinks.map(item => {
                                    return (
                                        <>
                                            <Link href={`/${item.slug}`}>
                                                <ul className="menu menu-horizontal p-0">
                                                    <li key={item}><a>{item.title}</a></li>
                                                </ul>
                                            </Link>
                                        </>
                                    )
                                })}
                                <Link href={`/${NavbarData.endButton[0].slug}`}>
                                    <a className="btn mt-2">{NavbarData.endButton[0].text}</a>
                                </Link>
                            </ul>
                        </div>
                        <Link href={'/'}>
                            <a className="btn btn-ghost normal-case text-xl">{NavbarData.companyName}</a>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        {NavbarData.navbarLinks.map(item => {
                            return (
                                <>
                                    <Link href={`/${item.slug}`}>
                                        <ul className="menu menu-horizontal p-0">
                                            <li><a>{item.title}</a></li>
                                        </ul>
                                    </Link>
                                </>
                            )
                        })}
                    </div>
                    <div className="navbar-end hidden lg:flex ">
                        <Link href={`/${NavbarData.endButton[0].slug}`}>
                            <a className="btn">{NavbarData.endButton[0].text}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar