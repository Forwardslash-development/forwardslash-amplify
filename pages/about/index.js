import Layout from '../../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import styles from './About.module.css';

export default function About() {
  return (
    <Layout>
      <Jumbotron fluid className={styles.about}>
        <Container>
          <h1 className={styles.title}>Modern Application Development</h1>
          <h3 className={styles.code}>About Forwardslash Development </h3>
        </Container>
      </Jumbotron>
    </Layout>
  );
}
