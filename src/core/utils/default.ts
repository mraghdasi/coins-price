export const isBrowser = () => typeof window !== 'undefined' || !!process?.browser;

export const tableRowIndex = (index = 0, pageNumber = 1, recordPerPage = 10) => {
  return index + 1 + (pageNumber - 1) * recordPerPage;
};

const toPlainString = (num: string | number) => {
  return ('' + +num).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/, function (a, b, c, d, e) {
    return e < 0 ? b + '0.' + Array(1 - e - c.length).join(0 + '') + c + d : b + c + d + Array(e - d.length + 1).join(0 + '');
  });
};

export const paginateDataHandler = (data: any[], page = 1, limit = 15) => data.slice(page === 1 ? 0 : (page - 1) * limit, limit === 1 ? 15 : page * limit);

export const mainFormatNumber = (num: string | number, { point = 0, type = '' } = {}) => {
  if (!num) {
    return 0;
  }
  // const float = parseFloat(num)

  const number = toPlainString(num);
  const numParts = number.split('.');

  const firstPart = numParts[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (type === 'irt') return firstPart;

  let secondPart = null;
  if (numParts.length > 1) {
    secondPart = numParts[1].toString().substring(0, point ? point : type === 'usdt' ? 2 : 6);
  }

  let formattedNumber = firstPart;
  if (secondPart) formattedNumber = `${firstPart}.${secondPart}`;
  if (!secondPart && point) formattedNumber += '.00';
  if (point && secondPart) {
    for (let i = 0; i < point - secondPart.length; i++) {
      formattedNumber += '0';
    }
  }

  if (!point && secondPart) {
    for (let i = formattedNumber.length - 1; i > 0; i--) {
      if (formattedNumber[i] === '0') {
        formattedNumber = formattedNumber.substring(0, i);
      } else if (formattedNumber[i] === '.') {
        formattedNumber = formattedNumber.substring(0, i);
        break;
      } else {
        break;
      }
    }
  }

  return formattedNumber;
};

export const convertPersianNumberToEnglish = (s: string, number?: boolean) => {
  s = s + '';
  const elem = s
    .toString()
    .replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d) + '')
    .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d) + '');
  if (number) return +elem;
  return elem;
};

export const convertAllPropertyToEnIntegerNumber = (values: any) => {
  const newValues: any = {};
  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      const element = values[key];

      if (element && !isNaN(element)) {
        newValues[key] = convertPersianNumberToEnglish(element, true);
      } else if (Array.isArray(element)) {
        newValues[key] = element.map((item) => {
          convertPersianNumberToEnglish(item);
          if (item && !isNaN(item)) return convertPersianNumberToEnglish(item, true);
          else return convertPersianNumberToEnglish(item);
        });
      } else {
        newValues[key] = convertPersianNumberToEnglish(element);
      }
    }
  }

  return newValues;
};

export const convertAllPropertyToEnStringNumber = (values: any) => {
  const newValues: any = {};
  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      const element = values[key];

      if (Array.isArray(element)) {
        newValues[key] = element.map((item) => {
          convertPersianNumberToEnglish(item);
        });
      } else {
        newValues[key] = convertPersianNumberToEnglish(element);
      }
    }
  }

  return newValues;
};

export const septateStringWithDash = (text = '') => {
  return text.replace(/\s+/g, '-').toLowerCase();
};

export const overrideJoin = (items: any[], overrideAttribute: any) => {
  return items.map((item) => ObjectByString(item, overrideAttribute));
};

export const ObjectByString = (o: any, s: any) => {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, ''); // strip a leading dot
  const a = s.split('.');
  for (let i = 0, n = a.length; i < n; ++i) {
    const k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};
