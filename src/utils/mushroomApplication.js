/* eslint-disable default-case */
// eslint-disable-next-line consistent-return
export const getApplicationInText = (application) => {
  switch (application) {
    case 'edible':
      return 'jadalny';

    case 'inedible':
      return 'niejadalny';

    case 'poisonous':
      return 'trujący';

    case 'deadlyPoisonous':
      return 'śmiertelnie trujący';

    case 'conditionallyEdible':
      return 'warunkowo jadalny';
  }
};
