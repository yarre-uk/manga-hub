import { StringMap } from '@/types';

const removeEmpty = (obj: StringMap<unknown>) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, v]) => v != null && v !== '' && v !== undefined,
    ),
  );
};

export default removeEmpty;
