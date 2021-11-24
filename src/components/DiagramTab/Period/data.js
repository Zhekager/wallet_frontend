function date() {
  const dat = new Date();
  const dateMonth = dat.getUTCMonth();
  const dateYear = dat.getFullYear();
  return { dateMonth, dateYear };
}
export default date;
