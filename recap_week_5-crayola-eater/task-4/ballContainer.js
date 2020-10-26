class BallContainer {
  constructor(jugglingBalls = []) {
    this.jugglingBalls = jugglingBalls; // array of juggling balls
  }

  addBall(jugglingBall) {
    this.jugglingBalls.push(jugglingBall);
  }

  removeBall() {
    // Probably need to keep this FIFO.
    return this.jugglingBalls.shift();
  }

  get contents() {
    return [...this.jugglingBalls];
  }
}
