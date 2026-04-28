console.log("Zadanie 7:")
let nums = [1,1,1,3,4,5,5,6,7,12,13,13,14,15,16,17,17,17]
let len=nums.length
for(let i=0; i<len; i++){
    if(nums[i]===nums[i-1]){
        let a=nums.slice(0,i-1)
        let b=nums.slice(i)
        nums=a.concat(b)
        i--;
        len--;
    }
}
console.log(nums.length)

console.log("\nZadanie 8:")
function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return ""
    }

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix === "") {
                return ""
            }
        }
    }
    return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))

console.log("\nZadanie 9:")
function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]]
        const nextVal = romanMap[s[i + 1]]

        if (nextVal !== undefined && currentVal < nextVal) {
            result -= currentVal
        } else {
            result += currentVal
        }
    }

    return result;
}

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))

console.log("\nZadanie 10:")
const arr = [
    [ 66,  97, 114, 100,   4,   2, 110,  11,   1,   6,  20, ],
    [ 99,   3,  10, 122,  76, 101, 111,   3,  32, 100,   0, ],
    [  6,  22,   1, 111,  32,  10, 110,   7,  97,  97,  67, ],
    [ 60,  97, 116,  32, 100,  23,  97, 114, 100,  32,  34, ],
    [  2, 106,  15,   6, 111,  56,  80,  20,  10,  86,  10, ],
    [ 20, 110,  121, 32, 107,  55,  50,  99, 110, 105,   8, ],
    [ 12,   9,  22, 102,  66, 100,  12, 105,  50,  76, 110, ],
    [ 42,  81, 123,  92,  26,  98,  20,   1,  20,  11,  10, ],
]
const str = "rrrdddllddrrruuuurrddrruurddddlld";
let output=""
let x=0
let y=0

for(let i=0; i<=str.length; i++){
    output=output+String.fromCharCode(arr[y][x])
    if(str[i]==="r") x+=1
    if(str[i]==="l") x-=1
    if(str[i]==="u") y-=1
    if(str[i]==="d") y+=1
}
console.log(output)

console.log("\nZadanie 11:")
function lengthOfLastWord(s) {
    let length = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++
        } else if (length > 0) {
            break
        }
    }
    return length
}
console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))


console.log("\nZadanie 12:")
function howManySteps(n){
    if(n<=2) return n

    let prev2 = 1
    let prev1 = 2
    let current= 0

    for(let i=3; i<=n;i++){
        current=prev1+prev2

        prev2=prev1
        prev1=current
    }
    return current
}
console.log(howManySteps(2))
console.log(howManySteps(3))
console.log(howManySteps(15))