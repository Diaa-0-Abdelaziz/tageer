import React from 'react';
import { useLocation, Link } from 'react-router-dom';
function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb ms-5">
    {location.pathname !== '/' && (
        <li className="">
            <Link to="/" className=' text-decoration-none'>Home</Link>
        </li>
)}
    {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('>')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <li className=" ms-2" key={name} active={isLast}>
            {isLast ? (
              name
            ) : (
              <Link to={routeTo} className=' text-decoration-none '>{name}</Link>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
  );
}

export default Breadcrumb;