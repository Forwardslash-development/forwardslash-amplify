import Layout from '../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Home.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faCode,
  faEdit,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <Layout fluid>
      <Jumbotron fluid className={styles.home}>
        <Container fluid>
          <h2 className={styles.subtitle}>Modern Application Development</h2>
          <h3 className={styles.code}>progressive web solutions </h3>
        </Container>
      </Jumbotron>
      <Container className={styles.container}>
        <Row className={styles.homeRow}>
          <Col className={styles.homeCol} xs={12} lg={3}>
            <Link href='/info'>
              <Card className={styles.infoCard}>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className={styles.infoIcon}
                />
                <Card.Body>
                  <Card.Title>Forwardslash Information</Card.Title>
                  <Card.Text className={styles.cbtext}>
                    Information about Forwardslash Development; history, work,
                    ethics, goals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col className={styles.homeCol} xs={12} lg={3}>
            <Link href='/services'>
              <Card className={styles.serviceCard}>
                <FontAwesomeIcon icon={faCode} className={styles.codeIcon} />
                <Card.Body>
                  <Card.Title>Development Services</Card.Title>
                  <Card.Text className={styles.cbtext}>
                    Progressive web application and API development services.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col className={styles.homeCol} xs={12} lg={3}>
            <Link href='blog'>
              <Card className={styles.blogCard}>
                <FontAwesomeIcon icon={faEdit} className={styles.editIcon} />
                <Card.Body>
                  <Card.Title>Development Blog</Card.Title>
                  <Card.Text className={styles.cbtext}>
                    Our development blog. The place where we write, when we
                    write.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col className={styles.homeCol} xs={12} lg={3}>
            <Link href='/connect'>
              <Card className={styles.connectCard}>
                <FontAwesomeIcon
                  icon={faNetworkWired}
                  className={styles.networkWiredIcon}
                />
                <Card.Body>
                  <Card.Title>Connect with Us.</Card.Title>
                  <Card.Text className={styles.cbtext}>
                    Connect with us by Slack, Discord, Twitter, Github, Email.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
