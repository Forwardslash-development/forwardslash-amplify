import Layout from '../../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import styles from './Services.module.css';

export default function Services() {
  return (
    <Layout fluid>
      <Jumbotron fluid className={styles.services}>
        <Container fluid>
          <h2 className={styles.subtitle}>Modern Application Development</h2>
          <h3 className={styles.code}>Forwardslash Development Services</h3>
        </Container>
      </Jumbotron>
    </Layout>
  );
}
