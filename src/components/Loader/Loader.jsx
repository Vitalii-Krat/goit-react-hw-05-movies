import { Audio } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

const Loader = () => (
  <LoaderStyle>
    <Audio heigth="250" width="250" color="grey" ariaLabel="loading" />
  </LoaderStyle>
);
export default Loader;
