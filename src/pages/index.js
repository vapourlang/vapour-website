import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Contribute from '@site/src/components/Contribute';
import Roadmap from '@site/src/components/Roadmap';
import '@site/src/vapour.js'
import { Highlight, themes} from "prism-react-renderer"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
        <i>Currently in <span style={{color: "#eab308"}}>alpha</span></i>
      </div>                
    </header>               
  );                       
}                           
                            
function ExampleCode() {   
  const code = `   type person: object {
     age: int,              
     name: char             
   }                       
                            
   func create(name: char):  person {
     return person(name = n ame)
   }                        
                           
  @generic                  
  func (p: any) set_age(... : any): any

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
        <Highlight code={code} language="vapour" theme={themes.dracula}>
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
        <Highlight code={coder} language="r" theme={themes.dracula}>
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
        <HomepageFeatures />
        <ExampleCode></ExampleCode>
        <Contribute />
        <Roadmap />
      </main>
    </Layout>
  );
}
