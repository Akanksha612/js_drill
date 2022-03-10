 
 
 
  
  module.exports.problem1= function (inventory,id)
  {
  
  
  for(var i=0;i<inventory.length;i++)
  {
  
  if(inventory[i]["id"]==id)
  {
  return inventory[i];
  }

  
  }
  
  }
