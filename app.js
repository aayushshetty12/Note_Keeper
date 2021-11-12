const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let itemslist = ['Egg', 'Bread', 'Chicken', 'Apple'];
let newItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));
app.get('/', function(req, res) {
  let today = new Date();
  //let currday = today.getDay();
  // let day = '';
  //
  // switch (currday) {
  //   case 0:
  //     day = 'Monday';
  //     break;
  //   case 1:
  //     day = 'Tuesday';
  //     break;
  //   case 2:
  //     day = 'Wednesday';
  //     break;
  //   case 3:
  //     day = 'Thursday';
  //     break;
  //   case 4:
  //     day = 'Friday';
  //     break;
  //   case 5:
  //     day = 'Saturday';
  //     break;
  //   case 6:
  //     day = 'Sunday';
  //     break;
  //
  //   default:
  //   console.log('Error'+currday);
  //
  // }

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  let day = today.toLocaleDateString('en-US', options);
  res.render('list', {
    listTitle: day,
    newitems: itemslist
  });

});

app.post("/", function(req, res) {
  let item = req.body.item;
  if (req.body.list === 'Work') {
    newItems.push(item);
    console.log(req.body);
    res.redirect('/work');
  } else {
      itemslist.push(item);
      res.redirect('/');
  }

});

app.get('/work',function(req,res){
  res.render('list',{listTitle:'Work',newitems:newItems})
});

app.get('/about',function(req,res){
  res.render('about');
})
app.listen(3000, function() {
  console.log('seffr');
});
