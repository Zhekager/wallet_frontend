import { fetchData } from './fetchData';

export async function createArrCurrency() {
  try {
    const req = await fetchData();
    const data = [...req];

    return data.map(({ ccy, buy, sale }) => ({
      ccy,
      buy: buy.slice(0, -3),
      sale: sale.slice(0, -3),
    }));
  } catch (err) {
    return err;
  }
}
