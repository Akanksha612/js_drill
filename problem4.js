module.exports.problem4= function (inventory)
  {
  
  
  var arr = new Array();
  
  for(var i=0;i<inventory.length;i++)
  {
     
     arr.push(inventory[i]["car_year"]);
     
      
 
  }
  
  return arr;
  
  }
