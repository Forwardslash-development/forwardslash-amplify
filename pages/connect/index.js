import Layout from '../../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
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
      <Container fluid='xl' className={styles.container}>
        <CardDeck>
          <Card className={styles.cCard}>
            <FontAwesomeIcon icon={faDiscord} className={styles.discordIcon} />
            <Card.Body>
              <Card.Title>Connect on Discord</Card.Title>
              <Card.Text className={styles.cbtext}>
                Connect with Forwardslash Development on the server.
              </Card.Text>
              <Link href='/'>
                <a target='_blank' rel='noreferrer'>
                  <Button variant='primary'>Join Us!</Button>
                </a>
              </Link>
            </Card.Body>
          </Card>
          <Card className={styles.cCard}>
            <FontAwesomeIcon icon={faTwitter} className={styles.discordIcon} />
            <Card.Body>
              <Card.Title>Follow us on Twitter</Card.Title>
              <Card.Text className={styles.cbtext}>
                Connect with Forwardslash Development on the server.
              </Card.Text>
              <Link href='/'>
                <a target='_blank' rel='noreferrer'>
                  <Button variant='primary'>Join Us!</Button>
                </a>
              </Link>
            </Card.Body>
          </Card>
          <Card className={styles.cCard}>
            <FontAwesomeIcon icon={faGithub} className={styles.discordIcon} />
            <Card.Body>
              <Card.Title>Follow us on Github</Card.Title>
              <Card.Text className={styles.cbtext}>
                Connect with Forwardslash Development on Github.
              </Card.Text>
              <Link href='https://github.com/ForwardslashDevelopment'>
                <a target='_blank' rel='noreferrer'>
                  <Button variant='primary'>Join Us!</Button>
                </a>
              </Link>
            </Card.Body>
          </Card>
          <Card className={styles.cCard}>
            <FontAwesomeIcon icon={faAt} className={styles.atIcon} />
            <Card.Body>
              <Card.Title>Send us an email</Card.Title>
              <Card.Text className={styles.cbtext}>
                Connect with Forwardslash Development on Github.
              </Card.Text>
              <Link href=''>
                <a target='_blank' rel='noreferrer'>
                  <Button variant='primary'>Join Us!</Button>
                </a>
              </Link>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </Layout>
  );
}
