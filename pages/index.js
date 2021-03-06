import Layout from '../src/components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Cards from '../src/components/Cards';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Jumbotron fluid className={styles.home}>
        <Container fluid>
          <h2 className={styles.subtitle}>Modern Application Development</h2>
          <h3 className={styles.code}>progressive web solutions </h3>
        </Container>
      </Jumbotron>
      <Cards />
    </Layout>
  );
}
