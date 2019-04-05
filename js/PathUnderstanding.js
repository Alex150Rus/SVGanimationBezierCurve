class PathUnderstanding {
  constructor () {
    this.svg = SVG('bezier').size(300, 300);
    this.firstDot = [50, 200];
    this.secondDot = [200, 1];
    this.thirdDot = [270, 200];
  }
  renderRectangle () {
    this.svg.path('M 0 0 L 300 0 L 200 300 z')
      .stroke({color: '#9127ff'}).fill('none');
  }

  renderqQadraticBezie () {
    const path= this.svg.path('M50,200 Q200 1 270 200')
      .stroke({color: '#9127ff'}).fill('none');
    const length = path.length();

    const rect = this.svg.rect(7,7);
    rect.animate(8000, '<>').during(function(pos,morph, eased) {
      const p = path.pointAt(eased * length);
      rect.center(p.x, p.y)
    }).loop(true, true)
  }
}