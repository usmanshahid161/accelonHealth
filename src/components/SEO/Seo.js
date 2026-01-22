import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, ogURL }) => (
  <>
    <Helmet>
      <title>{ title }</title>
      { description && (
        <meta name="description" content={ description }/>
      ) }
      <meta property="og:title" content={ title }/>
      <meta property="og:description" content={ description }/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={ `https://accelonhealth.com${ ogURL }` }/>
      <meta property="og:image" content="https://accelonhealth.com/og/favicon.ico"/>
      <meta name="twitter:title" content={ title }/>
      <meta name="twitter:description" content={ description }/>
    </Helmet>
  </>
);

export default SEO;
