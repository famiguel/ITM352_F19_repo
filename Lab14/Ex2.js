fs = require('fs');
 
var filename = 'user_data.json';
 
//check to see if file exists. if exists, do the if statement
if (fs.existsSync(filename)){
 
data = fs.readFileSync(filename, 'utf-8');
 
 
users_reg_data = JSON.parse(data);
 
console.log(users_reg_data['itm352'].password);
}
 
//if file does not exist, output message
else {
   console.log(filename + ' does not exist.');
}
