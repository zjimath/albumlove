import { useState } from "react";
import styles from "./TimelineItem.module.css";
import Lightbox from "./Lightbox";

const TAG_COLORS = {
  rose: styles.tagRose,
  peach: styles.tagPeach,
  lilac: styles.tagLilac,
};

function PhotoGrid({ count, labels }) {
  const [lightbox, setLightbox] = useState(null); // src de la foto abierta

  if (count === 0) return null;

  const slots = Array.from({ length: count }, (_, i) => labels[i] || null);

  const gridClass =
    count === 1
      ? styles.grid1
      : count === 2
      ? styles.grid2
      : count === 3
      ? styles.grid3
      : count === 5
      ? styles.grid5
      : styles.grid4;

  return (
    <>
      <div className={`${styles.photoGrid} ${gridClass}`}>
        {slots.map((label, i) => (
          <div
            key={i}
            className={styles.photoSlot}
            onClick={(e) => {
              if (label) {
                e.stopPropagation(); // no colapsa la card
                setLightbox(`albumlove/assets/${label}`);
              }
            }}
          >
            {label ? (
              <>
                <img
                  src={`/albumlove/assets/${label}`}
                  alt={`Foto ${i + 1}`}
                  className={styles.photo}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Ícono de lupa al hacer hover */}
                <div className={styles.zoomHint} aria-hidden="true">🔍</div>
              </>
            ) : null}
            <div className={styles.photoPlaceholder}>
              <span className={styles.photoIcon}>📷</span>
              <span className={styles.photoHint}>{label ? label : `foto-${i + 1}.jpg`}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox}
          alt="Foto ampliada"
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}

export default function TimelineItem({ moment, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className={styles.item}>
      <div className={styles.dotCol}>
        <div className={`${styles.dot} ${open ? styles.dotActive : ""}`}>
          <span className={styles.dotHeart}>♥</span>
        </div>
      </div>

      <div
        className={`${styles.card} ${open ? styles.cardOpen : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.header}>
          <span className={`${styles.tag} ${TAG_COLORS[moment.tagColor] || styles.tagRose}`}>
            {moment.tag}
          </span>
          <div className={styles.headerText}>
            <h3 className={styles.title}>{moment.title}</h3>
            <p className={styles.date}>{moment.date}</p>
          </div>
          <span className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}>
            ›
          </span>
        </div>

        <div className={`${styles.detail} ${open ? styles.detailOpen : ""}`}>
          <div className={styles.detailInner} onClick={(e) => e.stopPropagation()}>
            <p className={styles.message}>{moment.message}</p>
            <PhotoGrid count={moment.photos} labels={moment.photoLabels} />
          </div>
        </div>
      </div>
    </div>
  );
}
