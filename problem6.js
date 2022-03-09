module.exports.problem6= function (inventory)
  {
  
  
  var arr = new Array();
  
  for(var i=0;i<inventory.length;i++)
  {
     
     if(inventory[i]["car_make"]==="BMW" || inventory[i]["car_make"]=="Audi")
     
     arr.push(inventory[i]);
     
      
 
  }
  
  return arr;
  
  }
