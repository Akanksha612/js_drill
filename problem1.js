 
 
 
  
  function problem1(inventory,id)
  {
  
  
  for(var i=0;i<inventory.length;i++)
  {
  
  if(inventory[i]["id"]==id)
  {
  return inventory[i];
  }

  
  }
  
  }


  module.exports.problem1 = problem1;