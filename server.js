var express = require('express'),
  path = require('path'),
  bp = require('body-parser'),
  root = __dirname,
  port = require(path.join(__dirname, "./server/config/settings.js")).port,
  app = express();



app.use(express.static(path.join(root,'client')));
app.use(express.static(path.join(root,'bower_components')));
app.use(bp.json());

require(path.join(root,'./server/config/mongoose.js'));
require(path.join(root,'./server/config/routes.js'))(app);

app.listen(port,function(){
  console.log(`server running on port ${port}`);
});
