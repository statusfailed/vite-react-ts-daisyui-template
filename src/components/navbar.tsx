import { Link } from 'react-router-dom';

// @ts-ignore
const DropdownMenu = () => {
  return (
    <details>
      <summary>Dropdown</summary>
      <ul className="p-2 bg-base-100 rounded-t-none w-40 right-0">
        <li><a href="https://google.com">Link 1</a></li>
        <li><a href="https://bing.com">Link 2</a></li>
      </ul>
    </details>
  );
};

// A simple burger menu icon
const Burger = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
  );
}

// Navbar right side items
const MenuItems = () => {
  return (
    <>
      <li><Link to="/about">About</Link></li>
      <li><DropdownMenu /></li>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="navbar mt-0 pb-8 relative z-10">
      <div className="flex-1">
        <a className="text-xl font-bold">
          <Link to="/">App Name</Link>
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <Burger />
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-heading text-xl">
            <MenuItems />
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 font-heading text-xl hidden md:flex">
          <MenuItems />
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
