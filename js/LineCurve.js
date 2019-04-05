
//класс для построения линейной криовой Безье

class LineCurve {
  constructor() {

  this.firstDot = [20, 50];
  this.secondDot = [200, 200];
  this.lineColor = '#f06';
  this.lineWidth = 3;

  }

  getField() {
  return SVG('field').size(300,300);
  }

  getLineInFirstPoint(){
    return this.getField().line([this.firstDot, this.firstDot])
  }

  getLineColorWidth() {
    return this.getLineInFirstPoint().stroke({color: this.lineColor, width: this.lineWidth})
  }

  render() {
    this.getLineColorWidth().animate(3000).plot([this.firstDot,this.secondDot]);
  }
}


/*
const field = SVG('field').size(300,300);
const fieldRectangular = field.rect(100,100).attr({fill: '#89ff5e'});
const fieldCircle = field.circle(100).move(150, 0).attr({fill: '#ff38b7'});
const fieldEclipse = field.ellipse(200,100).move(0, 150).attr({fill: '#3b2bff'});

const secondField = SVG('secondField').size(500,500);




// можно сделать кнопку и по нажатию линия побежит, но это позже
const fieldBezier = SVG('bezier').size(500,500);
const lineBezier = fieldBezier.line(50, 50, 400, 100).stroke({color: '#f06', width: 5, linecap: 'round'});
lineBezier.animate(3000).plot([[50, 50], [400, 400]])


 */