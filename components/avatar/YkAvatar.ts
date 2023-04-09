
  //头像大小
  export const getSize = (size: number | string): number => {
    if (typeof size === "number") {
      return size;
    }
    switch (size) {
      case "ss":
        return 24;
      case "s":
        return 32;
      case "m":
        return 40;
      case "l":
        return 80;
      default:
        return 40;
    }
  
  }
  
  //圆角大小
  export const getShape = (shape: number | string): number => {
    if (typeof shape === "number") {
      return shape;
    }
    switch (shape) {
      case "circle":
        return 80;
      case "square":
        return 8;
      default:
        return 40;
    }
  };