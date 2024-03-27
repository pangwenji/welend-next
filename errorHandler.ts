export const notifyError = (error: Error) => {
  if (typeof window !== "undefined" && (window as any).bugsnagClient) {
    (window as any).bugsnagClient.notify(error);
  } else {
    // tslint:disable-next-line
    console.log(error);
  }
};
