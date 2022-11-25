import React from 'react';
import styles from './styles/App.module.scss';
import headerbg from './images/bg-header-default.png';

function App() {
  return (
    <div className={styles.App}>

      <header className={styles.header}>
        <img src={headerbg}></img>
      </header>
      <section className={styles.main}>
        <div className={styles.content}>
          <div className={styles.location}>
            <div className={styles.line1}>
              <div className={styles.weizhi}>大连软件园16号楼</div>
              <div className={styles.sucbox}>登记成功</div>
            </div>
          </div>
          <div className={styles.userinfo}>

          </div>
        </div>
      </section>
      <div className={styles.fixiconwrap}>

      </div>
    </div>
  );
}

export default App;
