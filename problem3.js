function problem3 (inventory)
  {
  
  
  var arr = new Array();
  
  for(var i=0;i<inventory.length;i++)
  {
     
     arr.push(inventory[i]["car_model"]);
     
      
 
  }
  
  return arr.sort();
  
  }


  module.exports.problem3 = problem3;