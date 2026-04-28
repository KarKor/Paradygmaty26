console.log("Zadanie 1:\n")

let text={
    check: (text, word) =>console.log(text.includes(word)),
    getCount: (text) =>console.log(text.length),
    getWordsCount: (text) =>console.log(text.trim().split(/\s+/).length),
    setCapitalize: (text)=>console.log(text.replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase())),
    setMix: function (text){
        let res=""
        for(let i=0; i<text.length;i++){
            if(i%2===1){
                res+=text.charAt(i).toUpperCase()
            }
            else
                res+=text.charAt(i)
        }
        console.log(res)
    },
    generateRandom: (lng) =>{
        var result           = '';
        var characters       = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < lng; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log(result)
    }

}

text.check("ala ma kota", "kota")
text.getCount("ala ma kota")
text.getWordsCount("ala ma    kota")
text.setCapitalize("ala ma kota")
text.setMix("ala ma kota")
text.generateRandom(11)

console.log("\nZadanie 2\n")

String.prototype.mirror = function (){
    res=""
    for(let i=this.length-1; i>=0; i--){
        res+=this.charAt(i)
    }
    return res
}
console.log("ala ma kota".mirror())

console.log("\nZadanie 3\n")

function createCounter(){
    let x=1
    return function() {
        return x++
    }
}

const counter1 = createCounter()
console.log(counter1())
console.log(counter1())
console.log(counter1())

const counter2 = createCounter()
console.log(counter2())
console.log(counter2())
console.log(counter2())