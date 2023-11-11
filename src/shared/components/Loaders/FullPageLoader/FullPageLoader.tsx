import { PageLoaderWrapper } from './FullPageLoaderStyles';
import CircleLoader from '../CircleLoader/CircleLoader';

const FullPageLoader = () => {
  return (
    <PageLoaderWrapper>
      <CircleLoader size={200} />
    </PageLoaderWrapper>
  );
};

export default FullPageLoader;
