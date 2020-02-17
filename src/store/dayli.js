import { fetchProfileData } from "../fakeApi";
import { observable, computed, decorate, action } from 'mobx';

const API_KEY = 'QxmYWOHTLhHjDGsHy3gbuLLz2KKBvayNviWFhsOu';

export class DailyStore {
  daysData = [];
  _offset = 0;
  _array = [];
  loadedImages = new Map();
  fullDaysData = [];
  renderSlides = [];
  constructor(props) {
      this._offset = 1;
  }

  addPrevDays = (daysNumber) => {
    let i = 1;
    const res = [];
  
    while(i <= daysNumber) {
      const lastDay = this.daysData[this.daysData.length - 1];
      const cD = lastDay ? new Date(lastDay) : new Date();
      cD.setDate(cD.getDate() - i);
      res.push(new Date(cD.getTime() - (cD.getTimezoneOffset() * 60000 )).toISOString().split("T")[0]);
      i++;
    }
    this.daysData = this.daysData.concat(res);
    this.fetchFunc(res);
  }

  fetchFunc = async (array) => {
    await Promise.all(array.map((date, i) => 
      fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
        .then(resp => resp.json())
        .then((data) => this.addfullDaysData(data, i))
    ))
  }

  addfullDaysData = (data, i) => {
    if (data.media_type === 'image') {
      this.fullDaysData.push(data);
      this._array.push(data);
      // const img = new Image();
      // img.src = data.hdurl;
      // img.onload = () => {
      //   this.setLoadedImage(true, data.date);
      // }
      // img.onError = () => {
      //   data.isHdImageLoad = false;
      //   this.setLoadedImage(false, i);
      // }
    }
  }

  setLoadedSlides = (i, value) => {
    this.fullDaysData[i].isLoadUrl = value;
  }

  setLoadedImage = (isLoad, date) => {
    this.loadedImages.set(date, isLoad);
    // console.log(`IMAGE WAS LOAD:${isLoad}`,  this.loadedImages);
  }
  
}


decorate(DailyStore, {
  // daysData: observable,
  loadedImages: observable,
  fullDaysData: observable,
  renderSlides: observable,
  addPrevDays: action,
  fetchFunc: action,
  addfullDaysData: action.bound,
  setLoadedImage: action.bound,
  setLoadedSlides: action,
  setRenderSlides: action,
})
