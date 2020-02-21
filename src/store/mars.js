import { observable, computed, decorate, action } from 'mobx';


export class MarsStore {
  solKeys = [];
  allData = {};

  fetchData = async () => {
    try {
      const test = await fetch('https://api.nasa.gov/insight_weather/?api_key=QxmYWOHTLhHjDGsHy3gbuLLz2KKBvayNviWFhsOu&feedtype=json&ver=1.0');
      const resp = await test.json();
      this.setSolKeys(resp.sol_keys);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  }

  setSolKeys = (solKeys) => {
    this.solKeys = solKeys;
  }
}

decorate(MarsStore, {
  allData: observable,
  solKeys: observable
})

