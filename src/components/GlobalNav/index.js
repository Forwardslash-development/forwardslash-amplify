import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import styles from './GlobalNav.module.css';

export default function GlobalNav() {
  return (
    <Navbar className={styles.global} collapseOnSelect expand='lg'>
      <Navbar.Toggle
        className={styles.toggle}
        aria-controls='responsive-navbar-nav'
      />
      <Navbar.Collapse className={styles.collapse} id='responsive-navbar-nav'>
        <Nav variant='pills' className={styles.pillbox}>
          <Link href='/'>
            <a className={styles.link}>Home</a>
          </Link>
          <Link href='/about'>
            <a className={styles.link}>About</a>
          </Link>
          <Link href='/services'>
            <a className={styles.link}>Services</a>
          </Link>
          <Link href='/blog'>
            <a className={styles.link}>Blog</a>
          </Link>
          <Link href='/connect'>
            <a className={styles.link}>Connect</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
