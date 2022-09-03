export const isObject = (value) => {
  if (value.startsWith('{') && value.endsWith('}')) {
    return true;
  }

  return false;
};

export const normalizeObj = (value) => {
  return value
    .replace(/\s{0,}:\s{0,}/g, '":')
    .replace(/\s{0,}{\s{0,}/g, '{"')
    .replace(/\s{0,},\s{0,}/g, ',"')
    .replace(/,"{/g, ',{');
};

export const validatePath = (path) => {
  const regExp = /content|props|width|height|caption|visible|\[\d+\]|\./g;
  let result = path.replace(regExp, '');

  return result.trim() === '' ? true : false;
};

export const isString = (value) => {
  const regExp = new RegExp(`\\d{${value.length}}|true|false`);

  return !regExp.test(value);
};

export const normalizeValue = (value) => {
  return value.trim().replaceAll("'", '"');
};
