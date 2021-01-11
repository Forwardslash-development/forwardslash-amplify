import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';
import styles from './Cards.module.css';

function Cards() {
  return (
    <Container fluid>
      <Row xs='1' sm='1' md='1' lg='4'>
        <Col className={styles.grid}>
          <Link href='/info'>
            <div className={styles.infocard}>
              <a>
                <div className={styles.top}></div>
                <div className={styles.caption}></div>
                <div className={styles.middle}>
                  <h3 className={styles.title}>Info &rarr;</h3>
                  <p>
                    Information about Forwardslash Development; history, work,
                    ethics, goals.
                  </p>
                </div>
                <div className={styles.bottom}></div>
              </a>
            </div>
          </Link>
        </Col>
        <Col className={styles.grid}>
          <Link href='/services'>
            <div className={styles.servicescard}>
              <a>
                <div className={styles.top}></div>
                <div className={styles.caption}></div>
                <div className={styles.middle}>
                  <h3 className={styles.title}>Services &rarr;</h3>
                  <p>
                    Progressive web application and API development services.
                  </p>
                </div>
                <div className={styles.bottom}></div>
              </a>
            </div>
          </Link>
        </Col>
        <Col className={styles.grid}>
          <Link href='/blog'>
            <div className={styles.blogcard}>
              <a>
                <div className={styles.top}></div>
                <div className={styles.caption}></div>
                <div className={styles.middle}>
                  <h3 className={styles.title}>Blog &rarr;</h3>
                  <p>
                    Our development blog. The place where we write, when we
                    write
                  </p>
                </div>
                <div className={styles.bottom}></div>
              </a>
            </div>
          </Link>
        </Col>
        <Col className={styles.grid}>
          <Link href='/connect'>
            <div className={styles.connectcard}>
              <a>
                <div className={styles.top}></div>
                <div className={styles.caption}></div>
                <div className={styles.middle}></div>
                <h3 className={styles.title}>Connect &rarr;</h3>
                <p>
                  Connect with us by Slack, Discord, Twitter, Github, Email.
                </p>
                <div className={styles.bottom}></div>
              </a>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
