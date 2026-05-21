import { useEffect } from "react";
import styles from "./Lightbox.module.css";

export default function Lightbox({ src, alt, onClose }) {
  // Cerrar con tecla Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    // Bloquear scroll del body mientras está abierto
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Vista ampliada de foto"
    >
      {/* Botón cerrar */}
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Cerrar"
      >
        ✕
      </button>

      {/* Imagen — el clic en ella no cierra el overlay */}
      <div
        className={styles.imgWrap}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className={styles.img} />
      </div>
    </div>
  );
}
