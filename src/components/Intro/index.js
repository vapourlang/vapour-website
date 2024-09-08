import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function Intro() {
  return (
    <section style={{marginTop: "7rem"}}>
      <div className="text--center padding-horiz--md">
        <h2 style={{fontWeight: "normal"}}>
         Vapour aims at making R developers <strong>more confident</strong> in their programs.
        </h2>
      </div>
    </section>
  );
}
