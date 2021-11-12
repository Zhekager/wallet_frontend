const URL = ' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export async function fetchData() {
  try {
    const res = await fetch(URL);

    return res.json();
  } catch (err) {
    return err;
  }
}
