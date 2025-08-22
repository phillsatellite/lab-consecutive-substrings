function consecutiveSubstrings(str) {
  //Create a place to store the results
  const result = [];
  
  //Iterate through each character in the text
  for (let start = 0; start < str.length; start++) {
    //Take the substring from the current start to end and add it to the results
    for (let end = start + 1; end <= str.length; end++) {
      result.push(str.slice(start, end));
    }
  }
  return result;
}


if (require.main === module) {
  console.log("Expecting: ['m', 'mn', 'mno', 'n', 'no', 'o']");
  console.log("")
  
  console.log("Expecting: ['x', 'xy', 'xyz', 'y', 'yz', 'z']");
  console.log("=>", consecutiveSubstrings(`xyz`));

  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


