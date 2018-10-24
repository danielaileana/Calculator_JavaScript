
Calculator =  function(){
    this.add=function(a,b){
        return a+b
    }
    this.subtract=function (a,b) {
        return a-b

    }
    this.mul=function (a,b) {
        return a*b;
    }
    this.div=function (a,b) {
        return a/b;
    }
}
module.exports=Calculator;