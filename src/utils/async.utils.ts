interface Options {
  reject?: boolean;
  resolvedValue?: string | number | Record<string, unknown> | unknown[];
  rejectedValue?: string;
}

export async function sleep(seconds = 2, options: Options) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (options.reject) {
        return reject(options.rejectedValue);
      }

      return resolve(options.resolvedValue);
    }, seconds * 1000);
  });
}
