import Layout from '../../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import styles from './About.module.css';

export default function About() {
  return (
    <Layout>
      <Jumbotron fluid className={styles.about}>
        <Container>
          <h1 className={styles.subtitle}>Modern Application Development</h1>
          <h3 className={styles.code}>about</h3>
        </Container>
      </Jumbotron>
    </Layout>
  );
}
