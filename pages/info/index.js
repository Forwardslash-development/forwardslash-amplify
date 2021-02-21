import Layout from '../../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullseye,
  faAward,
  faBrain,
  faBalanceScale,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Info.module.css';

export default function Info() {
  return (
    <Layout fluid>
      <Jumbotron fluid className={styles.info}>
        <Container fluid>
          <h1 className={styles.subtitle}>Modern Application Development</h1>
          <h3 className={styles.code}>Mission, goals, values, work...</h3>
        </Container>
      </Jumbotron>
      <Container className={styles.container}>
        <Row className={styles.infoRow}>
          <Col className={styles.infoCol} xs={12} lg={3}>
            <Link href='/info'>
              <Card className={styles.missionCard}>
                <FontAwesomeIcon
                  icon={faBullseye}
                  className={styles.missionIcon}
                />
                <Card.Body>
                  <Card.Title>Forwardslash Development Mission</Card.Title>
                  <Card.Text className={styles.cbtext}>
                    Public Mission Statement
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col className={styles.infoCol} xs={12} lg={3}>
            <Link href='/services'>
              <Card className={styles.goalsCard}>
                <FontAwesomeIcon icon={faAward} className={styles.goalsIcon} />
                <Card.Body>
                  <Card.Title>Forwardslash Development Goals</Card.Title>
                  <Card.Text className={styles.cbtext}>
                    Stated Organizational Goals
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col className={styles.infoCol} xs={12} lg={3}>
            <Link href='blog'>
              <Card className={styles.valuesCard}>
                <FontAwesomeIcon
                  icon={faBalanceScale}
                  className={styles.valuesIcon}
                />
                <Card.Body>
                  <Card.Title>Development Values</Card.Title>
                  <Card.Text className={styles.cbtext}>
                    What we value true.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col className={styles.infoCol} xs={12} lg={3}>
            <Link href='/connect'>
              <Card className={styles.workCard}>
                <FontAwesomeIcon icon={faBrain} className={styles.workIcon} />
                <Card.Body>
                  <Card.Title>Forwardslash Development Work</Card.Title>
                  <Card.Text className={styles.cbtext}>
                    Our Work. Your Work. Work with us. Work for us.
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
