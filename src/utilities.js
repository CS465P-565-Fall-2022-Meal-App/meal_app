/** @format */

// Update account if needed
const ACCOUNT_NUM = 1; // Free
// export ACCOUNT_NUM = 9973533 // Subscription will expire soon

// Subscribed account uses v2, free uses v1
const VERSION = 1;

export const BASE_URL_INGREDIENT_SEARCH = `https://www.themealdb.com/api/json/v${VERSION}/${ACCOUNT_NUM}/filter.php?i=`;
export const BASE_URL_MEAL_DETAILS = `https://www.themealdb.com/api/json/v${VERSION}/${ACCOUNT_NUM}/lookup.php?i=`;
export const BASE_URL_MEAL_NAME_SEARCH = `https://www.themealdb.com/api/json/v${VERSION}/${ACCOUNT_NUM}/search.php?s=`;
export const BASE_URL_ALPHA = `https://www.themealdb.com/api/json/v${VERSION}/${ACCOUNT_NUM}/search.php?f=`;
export const BASE_URL_CATEGORY = `https://www.themealdb.com/api/json/v${VERSION}/${ACCOUNT_NUM}/filter.php?c=`;
export const BASE_URL_AREA = `https://www.themealdb.com/api/json/v${VERSION}/${ACCOUNT_NUM}/filter.php?a=`;
export const LIST_CATERGORIES_URL = `https://www.themealdb.com/api/json/v${VERSION}/${ACCOUNT_NUM}/list.php?c=list`;
export const LIST_AREAS_URL = `https://www.themealdb.com/api/json/v${VERSION}/${ACCOUNT_NUM}/list.php?a=list`;

export const ALPHA = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
