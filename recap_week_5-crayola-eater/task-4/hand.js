class Hand extends BallContainer {
  constructor(type, jugglingBalls) {
    super(jugglingBalls);
    this.type = type; // left or right
  }
}
