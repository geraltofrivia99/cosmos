import { observable, computed, decorate, action } from 'mobx';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


export class MarsStore {
  solKeys = [];
  allData = {};
  currentSol = null;
  currentDate = null;
  
  fetchData = async () => {
    try {
      const test = await fetch('https://api.nasa.gov/insight_weather/?api_key=QxmYWOHTLhHjDGsHy3gbuLLz2KKBvayNviWFhsOu&feedtype=json&ver=1.0');
      const resp = await test.json();
      this.setAllData(resp);
      this.setSolKeys(resp.sol_keys);
      this.currentSollSetter(resp.sol_keys);
      const featuredSol = resp.sol_keys[resp.sol_keys.length - 1];
      const featuredSolObject = resp[featuredSol];
      const earthDate = featuredSolObject.First_UTC;
      const date = new Date(earthDate);
      const earthMonth = months[date.getUTCMonth()];
      const earthDay = date.getUTCDate();
      this.currentDateSetter(earthMonth + ' ' + earthDay);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  }

  currentSollSetter(sols) {
    this.currentSol = sols[sols.length - 1];
  }

  currentDateSetter(date) {
     this.currentDate = date;
  }

  setSolKeys = (solKeys) => {
    this.solKeys = solKeys;
  }
  
  setAllData = (allData) => {
    this.allData = allData
  }
  
}

decorate(MarsStore, {
  allData: observable,
  curentSoll: observable,
  currentDate: observable,
  currentDateSetter: action,
  currentSollSetter: action
})

