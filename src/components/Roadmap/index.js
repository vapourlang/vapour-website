import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const Items = [
  {
    entry: 'R type inference',
  },
  {
    entry: 'Autocompletion LSP',
  },
  {
    entry: 'Vapour type inference',
  },
  {
    entry: 'Vapour package development tools',
  },
  {
    entry: 'Improve transpiler',
  },
];

function Item({entry}) {
  return (
    <p className={clsx(styles.item)}>{entry}</p>
  );
}

export default function Roadmap() {
  return (
    <section className={styles.features} style={{marginBottom: "7rem"}}>
      <div className="container">
        <Heading as="h1" className={clsx(styles.center)} style={{marginBottom: "2rem"}}>Roadmap</Heading>
        {Items.map((props, idx) => (
          <Item key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}


