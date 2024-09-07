import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const Items = [
  {
    entry: 'R type inference',
    description: 'Infer types from base R so type checking can be executed.',
    n: 1,
  },
  {
    entry: 'Autocompletion LSP',
    description: 'The LSP currently only provides diagnostics, it should also provide autocompletion (and maybe more).',
    n: 2,
  },
  {
    entry: 'Vapour type inference',
    description: 'Infer types in Vapour to reduce verbosity a tad.',
    n: 3,
  },
  {
    entry: 'Vapour package development tools',
    description: 'Vapour could probably provide functionalities similar to those provided by devtools.',
    n: 4,
  },
  {
    entry: 'Improve transpiler',
    description: 'The transpiler currently outputs valid but extremely ugly R code.',
    n: 5,
  },
  {
    entry: 'Formatter',
    description: 'Include a formatter.',
    n: 6,
  },
  {
    entry: 'Extensions',
    description: 'Allow extending Vapour, e.g.: with @decorators',
    n: 7,
  },
];

function Item({n, entry, description}) {
  return (
    <div className={clsx(styles.item)}>
      <p className={clsx(styles.title)}>{n}) {entry}</p>
      <p>{description}</p>
    </div>
  );
}

export default function Roadmap() {
  return (
    <section className={styles.features} style={{marginBottom: "7rem"}}>
      <div className="container">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.svg}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
        </svg>
        <Heading as="h1" className={clsx(styles.center)} style={{marginBottom: "2rem"}}>Roadmap</Heading>
        {Items.map((props, idx) => (
          <Item key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}


