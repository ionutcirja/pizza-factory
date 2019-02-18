// @flow

export const sendOrder = (): Promise<*> => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});
