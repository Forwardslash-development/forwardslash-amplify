import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import styles from './GlobalNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faCode,
  faEdit,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';

export default function GlobalNav() {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav variant='pills'>
          <Link href='/'>
            <a className={styles.link}>
              <FontAwesomeIcon icon={faHome} className={styles.homeIcon} />
              Home
            </a>
          </Link>
          <Link href='/info'>
            <a className={styles.link}>
              <FontAwesomeIcon
                icon={faInfoCircle}
                className={styles.infoIcon}
              />
              Info
            </a>
          </Link>
          <Link href='/services'>
            <a className={styles.link}>
              <FontAwesomeIcon icon={faCode} className={styles.servicesIcon} />
              Services
            </a>
          </Link>
          <Link href='/blog'>
            <a className={styles.link}>
              <FontAwesomeIcon icon={faEdit} className={styles.blogIcon} />
              Blog
            </a>
          </Link>
          <Link href='/connect'>
            <a className={styles.link}>
              <FontAwesomeIcon
                icon={faNetworkWired}
                className={styles.connectIcon}
              />
              Connect
            </a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
