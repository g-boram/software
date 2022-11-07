var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');
const saltRounds = 10;

let jwt = require("jsonwebtoken");
let secretObj = require("../ignorefile/jwt");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res, next) => {
    var type = req.query.type;
  
      
    if(type == "signin"){
      //로그인 조회
      try {
        // Mysql Api 모듈(CRUD)
        var dbconnect_Module = require('./dbconnect_Module');
    
        //Mysql 쿼리 호출정보 입력
        req.body.mapper = 'ManagerMapper';//mybatis xml 파일명
        req.body.crud = 'select';//select, insert, update, delete 중에 입력
        req.body.mapper_id = 'selectManagerLoginCheck';
    
        router.use('/', dbconnect_Module);
        next('route')

        return Boolean=false 
        
      } catch (error) {
        console.log("Module > dbconnect error : "+ error);      
      }
    }else if(type == "SessionState"){
      var userid = req.body.is_Email
      var name = req.body.is_UserName
      try {
        let token1 = jwt.sign(
        { email: userid },
        secretObj.secret,
        { expiresIn: '60m' })
       
        let token2 = jwt.sign(
        { username: name },
        secretObj.secret,
        { expiresIn: '60m' })
        res.send({"token1":token1, "token2":token2});
      } catch (error) {
        res.send(error)
      }
    }else if(type == "SessionConfirm"){
      try {
        let token1 = req.body.token1;
        let token2 = req.body.token2;
        
        if(token1 != undefined && token1 != '' & token2 != undefined && token2 != ''){
          let decoded1 = jwt.verify(token1, secretObj.secret);
          let decoded2 = jwt.verify(token2, secretObj.secret);
          res.send({"token1":decoded1.email, "token2":decoded2.username});
        }else{
          res.send({"token1":"", "token2":""});
        }
      } catch (error) {
        res.send(error)
      }
    }else if(type == "SessionSignin"){
      // 쿠키 정보로 사용자 인증 
      try {
        // Mysql Api 모듈(CRUD)
        var dbconnect_Module = require('./dbconnect_Module');
        //Mysql 쿼리 호출정보 입력
        req.body.mapper = 'UserMapper';//mybatis xml 파일명
        req.body.crud = 'select';//select, insert, update, delete 중에 입력
        req.body.mapper_id = 'selectSessionLoginCheck';
    
        router.use('/', dbconnect_Module);
        next('route')
        
      } catch (error) {
        console.log("Module > dbconnect error : "+ error);      
      }
    
    }
  });
  
  module.exports = router;