import { useEffect } from "react";
import { FaCircleDown } from "react-icons/fa6";
import pics from "../assets/first.jpg";

function Hero() {
  useEffect(() => {
    let maxx = document.querySelector(".hero").clientWidth;
    let maxy = document.querySelector(".hero").clientHeight;
    let halfx = maxx / 2;
    let halfy = maxy / 2;
    let canvas = document.createElement("canvas");
    document.querySelector(".hero").appendChild(canvas);
    canvas.width = maxx;
    canvas.height = maxy;
    let context = canvas.getContext("2d");
    let dotCount = 200;
    let dots = [];
    // create dots
    for (var i = 0; i < dotCount; i++) {
      dots.push(new dot());
    }

    // dots animation
    function render() {
      context.fillStyle = "#000000";
      context.fillRect(0, 0, maxx, maxy);
      for (var i = 0; i < dotCount; i++) {
        dots[i].draw();
        dots[i].move();
      }
      requestAnimationFrame(render);
    }

    // dots class
    // @constructor
    function dot() {
      this.rad_x = 2 * Math.random() * halfx + 1;
      this.rad_y = 1.2 * Math.random() * halfy + 1;
      this.alpha = Math.random() * 360 + 1;
      this.speed = Math.random() * 100 < 50 ? 1 : -1;
      this.speed *= 0.1;
      this.size = Math.random() * 5 + 1;
      this.color = Math.floor(Math.random() * 256);
    }

    // drawing dot
    dot.prototype.draw = function () {
      // calc polar coord to decart
      var dx = halfx + this.rad_x * Math.cos((this.alpha / 180) * Math.PI);
      var dy = halfy + this.rad_y * Math.sin((this.alpha / 180) * Math.PI);
      // set color
      context.fillStyle =
        "rgb(" + this.color + "," + this.color + "," + this.color + ")";
      // draw dot
      context.fillRect(dx, dy, this.size, this.size);
    };

    // calc new position in polar coord
    dot.prototype.move = function () {
      this.alpha += this.speed;
      // change color
      if (Math.random() * 100 < 50) {
        this.color += 1;
      } else {
        this.color -= 1;
      }
    };

    // start animation
    render();
  }, []);

  return (
    <div className="hero relative">
      <div className="mx-auto max-w-[120rem]">
        <div className="absolute left-[50%] top-[50%] z-[99] translate-x-[-50%] translate-y-[-50%] lg:left-[20%] lg:flex lg:translate-x-[-10%] lg:items-center lg:gap-[15rem]">
          <div>
            <div className="mb-4 h-2 w-[25%] bg-[#e9b949]"></div>
            <h3 className="font-Roboto text-[4rem] font-bold text-white">
              Hello, I'm <span className="text-[#e9b949]">Raphael Success</span>
            </h3>
            <p className="text-[2.5rem] font-light text-[#fffaeb]">
              I'm a frontend web developer
            </p>
            <div className="mt-[4rem] flex flex-col items-start gap-10">
              <button className=" inline-flex items-center gap-4 rounded-lg bg-[#e9b949] px-4 py-3 text-[1.6rem] text-[#fffaeb] hover:bg-[#fffaeb] hover:text-black hover:transition-all">
                <FaCircleDown />
                Download CV
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div
              className={`relative h-[45rem] w-[32rem] rounded-2xl before:absolute before:left-8 before:top-8 before:h-full before:w-full before:rounded-2xl before:border-[.5rem] before:border-[#e9b949] before:content-[""]`}
            >
              <img
                src={pics}
                alt="profile pics"
                className="relative block h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
