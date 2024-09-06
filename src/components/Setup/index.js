import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Install',
    description: (
      <>
        Install the language, we have prebuilt binaries for all operating systems.
        <br/>
        <a className={styles.featureLink} href="/install">Install!</a>
      </>
    ),
  },
  {
    title: 'Editor',
    description: (
      <>
        Setup your editor, we support Vim, Neovim, and Vscode (and Positron).
        <br/>
        <a className={styles.featureLink} href="/LSP">Setup your editor</a>
      </>
    ),
  },
  {
    title: 'Explore',
    description: (
      <>
        Explore your newly installed language!
        <br/>
        <a className={styles.featureLink} href="/get-started">Explore Vapour!</a>
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col', styles.feature)}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Setup() {
  return (
    <section className={styles.features} style={{marginTop: "7rem", marginBottom: "10rem"}}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <Heading as="h1">Setup</Heading>
          <p>Get started with Vapour!</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
