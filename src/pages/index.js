import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Contribute from '@site/src/components/Contribute';
import Roadmap from '@site/src/components/Roadmap';
import '@site/src/vapour.js'
import { Highlight, themes} from "prism-react-renderer"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Why from '../components/Why';
import Admonition from '@theme/Admonition';

import styles from './index.module.css';
import Intro from '../components/Intro';
import { vapour } from '../theme';
import AsciinemaWidget from '../components/Cast';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/vapour.png"/>
        <p className={clsx("hero__title", styles.tagline)}>{siteConfig.tagline}</p>
        <iframe style={{display: "block", margin: "0 auto", marginBottom: "2rem"}} src="https://ghbtns.com/github-btn.html?user=vapourlang&repo=vapour&type=star" frameborder="0" scrolling="0" width="50" height="20" title="GitHub"></iframe>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--primary button--lg", styles.white)}
            to="/get-started">
            Get Started
          </Link>
        </div>
        <div style={{marginTop: "4rem"}}>
          <Admonition type="warning" title="Early alpha">
            <p>Vapour is extremely young, the syntax might change, things will break, expect bugs.</p>
            <p>But please help the language mature 🙂</p>
          </Admonition>
        </div>
      </div>                
    </header>               
  );                       
}                           
                            
function ExampleCode() {   
  const code = `   type person: object {
     age: int,              
     name: char             
   }                       
                            
   func create(name: char): person {
     return person(name = name)
   }                        
                           
  @generic                  
  func (p: any) set_age(age: int, ...: any): any

  @default                  
  func(p: any) set_age(age: int): null {
    stop("not implemented")
  }

  func(p: person) set_age(age: int): person {
    p$age = age
    return p
  }

  let john: person = create("John") |>
    set_age(36)`

  const coder = `   create <- function(name: char) {
     return(structure(
       list(
         name = name
       ),
       class = c("person", "list")
     )
   })

  set_age <- function(p, ...) {
    UseMethod("set_age")
  }

  set_age.default <- function(p, age) {
    stop("not implemented")
  }

  set_age.person <- function(p, age) {
    attr(p, "age") <- age
    return(p)
  }

  john <- create("John") |>
    set_age(36)`

  return (
  <section className="container" style={{marginTop: "0rem"}}>
    <Tabs>
      <TabItem value="vp" label="Vapour">
        <Highlight code={code} language="vapour" theme={vapour}>
         {({ style, tokens, getLineProps, getTokenProps }) => (
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
      </TabItem>
      <TabItem value="r" label="R">
        <Highlight code={coder} language="r" theme={vapour}>
         {({ style, tokens, getLineProps, getTokenProps }) => (
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
      </TabItem>
    </Tabs>
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
        <Intro />
        <Why />
        <ExampleCode></ExampleCode>
        <Contribute />
        <Roadmap />
      </main>
    </Layout>
  );
}
