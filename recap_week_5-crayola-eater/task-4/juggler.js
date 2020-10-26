/* Task 4.1 - The Juggler

Read through the classes contained within the task-4 folder. Link the JavaScript Class files in the index.html. Then, complete
the classes so that when the 'juggle()' method is called on an instance of the 'Juggler' class, the juggling balls move between the 
left hand, the air, and the the right hand in a basic juggling pattern. For example, the pattern should be:

- The juggler starts by throwing a juggling ball out of their left hand into the air.

The the pattern continues as follows:

- Then they throw the juggling ball from their right hand into the air.
- Then they catch the ball from the air in their right hand.
- Then they throw the juggling ball from their left hand into the air.
- Then they catch the ball from the air in their left hand.

The pattern should continue for 10 seconds before stopping.

*/

class Juggler {
  constructor() {
    this.leftHand = new Hand("left", ["jugglingBall", "jugglingBall"]); // left hand starts with two juggling balls
    this.rightHand = new Hand("right", ["jugglingBall"]); // right hand starts with one juggling ball
    this.air = new Air(); // there are no juggling balls in the air to begin with
    this.isJuggling = false; // the juggler is not instantly juggling when they are created

    this.backgroundImage = document.createElement("img");
    this.backgroundImage.src = "juggler.png";

    this.backgroundImage.height = window.innerHeight * 0.9;
    this.backgroundImage.width = window.innerWidth * 0.9;

    this.canvas = document.querySelector("canvas");
    this.canvas.height = window.innerHeight * 0.9;
    this.canvas.width = window.innerWidth * 0.9;
    this.ctx = this.canvas.getContext("2d");
  }

  async juggle() {
    /*  loop which passes juggling balls between the left hand, the air, and the right hand. */

    // Don't want to make this a synchronous, blocking 10-seconds.
    // But also don't want this method invokable if the juggler is already juggling.
    if (this.isJuggling) {
      throw new Error("Juggler is already juggling.");
    }

    this.isJuggling = true;

    for (let i = 0; i < 10; ++i) {
      // - The juggler starts by throwing a juggling ball out of their left hand into the air.
      // LEFT: 1, RIGHT: 1, AIR: 1
      this.air.addBall(this.leftHand.removeBall());
      this.drawState();

      // - Then they throw the juggling ball from their right hand into the air.
      // LEFT: 1, RIGHT: 0, AIR: 2
      this.air.addBall(this.rightHand.removeBall());
      this.drawState();

      // - Then they catch the ball from the air in their right hand.
      // LEFT: 1, RIGHT: 1, AIR: 1
      this.rightHand.addBall(this.air.removeBall());
      this.drawState();

      // - Then they throw the juggling ball from their left hand into the air.
      // LEFT: 0, RIGHT: 1, AIR: 2
      this.air.addBall(this.leftHand.removeBall());
      this.drawState();

      // - Then they catch the ball from the air in their left hand.
      // LEFT: 1, RIGHT: 1, AIR: 1
      this.leftHand.addBall(this.air.removeBall());
      this.drawState();

      // Wait 1 second.
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    this.isJuggling = false;
  }

  drawState() {
    const ctx = this.ctx;
    const ballRadius = 30;

    // draw background first.
    ctx.drawImage(
      this.backgroundImage,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    // draw left hand's state
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;

    for (let i = 0; i < this.leftHand.contents.length; ++i) {
      ctx.beginPath();
      ctx.arc(
        100,
        200 - (ballRadius + 10) * i,
        ballRadius,
        0,
        Math.PI * 2,
        true
      );
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // draw right hand's state
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    for (let i = 0; i < this.rightHand.contents.length; ++i) {
      ctx.beginPath();
      ctx.arc(700, 400, ballRadius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // draw air's state
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    for (const ball of this.air.contents) {
      ctx.beginPath();
      ctx.arc(200, 100, ballRadius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }
}

const juggler = new Juggler();
juggler.juggle();
