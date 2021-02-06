const getFullPlDate = (dateUTC) => {
  const date = new Date(dateUTC);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat('pl-pl', options).format(date);
};

export default getFullPlDate;
