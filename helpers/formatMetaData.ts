type MetaData = {
  [key: string]: any;
};

export const formatMetaData: (metadata: MetaData) => {
  [key: string]: string;
} = (metadata) => {
  return Object.entries(metadata).reduce<{ [k: string]: any }>(
    (acc, [key, value]) => {
      if (typeof value === "object" && !Array.isArray(value)) {
        acc = {
          ...acc,
          ...Object.entries(value).reduce<{ [k: string]: any }>(
            (nestedAcc, [nestedKey, nestedValue]) => {
              nestedAcc[`${nestedKey}`] = nestedValue;
              return nestedAcc;
            },
            {}
          ),
        };
      } else {
        acc[key] = value;
      }
      return acc;
    },
    {}
  );
};
