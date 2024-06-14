export const parseError = (error) => {
  return (
    error?.response?.data?.error?.[0] ||
    error?.message ||
    error?.meta?.message ||
    DEFAULT_MSG.StandardErrorMsg
  );
};
