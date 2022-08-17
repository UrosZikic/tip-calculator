const bills = {
  // object variable for tip calculation
  bill1: 275,
  bill2: 40,
  bill3: 430,
  tip1() {
    //function containing the tip calculation
    const tip1 = // variable contains ternary operator for a quick conditional statement
      this.bill1 > 50 && this.bill1 < 300
        ? this.bill1 * 0.15 // if true tip= 15%
        : this.bill1 * 0.2; // else tip=20%
    return tip1; // returns tip for the 1st value
  },
  tip2() {
    tip2 =
      bills.bill2 > 50 && bills.bill2 < 300
        ? bills.bill2 * 0.15
        : bills.bill2 * 0.2;
    return tip2;
  },

  tip3() {
    tip3 =
      bills.bill3 > 50 && bills.bill3 < 300
        ? bills.bill3 * 0.15
        : bills.bill3 * 0.2;
    return tip3;
  },
};

console.log(bills.tip1(), bills.tip2(), bills.tip3()); //log the results in dev tools of the website

//IF-ELSE CONDITION COULD HAVE BEEN AN ALTERNATIVE, BUT THIS WAS A FASTER AND CLEANER TAKE.
// feel free to test this code with others bill and tip values
