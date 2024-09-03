import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const Items = [
  {
    title: 'Language',
    description: (
      <>
        Help improve the language!
        <br/>
        <Link
          style={{marginTop: "1rem"}}
          className={clsx("button button--primary button--lg", styles.white)}
          to="/contribute">
          Contribute
        </Link>
      </>
    ),
  },
  {
    title: 'Editor integration',
    description: (
      <>
        Help integrate the syntax highlighting and LSP of Vapour in various editor.
      </>
    ),
  },
  {
    title: 'Feedback',
    description: (
      <>
        Share your feedback in the form of Github.
        <br/>
        <Link
          style={{marginTop: "1rem"}}
          className={clsx("button button--primary button--lg", styles.white)}
          to="https://github.com/vapourlang/vapour">
          Give feedback 
        </Link>
      </>
    ),
  },
];

function Item({title, description}) {
  return (
    <div className={clsx('col')} style={{marginBottom: "3rem"}}>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Contribute() {
  return (
    <section className={styles.features} style={{marginTop: "7rem", marginBottom: "4rem"}}>
      <div className="container">
        <Heading as="h1" className={clsx(styles.center)} style={{marginBottom: "5rem"}}>Contribute</Heading>
        <div className="row">
          {Items.map((props, idx) => (
            <Item key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

