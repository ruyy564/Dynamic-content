export const SearchbyString = (object, searchString, value) => {
  let result = object;
  let s = searchString
    .replace(/\[(\w+)\]/g, '.$1')
    .replace('content', '')
    .replace(/^\./, '');
  let a = s.split('.');
  let prev;
  let k;

  for (let i = 0, n = a.length; i < n; ++i) {
    k = a[i];
    prev = result;

    if (k in result) {
      result = result[k];
    } else {
      console.log(prev, k, result, (prev[prev.length] = value));
      return result;
    }
  }

  console.log(prev, k, result, (prev[k] = value));
  return result;
};

export const DeepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return null;

  let newObj = Array.isArray(obj) ? [...obj] : { ...obj };

  for (let prop in obj) {
    if (typeof obj[prop] === 'object') {
      newObj[prop] = DeepClone(obj[prop]);
    }
  }

  return newObj;
};

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

export const initState = {
  content: [
    {
      type: 'panel',
      props: {
        width: 500,
        height: 200,
        visible: true,
      },
      content: [
        {
          type: 'label',
          props: {
            caption: 'test3',
            visible: true,
          },
        },
      ],
    },
    {
      type: 'label',
      props: {
        caption: 'test',
        visible: true,
      },
    },
    {
      type: 'button',
      props: {
        width: 100,
        caption: 'click me',
        height: 50,
        visible: true,
      },
    },
  ],
  error: null,
};
