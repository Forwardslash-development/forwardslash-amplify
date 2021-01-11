import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styles from './Hero.module.css';

function Hero() {
  return (
    <Jumbotron fluid className={styles.jumbotron}>
      <Container>
        <h2 className={styles.subtitle}>Modern Application Development</h2>
        <code className={styles.code}>progressive web solutions </code>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
