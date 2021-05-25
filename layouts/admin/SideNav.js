import Link from 'next/link'
import { FaUserAlt, FaWarehouse, FaUserTie } from 'react-icons/fa'

const SideNav = () => {
  return (
    <div>
      <nav id='sidebarMenu' className='d-md-block bg-light sidebar collapse'>
        <div className='position-sticky pt-3'>
          <ul className='nav flex-column'>
            <li className='nav-item'>
              <Link href='/admin'>
                <a className='nav-link active' aria-current='page'>
                  Dashboard
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/admin/tenant'>
                <a className='nav-link' href='#'>
                  <FaUserAlt /> Tenant
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/admin/units'>
                <a className='nav-link' href='#'>
                  <FaWarehouse /> Units
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/admin/owners'>
                <a className='nav-link' href='#'>
                  <FaUserTie /> Owner
                </a>
              </Link>
            </li>
          </ul>

          <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
            <span>Saved reports</span>
            <a
              className='link-secondary'
              href='#'
              aria-label='Add a new report'
            >
              <span data-feather='plus-circle'></span>
            </a>
          </h6>
          <ul className='nav flex-column mb-2'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <span data-feather='file-text'></span>
                Current month
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <span data-feather='file-text'></span>
                Last quarter
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <span data-feather='file-text'></span>
                Social engagement
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <span data-feather='file-text'></span>
                Year-end sale
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default SideNav
