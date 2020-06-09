import $ from "jquery";

function canvas() {
  $(function() {
    const canvas = document.querySelector("#galaxy"),
      ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.lineWidth = 0.9;
    ctx.strokeStyle = new Color(150).style;

    const dots = {
      nb: 250,
      distance: 100,
      d_radius: 10,
      array: []
    };

    function colorValue(min) {
      return Math.floor(Math.random() * 255 + min);
    }

    function createColorStyle(r, g, b) {
      return "rgba(" + r + "," + g + "," + b + ", 0.8)";
    }

    function Color(min) {
      min = min || 0;
      this.r = colorValue(min);
      this.g = colorValue(min);
      this.b = colorValue(min);
      this.style = createColorStyle(this.r, this.g, this.b);
    }

    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();

      this.radius = Math.random() * 2;

      this.color = new Color();
    }

    Dot.prototype = {
      draw: function() {
        ctx.beginPath();
        ctx.fillStyle = this.color.style;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 1, false);
        ctx.fill();
      }
    };

    const times = x => f => {
      if (x > 0) {
        f();
        times(x - 1)(f);
      }
    };

    function createDots() {
      times(dots.nb)(() => dots.array.push(new Dot()));
    }

    function moveDots() {
      dots.array.map(dot => {
        if (dot.y < 0 || dot.y > canvas.height) {
          // dot.vx = dot.vx;
          dot.vx = -dot.vx;
          dot.vy = -dot.vy;
        } else if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx = -dot.vx;
          dot.vy = -dot.vy;
          // dot.vy = dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      });
    }

    function drawDots() {
      dots.array.map(dot => {
        dot.draw();
      });
    }

    function animateDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      moveDots();
      drawDots();
      requestAnimationFrame(animateDots);
    }
    createDots();
    requestAnimationFrame(animateDots);
  });
}

export default canvas;
