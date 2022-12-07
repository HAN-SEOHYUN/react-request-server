const express = require('express');
const app = express();
const cors = require('cors');
const testRoute = require('./router/test');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(testRoute);
app.use('/api/v1',testRoute);

let id = 2;
const jjigae = [{
  id : 1,
  jjigaeName : '김치찌개',
  description : '주의: 우리집 김치로 만들어야 맛있음',
},
];

app.get('/api/jjigae',(req, res)=>{
  res.json(jjigae);
});

app.post('/api/jjigae',(req,res)=>{
  const {jjigaeName , description} = req.body; //body-parser를 통해 데이터를 꺼내옴
    jjigae.push({
      id : id ++,
      jjigaeName,
      description,
    });
    return res.send('success'); 
});

app.listen(4000, ()=> {
    console.log('Listening on port 4000');
});
