'use strict';
module.exports = function check(str, bracketsConfig) {
  // your solution
  let Symvols = str.split(''),
	Brackets = [],
	st = [];
	
	for(let i = 0; i < bracketsConfig.length; i++) {
		Brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
	}

    for(let i = 0; i < Symvols.length; i++) {
		if(Symvols[i] === st[st.length - 1]) {
			st.pop();
		} else {
      if(Brackets[Symvols[i]] !== undefined) {
        st.push(Brackets[Symvols[i]]);
      } 
      else {return false;}
		}
	}

    return st.length === 0;
};
