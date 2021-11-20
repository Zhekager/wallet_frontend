function date() {
  const dat = new Date();
  const dateMonth = dat.getUTCMonth();
  const dateYear = date.getFullYear();
  return { dateMonth, dateYear };
}
export default date;
