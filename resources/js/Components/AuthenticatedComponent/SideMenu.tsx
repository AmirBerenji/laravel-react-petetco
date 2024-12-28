import {Link} from "@inertiajs/react";

export default function SideMenu() {
  return(
    <>

      <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item">
            <Link prefetch={['mount', 'hover']} className="nav-link " href={route('dashboard')}>
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link prefetch={['mount', 'hover']} className="nav-link " href={route('clinic.index')}>
              <i className="ri  ri-hospital-line"></i>
              <span>Clinic and Branches</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link prefetch={['mount', 'hover']} className="nav-link " href={route('feature.index')}>
              <i className="bi bi-postage"></i>
              <span>Feature</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link prefetch={['mount', 'hover']} className="nav-link " href={route('user.index')}>
              <i className="bi bi-person"></i>
              <span>Users</span>
            </Link>
          </li>

        </ul>

      </aside>

    </>
  )
}
