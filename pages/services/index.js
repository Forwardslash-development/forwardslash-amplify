import Layout from '../../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import styles from './Services.module.css';

export default function Services() {
  return (
    <Layout>
      <Jumbotron fluid className={styles.services}>
        <Container>
          <h2 className={styles.subtitle}>Modern Application Development</h2>
          <code className={styles.code}>progressive web solutions </code>
        </Container>
      </Jumbotron>
    </Layout>
  );
}
