import clsx from 'clsx';
import Heading from '@theme/Heading';
import { Highlight, themes} from "prism-react-renderer"
import styles from './styles.module.css';
import { vapour } from '../../theme';

const syntaxCode = ` let x: int = 1

 # increment in place
 x += 41`

const robustCode = ` # warn that x might be missing
 func foo(x: int): int {
   return x + 1
 }

 # flag that y does not exist
 print(y)`

const typesCode = ` let x: char = "hello, world"

 # will fail, wrong type
 x = NULL`

const items = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.svg}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
    left: (
      <>
        <Heading as="h2">Syntax</Heading>
        <p>
          A language that transpiles to R means we can leverage the existing
          R body of work but improve things in some places by having the syntax
          change faster than the underlying language, akin to the various
          ECMAScript for JavaScript.
        </p>
      </>
    ),
    right: (
      <>
        <Highlight code={syntaxCode} language="vapour" theme={vapour}>
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
      </>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={styles.svg}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
    left: (
      <>
        <Heading as="h2">Robustness</Heading>
        <p>
          Disassociating the code written by the developer from the code
          that ultimately is being run allows checking the written
          code for errors so they can be fixed before they are encountered.
        </p>
        <p>
          Vapour can check for flagrant problems in the code at the time 
          your write it, letting you fix them before they reach your users or even
          your unit tests.
        </p>
      </>
    ),
    right: (
      <>
        <Highlight code={robustCode} language="vapour" theme={vapour}>
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
      </>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.svg}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    left: (
      <>
        <Heading as="h2">Types</Heading>
        <p>
          With the rise of dynamically typed programming languages,
          developers have found out that, it turns out,
          types were not just to help the compiler, they actually
          help the developer just as much.
        </p>
        <p>
          In R, we get caught out by <code>NA</code>, or <code>NULL</code> 
          values too often, not with Vapour.
        </p>
      </>
    ),
    right: (
      <>
        <Highlight code={typesCode} language="vapour" theme={vapour}>
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
      </>
    ),
  },
];

function Item({left, right, icon}) {
  return (
    <div className={clsx('row', styles.item)}>
      <div className="col">
        {icon}{left}
      </div>
      <div className="col">
        {right}
      </div>
    </div>
  );
}

export default function Why() {
  return (
    <section style={{marginTop: "7rem"}}>
      <div className="text--center padding-horiz--md">
        <Heading as="h1">Why Vapour?</Heading>
      </div>
      <div className={clsx("container", styles.items)}>
        {items.map((props, idx) => (
          <Item key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
