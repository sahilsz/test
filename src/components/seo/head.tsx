import { Helmet, HelmetData } from 'react-helmet-async';

type HelmetProps = {
  title?: string;
  description?: string;
};

const helmetData = new HelmetData({});

export function Head({ title, description }: HelmetProps) {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | Aliste Technologies` : undefined}
      defaultTitle="Aliste Technologies"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
}
