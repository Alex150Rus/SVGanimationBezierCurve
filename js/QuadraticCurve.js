//класс для построения линейной криовой Безье

/*
x = (1−t)2x1 + 2(1−t)tx2 + t2x3
y = (1−t)2y1 + 2(1−t)ty2 + t2y3
 */

class QuadraticCurve {
  constructor() {

    this.firstDot = [50, 200];
    this.secondDot = [200, 1];
    this.thirdDot = [270, 200];
    this.lineColor = '#f06';
    this.lineWidth = 3;
    this.svg = SVG('secondField').size(300, 300);

  }

  getField() {
    return this.svg;
  }

  getPolyLine() {
    return this.getField().polyline([this.firstDot, this.secondDot, this.thirdDot])
  }

  getLineColorWidth() {
    return this.getPolyLine().stroke({color: this.lineColor, width: this.lineWidth,}).fill('none')
  }

  createCircle () {
    for (let t = 0; t <= 1; t += 0.01) {
      let c = 1 - t;
      let xCurrent = Math.pow(c, 2) * this.firstDot[0] + 2 * c * t * this.secondDot[0] + Math.pow(t, 2) * this.thirdDot[0];
      let yCurrent = Math.pow(c, 2) * this.firstDot[1] + 2 * c * t * this.secondDot[1] + Math.pow(t, 2) * this.thirdDot[1];
      this.svg.circle(3).stroke({color: '#2225ff'}).move(xCurrent, yCurrent);
    }
  }

  render() {
    this.getLineColorWidth();
    this.createCircle();
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