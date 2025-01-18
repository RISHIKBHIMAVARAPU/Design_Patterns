export class IphoneStockObservable {
    constructor() {
        this.observersList = new Array();
        this.stockCount = 0;
    }
    addObserver(observer) {
        this.observersList.push(observer);
        return true;
    }
    removeObserver(removeObserver) {
        this.observersList = this.observersList.filter((observer) => {
            return observer != removeObserver;
        });
        return true;
    }
    setStockCount(count) {
        if (this.stockCount == 0) {
            this.stockCount = count;
            this.notifyObservers();
        }
        this.stockCount = count;
    }
    notifyObservers() {
        for (let observer of this.observersList) {
            observer.update();
        }
    }
    getStockCount() {
        return this.stockCount;
    }
}
