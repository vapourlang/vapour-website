import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Types',
    description: (
      <>
        Leverage types to write more robust code.
      </>
    ),
  },
  {
    title: 'Improved Syntax',
    description: (
      <>
        Use Vapour's improved syntax to write nicer, more readable code.
      </>
    ),
  },
  {
    title: 'Build step',
    description: (
      <>
        Leverage the LSP and transpilation to catch errors at build time!
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')} style={{marginBottom: "3rem"}}>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features} style={{marginTop: "7rem"}}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
