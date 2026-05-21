import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      {/* Partículas decorativas */}
      <div className={styles.particles} aria-hidden="true">
        <span className={`${styles.particle} ${styles.p1}`}>✦</span>
        <span className={`${styles.particle} ${styles.p2}`}>·</span>
        <span className={`${styles.particle} ${styles.p3}`}>✦</span>
        <span className={`${styles.particle} ${styles.p4}`}>·</span>
        <span className={`${styles.particle} ${styles.p5}`}>✦</span>
      </div>

      <p className={styles.eyebrow}>¡Gracias por este hermoso año!</p>

      <h1 className={styles.title}>
        Nayeli 🩶
      </h1>

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.dividerLine} />
        <span className={styles.dividerHeart}>♥</span>
        <span className={styles.dividerLine} />
      </div>

      <p className={styles.subtitle}>
        Me haz enseñado muchisimo, gracias por hacerme una mejor persona, tu compañia es sabía, tu amor lo es todo.
        <br />
        Aquí está una introducción a nuestras vivencias en nuestro primer año juntos, y espero que sea toda una vida 
      </p>

      <p className={styles.scroll}>Desplázate para ver nuestra historia ↓</p>
    </header>
  );
}
