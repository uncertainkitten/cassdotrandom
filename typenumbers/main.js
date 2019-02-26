
class NumberBox{
  constructor(){
    this.total = 0;
    this.convertObject = this.buildConverter();
  }

  buildConverter(){
    let convertObject = {};
    ("abcdefghijklmnopqrstuvwxyz").split("").forEach((char, idx) => {
      convertObject[char] = idx + 1;
    });
    ("0123456789").split("").forEach(num => {
      convertObject[num] = parseInt(num);
    });
    return convertObject
  }

  convertKeypress(event){
    event.preventDefault();
    let value = event.keyCode;
    let result = String.fromCharCode(value).toLowerCase();
    let points = 0;
    if (this.convertObject[result]){
      points = this.convertObject[result];
    } else {
      points = 1;
    }
    this.total += points;
  }
}

let numericality = new NumberBox();
let box = document.querySelector('.numbers');
box.addEventListener('keydown', (e) => numericality.convertKeypress(e));
box.addEventListener('keyup', () => box.setAttribute("value", numericality.total));