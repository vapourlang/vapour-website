import clsx from 'clsx';
import Heading from '@theme/Heading';
import { Highlight, themes} from "prism-react-renderer"
import styles from './styles.module.css';

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
    left: (
      <>
        <Heading as="h2">Syntax</Heading>
        <p>
          A language that transpiles to R means we can leverage the existing
          R body of work but improve things in places by having the syntax
          change faster than the underlying language, akin to the various
          ECMAScript for JavaScript.
        </p>
      </>
    ),
    right: (
      <>
        <Highlight code={syntaxCode} language="vapour" theme={themes.dracula}>
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
          your write it, letting fix them before they reach your users or even
          tests.
        </p>
      </>
    ),
    right: (
      <>
        <Highlight code={robustCode} language="vapour" theme={themes.dracula}>
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
    left: (
      <>
        <Heading as="h2">Types</Heading>
        <p>
          With the rise of dynamically typed programming languages 
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
        <Highlight code={typesCode} language="vapour" theme={themes.dracula}>
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

function Item({left, right}) {
  return (
    <div className={clsx('row', styles.item)}>
      <div className="col">
        {left}
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
