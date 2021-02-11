import Layout from '../../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import styles from './Info.module.css';

export default function Info() {
  return (
    <Layout fluid>
      <Jumbotron fluid className={styles.info}>
        <Container fluid>
          <h1 className={styles.subtitle}>Modern Application Development</h1>
          <h3 className={styles.code}>
            Info about, history, work, ethics, goals...
          </h3>
        </Container>
      </Jumbotron>
    </Layout>
  );
}
