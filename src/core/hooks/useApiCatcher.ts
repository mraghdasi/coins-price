import toastHandler from 'core/helpers/toast/toast';

const useApiCatcher = () => {
  return (errorResponse: any, isSHowMessage = true) => {
    if (!isSHowMessage) return;
    if (Array.isArray(errorResponse)) {
      return errorResponse?.map((item) => toastHandler('error', item?.message));
    } else {
      for (const key in errorResponse) {
        if (Object.hasOwnProperty.call(errorResponse, key)) {
          const element = errorResponse[key];
          toastHandler('error', element?.[0] || element);
        }
      }
    }
  };
};

export default useApiCatcher;
