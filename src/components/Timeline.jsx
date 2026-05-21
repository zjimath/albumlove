import { moments } from "./data/moments";
import TimelineItem from "./TimelineItem";
import styles from "./Timeline.module.css";

export default function Timeline() {
  return (
    <section className={styles.section}>
      <div className={styles.line}>
        {moments.map((moment, index) => (
          <TimelineItem key={moment.id} moment={moment} index={index} />
        ))}
      </div>

      {/* Final */}
      <div className={styles.end}>
        <div className={styles.endLine} />
        <span className={styles.endHeart}>♥</span>
        <p className={styles.endText}>Espero que podamos hacer historia, y consagrar matrimonio.</p>
      </div>
    </section>
  );
}
