import csv from 'csvtojson';
import _ from 'lodash';

async function fetchData(){
    const response = await fetch("https://raw.githubusercontent.com/TheEconomist/big-mac-data/january-2023-update/output-data/big-mac-adjusted-index.csv");
    return await response.text();
}

export default async function handler(req, res) {

    const query = req.query;
    const { sourceCountry } = query;

    const dataCsv = await fetchData();
    const data = await csv().fromString(dataCsv);

    // find last publishment date
    const lastPublishmentDate = Object.keys(_.groupBy(data, (i) => i.date)).sort((a,b)=> new Date(b) - new Date )[0];

    // filter data by last publishment date
    const lastPublishedDataset = _.filter(data, { 'date': lastPublishmentDate });
    
    const source = _.find(lastPublishedDataset, { 'iso_a3': sourceCountry });
    if(!source) return [];
    
    const prices = _.reject(lastPublishedDataset, { 'currency_code': source.currency_code })
            .map((item) => ({
                country_name: item.name,
                country_code: item.iso_a3,
                currency_code: item.currency_code,
                price_index: parseFloat(item.local_price) / parseFloat(source.local_price),
                adjusted_price_index: (parseFloat(item.dollar_ex) * parseFloat(item.adj_price)) / (parseFloat(source.dollar_ex) * parseFloat(source.adj_price)),
            }));

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=3600, stale-while-revalidate=59'
    );

    res.status(200).json(prices);
  
}
