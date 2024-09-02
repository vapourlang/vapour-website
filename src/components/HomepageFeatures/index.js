import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Types',
    description: (
      <>
        Leverage types to write more robust code.
        <br/>
        <a className={styles.featureLink} href="/docs/types">Discover types!</a>
      </>
    ),
  },
  {
    title: 'Robust code',
    description: (
      <>
        Leverage the LSP and transpilation to catch errors at build time!
      </>
    ),
  },
  {
    title: 'Improved Syntax',
    description: (
      <>
        Use Vapour's improved syntax to write nicer, more readable code.
        <br/>
        <a className={styles.featureLink} href="/docs/syntax">Take a look</a>
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col', styles.feature)}>
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
