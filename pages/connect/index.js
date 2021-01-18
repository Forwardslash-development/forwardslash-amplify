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
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Blog() {
  return (
    <Layout fluid>
      <Jumbotron fluid className={styles.connect}>
        <Container fluid>
          <h2 className={styles.subtitle}>Modern Application Development</h2>
          <h3 className={styles.code}>How to connect with us </h3>
        </Container>
      </Jumbotron>
      <Container fluid className={styles.container}>
        <Card style={{ width: '18rem' }} className={styles.cCard}>
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
      </Container>
    </Layout>
  );
}
