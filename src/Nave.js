
export class Nave{
    constructor(x,y,width,height,imagen){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.imagen=imagen;
 
}

dibujar(ctx) {
    ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
  }

  //esto lo creamos fuera
//   borrar() {
//     ctx.clearRect(this.x, this.x2, this.y, this.y2);
//   }
  //generar
}

