function getRandomOrder(inputArray) {
    const newArray = [...inputArray];
  
    const index1 = Math.floor(Math.random() * 7);
  
    const step1 = newArray.splice(index1, 1);
  
    const index2 = Math.floor(Math.random() * 6);
  
    const step2 = newArray.splice(index2, 1);
  
    const index3 = Math.floor(Math.random() * 5);
  
    const step3 = newArray.splice(index3, 1);
  
    const index4 = Math.floor(Math.random() * 4);
  
    const step4 = newArray.splice(index4, 1);
  
    const index5 = Math.floor(Math.random() * 3);
  
    const step5 = newArray.splice(index5, 1);
  
    const index6 = Math.floor(Math.random() * 2);
  
    const step6 = newArray.splice(index6, 1);
  
    newArray.push(step6[0]);
  
    return newArray;
  }

  
  console.log(getRandomOrder(["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"]));
  console.log(getRandomOrder(["h", "k", "sze", "cs", "p", "szo", "v"]));
  console.log(getRandomOrder([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  