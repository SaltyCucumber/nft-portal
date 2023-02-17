export const ellipseAddress = (address: string = '', width: number = 10): string => {
  return `${address.slice(0, width)}...${address.slice(-width)}`;
};

export const sizeMatters = (yourThing: string | undefined | null, size: number = 16) => {
  if (typeof yourThing === 'string') {
    if (yourThing.length > size) {
      return `${yourThing.slice(0, size)}...`;
    } else {
      return yourThing;
    }
  }

  return '';
};

export const normalizePath = (path: string) => {
  const lastChar = path.charAt(path.length - 1);

  if (lastChar === '/') {
    return path.substring(0, path.length - 1);
  }

  return path;
};

export const convertToBitFlagValue = (values: boolean[]) => {
  const bitFlag = values
    .map((value) => +value)
    .reverse()
    .join('');

  return parseInt(bitFlag, 2);
};
