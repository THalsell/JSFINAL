function averageStringLength(strings) {
  if (strings.length === 0) {
    return 0;
  }
  const totalLength = strings.reduce((acc, str) => acc + str.length, 0);
  return totalLength / strings.length;
}
console.log(averageStringLength(['oh', 'hello']))