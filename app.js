function accum(s) {
    return s.split('').map( 
      (char,index) => {
        if (index === 0){
          return char.toUpperCase()
        }
  
        return char.toUpperCase() + char.repeat(index).toLowerCase();
      }
    ).join('-');
  }

  console.log(accum("sgdfggf"));
  