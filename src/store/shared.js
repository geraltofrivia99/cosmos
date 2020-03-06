import { observable, decorate, action } from 'mobx';

export class SharedStore {
  marsYCoord = 0;
  currentPage = null;
  marsWasMounted = false;
  dayliWasMounted = false;
  setCurentPage = (page) => {
    this.currentPage = page;
  }
}

decorate(SharedStore, {
  marsWasMounted: observable,
  dayliWasMounted: observable,
  marsYCoord: observable,
  currentPage: observable,
  setCurentPage: action,
})
