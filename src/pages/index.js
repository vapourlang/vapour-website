import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/vapour.png"/>
        <p className={clsx("hero__subtitle", styles.tagline)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--primary button--lg", styles.white)}
            to="/install">
            Install the language
          </Link>
        </div>
      </div>
    </header>
  );
}

function ExampleCode() {
  return (
  <section className="container" style={{marginTop: "5rem"}}>
    <h2 style={{marginBottom: "2rem"}}>Example code</h2>
    <pre className="prism-code language-r">
      <code>{`
  type person: object {
    age: int,
    name: char 
  }

  func create(name: char): person {
    return person(name = name)
  }

  func(p: person) set_age(age: int): null {
    p$age = age
  }

  let john: person = create("john")

  set_age(john, 36)
        `}
      </code>
    </pre>
  </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Write more robust R code">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ExampleCode></ExampleCode>
      </main>
    </Layout>
  );
}
