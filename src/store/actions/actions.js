export const REDIRECT = "REDIRECT";

export const redirect = (link) => {
  return {
    type: REDIRECT,
    payload: link,
  };
};
