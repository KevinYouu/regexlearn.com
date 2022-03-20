import packageInfo from 'package.json';

import styles from './Footer.module.css';

const Footer = () => (
  <footer className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className={styles.Footer}>
          <span className={styles.Version}>v{packageInfo.version}</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
