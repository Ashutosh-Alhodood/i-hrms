"use client";

import React from "react";
import styles from "./DemoModal.module.css";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function DemoModal({ open, onClose }: DemoModalProps) {
  if (!open) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Request demo">
      <div className={styles.backdrop} onClick={onClose} />

      <div className={styles.modalWrap}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close demo form">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 6L18 18M6 18L18 6" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.modal}>
          <h3 className={styles.title}>Get A Free Demo</h3>
          <p className={styles.subtitle}>Experience how Loyaltri makes HR easy for you.</p>

          <form className={styles.form} onSubmit={(e) => { e.preventDefault(); /* submit handler here */ }}>
            <input className={styles.input} placeholder="Your Name" name="name" />
            <input className={styles.input} placeholder="Company Name" name="company" />
            <select className={styles.input} defaultValue="">
              <option value="" disabled>No of Employees</option>
              <option value="1-10">1 - 10</option>
              <option value="11-50">11 - 50</option>
              <option value="51-200">51 - 200</option>
              <option value="200+">200+</option>
            </select>
            <input className={styles.input} placeholder="Phone Number" name="phone" />
            <input className={styles.input} placeholder="Email Address" name="email" />

            <button type="submit" className={styles.cta}>Request a Demo</button>

            <p className={styles.notice}>
              By requesting a demo, you agree to our <a href="/terms" target="_blank" rel="noreferrer">Terms of Service</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}