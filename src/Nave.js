
 class Nave{
    constructor(x,y,width,height,imagen){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.imagen=imagen;
 
}

dibujar(ctx) {
    ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
    console.log(ctx)
 }

  
  borrar(ctx) {
    ctx.clearRect(this.x, this.y, this.width, this.height);
   }
  

  moverNave(key) {
   console.log(key)
   this.borrar(ctx);
    if (key === "ArrowLeft") {
      if (this.x > -20) {
        this.x = this.x - 20;
      }
    }
    
    if (key === "ArrowRight") {
      if (this.x < 620) {
        this.x = this.x + 20;
      }
    }
    
    if (key === "ArrowUp") {
      if (this.y > 0) {
        this.y = this.y - 20;
      }
    }
    
    if (key === "ArrowDown") {
      if (this.y >= 0 && this.y <600) {
        this.y = this.y + 20;
      }
    
    }
    this.dibujar(ctx)
  }
}

