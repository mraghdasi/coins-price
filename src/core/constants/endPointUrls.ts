export const endPointUrls = Object.freeze({
  SIMPLE_PRICE: (query: string) => `/simple/price?${query}`,
  SIMPLE_SUPPORTED_CURRENCIES:'/simple/supported_vs_currencies',
  COINS_LIST:'/coins/list',
});
