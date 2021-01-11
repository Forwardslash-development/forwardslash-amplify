import Layout from '../../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import styles from './Blog.module.css';

export default function Blog() {
  return (
    <Layout>
      <Jumbotron fluid className={styles.blog}>
        <Container>
          <h2 className={styles.subtitle}>Modern Application Development</h2>
          <h3 className={styles.code}>progressive web solutions </h3>
        </Container>
      </Jumbotron>
    </Layout>
  );
}
