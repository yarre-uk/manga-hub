import { enqueueSnackbar } from 'notistack';

import { IApiError } from '@/models/apiError.model';

const showApiErrors = ({ message, errors }: IApiError) => {
  if (errors) {
    Object.values(errors).map((value) => enqueueSnackbar(value || message));
  }

  enqueueSnackbar(message);
};

export default showApiErrors;
