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
        Leverage the LSP the build step to catch errors in your code.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
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
