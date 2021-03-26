class Input {
  constructor() {
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.enter = false;
    this.space = false;
    this.a = false;
    this.z = false;
  }
  inputListener() {
    addEventListener('keydown', (event) => {
      switch(event.key) {
        case "ArrowUp" :
          this.up = true;
          break;
        case "ArrowDown" :
          this.down = true;
          break;
        case "ArrowLeft" :
          this.left = true;
          break;
        case "ArrowRight" :
          this.right = true;
          break;
        case "Enter" :
          this.enter = true;
          break;
        case "Space" :
          this.space = true;
          break;
        case "a" :
          this.a = true;
          break;
        case "z" :
          this.z = true;
          break;
      }
      event.preventDefault();
    });
    addEventListener('keyup', (event) => {
      switch(event.key) {
        case "ArrowUp" :
          this.up = false;
          break;
        case "ArrowDown" :
          this.down = false;
          break;
        case "ArrowLeft" :
          this.left = false;
          break;
        case "ArrowRight" :
          this.right = false;
          break;
        case "Enter" :
          this.enter = false;
          break;
        case "Space" :
          this.space = false;
          break;
        case "a" :
          this.a = false;
          break;
        case "z" :
          this.z = false;
          break;
      }
    })
  }
}

export default Input;