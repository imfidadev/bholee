export const parseError = (error) => {
  return (
    error?.response?.data?.error?.[0] ||
    error?.message ||
    error?.meta?.message ||
    "Something went wrong"
  );
};
