import Layout from '../../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styles from './Connect.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

export default function Connect() {
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
            <Link href='https://discord.gg/KhpkGJxN3X'>
              <a target='_blank' rel='noreferrer'>
                <Card className={styles.discordCard}>
                  <FontAwesomeIcon
                    icon={faDiscord}
                    className={styles.discordIcon}
                  />
                  <Card.Body>
                    <Card.Title>Join us on Discord</Card.Title>
                    <Card.Text className={styles.cbtext}>
                      Join the Forwardslash Development Discord server.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Link>
          </Col>
          <Col className={styles.cCol} xs={12} lg={3}>
            <Link href='https://twitter.com/development_io'>
              <a target='_blank' rel='noreferrer'>
                <Card className={styles.cCard}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className={styles.twitterIcon}
                  />
                  <Card.Body>
                    <Card.Title>Follow us on Twitter</Card.Title>
                    <Card.Text className={styles.cbtext}>
                      Connect with Forwardslash Development on the server.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Link>
          </Col>
          <Col className={styles.cCol} xs={12} lg={3}>
            <Link href='https://github.com/ForwardslashDevelopment'>
              <a target='_blank' rel='noreferrer'>
                <Card className={styles.cCard}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className={styles.githubIcon}
                  />
                  <Card.Body>
                    <Card.Title>Star us on Github</Card.Title>
                    <Card.Text className={styles.cbtext}>
                      Connect with Forwardslash Development on Github.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Link>
          </Col>
          <Col className={styles.cCol} xs={12} lg={3}>
            <Link href='mailto:jv@forwardslash-development.io'>
              <a target='_blank' rel='noreferrer'>
                <Card className={styles.cCard}>
                  <FontAwesomeIcon icon={faAt} className={styles.atIcon} />
                  <Card.Body>
                    <Card.Title>Send an email</Card.Title>
                    <Card.Text className={styles.cbtext}>
                      Send us an email @ Forwardslash Development.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
