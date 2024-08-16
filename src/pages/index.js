import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Contribute from '@site/src/components/Contribute';
import Roadmap from '@site/src/components/Roadmap';
import '@site/src/vapour.js'
import { Highlight, themes} from "prism-react-renderer"

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
            to="/get-started">
            Get Started
          </Link>
        </div>
        <i>Currently in alpha</i>
      </div>
    </header>
  );
}

function ExampleCode() {
  const code = `
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

  let john: person = create("John")

  set_age(john, 36)
  `
  return (
  <section className="container" style={{marginTop: "5rem"}}>
    <h2 style={{marginBottom: "2rem"}}>Example code</h2>
    <Highlight code={code} language="vapour" theme={themes.dracula}>
     {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            <span>{i + 1}</span>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
    </Highlight>
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
        <Contribute />
        <Roadmap />
      </main>
    </Layout>
  );
}
