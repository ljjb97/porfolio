const TriangleBacking = (color, sat, k, wid, hght, off, rng, bgc, id) => {
  const canvas = document.getElementById(id);
  canvas.style.backgroundColor = bgc;
  canvas.width = wid;
  canvas.height = hght;
  const c = canvas.getContext("2d");

  const Triangle = (ax, ay, bx, by, cx, cy, fs) => {
    c.fillStyle = fs;
    c.beginPath();
    c.moveTo(ax, ay);
    c.lineTo(bx, by);
    c.lineTo(cx, cy);
    c.fill();
  };

  const hslToHex = (h, s, l) => {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  //Takes a single number and returns a two digit number between 25 and 75
  const DumbHash = s => {
    for (var k = 0, h = 0; k < s.length; k++)
      h = (Math.imul(31, h) + s.charCodeAt(k)) | 0;
    const ArrStr = ("" + h).split("");
    return (ArrStr[ArrStr.length - 2] + ArrStr[ArrStr.length - 1]) / rng + off;
  };

  //Takes a k value which increases each frame and the i, j and x value to set the specific triangle
  const HexGen = (i, j, x, k) => {
    const Hash = DumbHash(((i + x) * (j + x)).toString());
    const Fader = () => {
      //if the Hash is an odd number it will start by increasing
      if (Hash & 1) {
        if (Hash + k >= 75) {
          if (150 - (Hash + k) <= 25) {
            return 50 - (75 - (Hash + k - 75));
          } else {
            return 75 - (Hash + k - 75);
          }
        } else {
          return Hash + k;
        }
      }
      //else the hash will start by
      else {
        if (Hash - k <= 25) {
          if (50 - (Hash - k) >= 75) {
            return 100 + (Hash - k);
          } else {
            return 50 - (Hash - k);
          }
        } else {
          return Hash - k;
        }
      }
    };
    return hslToHex(color, sat, Fader());
  };

  //Takes a k value to pass to hex gen
  //Uses a for loop to generate each frame of the background
  const init = k => {
    for (let i = 0; i < wid; i += 60) {
      for (let j = 25; j < hght + 50; j += 60) {
        Triangle(i, j - 50, i + 25, j - 75, i + 25, j - 25, HexGen(i, j, 1, k));
        Triangle(
          i + 55,
          j - 50,
          i + 30,
          j - 25,
          i + 30,
          j - 75,
          HexGen(i, j, 2, k)
        );
        Triangle(i, j + 5, i + 25, j - 20, i, j - 45, HexGen(i, j, 3, k));
        Triangle(
          i + 55,
          j + 5,
          i + 30,
          j - 20,
          i + 55,
          j - 45,
          HexGen(i, j, 4, k)
        );
      }
    }
  };

  init(k);
};

export default TriangleBacking;
