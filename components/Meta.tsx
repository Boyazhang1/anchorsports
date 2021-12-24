import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { AppConfig } from '../utils/AppConfig';
const Meta = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title={AppConfig.title}
        description={AppConfig.description}
        openGraph={{
          title: AppConfig.title,
          description: AppConfig.description,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
