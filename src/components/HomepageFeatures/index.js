import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Products',
    link: '/products',
    Svg: require('@site/static/img/products.svg').default,
    description: (
      <>
        Get more details, information, and guides about our products
      </>
    ),
  },
  {
    title: 'Build Guides',
    link: '/build-guides',
    Svg: require('@site/static/img/wrench.svg').default,
    description: (
      <>
        Get step-by-step instructions on how to build your keyboard kit
      </>
    ),
  },
  {
    title: 'Troubleshooting',
    link: '/troubleshooting',
    Svg: require('@site/static/img/support.svg').default,
    description: (
      <>
        Find solutions to common problems and issues
      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a style={{color: 'inherit'}} href={link}>{title}</a></h3>
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
