export const addbyString = (object, searchString, value) => {
  let currentObj = object;
  let modifiedString = searchString
    .replace(/\[(\w+)\]/g, '.$1')
    .replace('content', '')
    .replace(/^\./, '');
  let arrayKeys = modifiedString.split('.');
  const n = arrayKeys.length;
  let prev;
  let tempKey;

  for (let i = 0; i < n; ++i) {
    tempKey = arrayKeys[i];
    prev = currentObj;

    if (tempKey in currentObj) {
      currentObj = currentObj[tempKey];
    } else {
      prev[prev.length] = value;
    }
  }

  prev[tempKey] = value;
};

export const cloneDeep = (obj) => {
  if (obj === null || typeof obj !== 'object') return null;

  let newObj = Array.isArray(obj) ? [...obj] : { ...obj };

  for (let prop in obj) {
    if (typeof obj[prop] === 'object') {
      newObj[prop] = cloneDeep(obj[prop]);
    }
  }

  return newObj;
};

