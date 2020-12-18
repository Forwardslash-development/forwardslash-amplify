import Layout from '../../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import styles from './Connect.module.css';

export default function Blog() {
  return (
    <Layout>
      <Jumbotron fluid className={styles.connect}>
        <Container>
          <h2 className={styles.subtitle}>Modern Application Development</h2>
          <code className={styles.code}>progressive web solutions </code>
        </Container>
      </Jumbotron>
    </Layout>
  );
}
