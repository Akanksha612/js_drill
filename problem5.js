module.exports.problem5= function (inventory)
  {
  
  
  var arr = new Array();
  
  for(var i=0;i<inventory.length;i++)
  {
     if(inventory[i]["car_year"]<2000)
     arr.push(inventory[i]["car_year"]);
     
      
 
  }
  
  return arr;
  
  }
