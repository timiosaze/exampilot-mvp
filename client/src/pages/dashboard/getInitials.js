export const getInitials = (name) => {
  let arrayNames = name.split(" ");
  if (arrayNames.length == 1) {
    return name.substr(0, 1).toUpperCase();
  } else {
    return arrayNames[0]
      .substr(0, 1)
      .toUpperCase()
      .concat("", arrayNames[1].substr(0, 1).toUpperCase());
  }
};
