// Selection Sort
// Hannah Tremaine
// 11/3/2023
//An implementation of the selection sort algorithm

let values = [];
const NUM_VALUES = 20;

function setup() {
  // randomSeed(10); // chooses where in the random list numbers are chosen, giving you the same numbers in the array
  populateArray();
  print(values);
  selectionSort();
  print(values);
}

function selectionSort(){
  for(let index = 0;index<values.length-1;index++){
    let minimum = values[index];
    let minimumLoc = index; //min location
    for(let searchIndex =index+1;searchIndex<values.length;searchIndex++){
      let cur = values[searchIndex];
      if (cur<minimum){
        minimum = cur;
        minimumLoc = searchIndex;
      }
    }
    //now time to swap
    let temp = values[index]; //holds number being overwritten in line below
    values[index]= values[minimumLoc];
    values[minimumLoc] = temp;
  }
}

function populateArray(){
  //fill the array with NUM_VALUES number of items
  for(let i =0;i<NUM_VALUES;i++){
    values.push(floor(random(1000)));
  }
}
