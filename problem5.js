function problem5 (inventory)
  {
  
  
  var arr = new Array();
  
  for(var i=0;i<inventory.length;i++)
  {
     if(inventory[i]["car_year"]<2000)
     arr.push(inventory[i]["car_year"]);
     
      
 
  }
  
  return arr;
  
  }


  module.exports.problem5 = problem5;