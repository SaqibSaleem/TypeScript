let NamesArray: string[] = ["Haider", "John", "Sidhu"];
let AgesArray: number[] = [25, 30, 35];
let MixedArray: (string | number)[] = ["John", 25, "Wick", 30];
let StudentArray:Array<string> = ["Saqib", "Ahmed", "Ali"];

NamesArray.push("Bilal")
let poppedName = NamesArray.pop();
console.log(poppedName);
