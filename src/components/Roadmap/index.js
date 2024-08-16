import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const Items = [
  {
    entry: 'R type inference',
    description: 'Infer types from base R so type checking can be executed.',
  },
  {
    entry: 'Complete LSP',
    description: 'The LSP currently only provides diagnostics, it should also provide autocompletion, help pages, definitions, and more.',
  },
  {
    entry: 'Vapour type inference',
    description: 'Infer types within Vapour to slightly reduce type declarations.',
  },
  {
    entry: 'Vapour package development tools',
    description: 'Vapour could probably provide functionalities similar to those provided by devtools.',
  },
  {
    entry: 'Improve transpiler',
    description: 'The transpiler currently outputs valid but extremely ugly R code.',
  },
  {
    entry: 'Formatter',
    description: 'Include a formatter.',
  },
  {
    entry: 'Extensions',
    description: 'Allow extending Vapour, e.g.: with @decorators',
  },
];

function Item({entry, description}) {
  return (
    <div className={clsx(styles.item)}>
      <p className={clsx(styles.title)}>{entry}</p>
      <p>{description}</p>
    </div>
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


