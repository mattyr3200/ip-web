function exceptionFormatter(exceptions) {
  const formattedException = exceptions.map((item) => {
    const mapOfExceptions = [];
    Object.keys(item).map((attribute) => {
      mapOfExceptions.push(item[attribute]);
    });
    return mapOfExceptions;
  });
  return formattedException.flat(2);
}

export default exceptionFormatter;
