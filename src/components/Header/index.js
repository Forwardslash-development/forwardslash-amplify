import React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import GlobalNav from '../GlobalNav';
import styles from './Header.module.css';

function Header() {
  return (
    <Container fluid>
      <Row className={styles.brandRow}>
        <Col className={styles.logoCol} xs='3' md='4' lg='1'>
          <Link href='/'>
            <a className={styles.link}>
              <div className={styles.logo}></div>
            </a>
          </Link>
        </Col>
        <Col className={styles.titleCol} xs='9' md='8' lg='11'>
          <Link href='/'>
            <a className={styles.link}>
              <div className={styles.wrapper}>
                <h1 className={styles.title}>Forwardslash Development</h1>
                <h7 className={styles.address}>
                  Localhost: Chicago, IL. 60626
                </h7>
              </div>
            </a>
          </Link>
        </Col>
      </Row>
      <Row className={styles.navRow}>
        <Col className={styles.brandNav}>
          <GlobalNav />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
