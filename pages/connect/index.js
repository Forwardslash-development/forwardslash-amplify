import Layout from '../../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import styles from './Connect.module.css';

export default function Blog() {
  return (
    <Layout fluid>
      <Jumbotron fluid className={styles.connect}>
        <Container fluid>
          <h2 className={styles.subtitle}>Modern Application Development</h2>
          <h3 className={styles.code}>How to connect with us </h3>
        </Container>
      </Jumbotron>
    </Layout>
  );
}
