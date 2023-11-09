import { GetStaticProps } from 'next';
import Work from './work';
import { getStaticProps as workGetStaticProps } from './work';

export default Work;

export const getStaticProps: GetStaticProps = async (context) => {
  return workGetStaticProps(context);
};
