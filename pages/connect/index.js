import Layout from '../../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';

import styles from './Connect.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

export default function Blog() {
  return (
    <Layout fluid>
      <Jumbotron fluid className={styles.connect}>
        <Container fluid>
          <h2 className={styles.subtitle}>Modern Application Development</h2>
          <h3 className={styles.code}>How to connect with us </h3>
        </Container>
      </Jumbotron>
      <Container className={styles.container}>
        <Row className={styles.cRow}>
          <Col className={styles.cCol} xs={12} lg={3}>
            <Card className={styles.cCard}>
              <FontAwesomeIcon
                icon={faDiscord}
                className={styles.discordIcon}
              />
              <Card.Body>
                <Card.Title>Join us on Discord</Card.Title>
                <Card.Text className={styles.cbtext}>
                  Join the Forwardslash Development Discord server.
                </Card.Text>
                <Link href='https://discord.gg/KhpkGJxN3X'>
                  <a target='_blank' rel='noreferrer'>
                    <Button variant='primary'>Join Us!</Button>
                  </a>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className={styles.cCol} xs={12} lg={3}>
            <Card className={styles.cCard}>
              <FontAwesomeIcon
                icon={faTwitter}
                className={styles.discordIcon}
              />
              <Card.Body>
                <Card.Title>Follow us on Twitter</Card.Title>
                <Card.Text className={styles.cbtext}>
                  Connect with Forwardslash Development on the server.
                </Card.Text>
                <Link href='https://twitter.com/development_io'>
                  <a target='_blank' rel='noreferrer'>
                    <Button variant='primary'>Follow Us!</Button>
                  </a>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className={styles.cCol} xs={12} lg={3}>
            <Card className={styles.cCard}>
              <FontAwesomeIcon icon={faGithub} className={styles.discordIcon} />
              <Card.Body>
                <Card.Title>Star us on Github</Card.Title>
                <Card.Text className={styles.cbtext}>
                  Connect with Forwardslash Development on Github.
                </Card.Text>
                <Link href='https://github.com/ForwardslashDevelopment'>
                  <a target='_blank' rel='noreferrer'>
                    <Button variant='primary'>Star Us!</Button>
                  </a>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className={styles.cCol} xs={12} lg={3}>
            <Card className={styles.cCard}>
              <FontAwesomeIcon icon={faAt} className={styles.atIcon} />
              <Card.Body>
                <Card.Title>Send an email</Card.Title>
                <Card.Text className={styles.cbtext}>
                  Send us an email @ Forwardslash Development.
                </Card.Text>
                <Link href='mailto:jv@forwardslash-development.io'>
                  <a target='_blank' rel='noreferrer'>
                    <Button variant='primary'>Email Us!</Button>
                  </a>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
