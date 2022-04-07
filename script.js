var matrix = [

]
// debugger;
function generate(length,width){
    for(let i = 0; i< length; i++){
        matrix[i] = []
        for(let j = 0; j<width; j++){
            let rand = Math.floor(Math.random() * 3)
            matrix[i][j] = rand
            // console.log(matrix);
        }
    }
}
grassArr = []
xotakerArr = []
function objecting(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
        }
    }
}
console.log(matrix);
function setup(){
    generate(50,50)
    objecting()
    createCanvas(matrix[0].length * side,matrix.length *side)
    background(150)
    frameRate(30)
    // let randnum = random(0,6)
    // console.log(randnum);

}

side = 15
function draw(){
    
    let r = "red"
    let g ="green"
    let b ="blue"
    for(let y = 0; y<matrix.length;y++){
        for(let x = 0;x<matrix[y].length;x++){
            // console.log(matrix[x].length);
            
            if(matrix[y][x] == 0){
                fill("yellow")
                // rect(x,y,50,50)
            }else if(matrix[y][x] == 1){
                fill(g);
                
            }
            else if(matrix[y][x] == 2){
                fill('lavender');
                
            }
            // else if(matrix[y][x] == 3){
            //     fill("#008080");
                
            // }else if(matrix[y][x] == 4){
            //     fill("cyan");
                
            // }else if(matrix[y][x] == 5){
            //     fill("salmon");
                
            // }else if (matrix[y][x] == 6){
            //     fill("olive");
                
            // }else {
            //     fill("dark orchid");
                
            // }
            rect(x *side,y *side,side,side)
        }
    }
    for (var i in grassArr) {
        grassArr[i].mult()
    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        
    }
    
}
