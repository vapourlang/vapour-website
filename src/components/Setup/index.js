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
    <section className={styles.features} style={{marginTop: "5rem", marginBottom: "5rem"}}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.svg}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.svg}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
          </svg>
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
