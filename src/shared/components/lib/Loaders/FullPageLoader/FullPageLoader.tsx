'use client';
import { PageLoaderWrapper } from './FullPageLoaderStyles';
import CircleLoader from '../CircleLoader/CircleLoader';

function FullPageLoader() {
  return (
    <PageLoaderWrapper>
      <CircleLoader size={200} />
    </PageLoaderWrapper>
  );
}

export default FullPageLoader;
