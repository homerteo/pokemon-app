const arrayToString = (arr) => {
  const namesArray = [];
  arr.forEach((a) => {
    namesArray.push(a.type.name);
  });
  return namesArray.join(", ");
};

export default arrayToString;
