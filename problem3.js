module.exports.problem3= function (inventory)
  {
  
  
  var arr = new Array();
  
  for(var i=0;i<inventory.length;i++)
  {
     
     arr.push(inventory[i]["car_model"]);
     
      
 
  }
  
  return arr.sort();
  
  }
