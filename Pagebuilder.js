 const fs = require('fs');
 for (var i = 0; i < 10; i++){ 
    let page = `<html>
    <head>
        <title> #${i}</title>
        
    </head>
    <body>
       this page is ${i}
    </body>
    </html>`;

    fs.writeFile('./files/'+i+'.html',page, function(err,data){
       if (err) throw err;
       console.log('File is created successfully.');
    })

 }
