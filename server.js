var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 3000;
    app.get('/', function (req, res) {
      res.render('index');
    });
    app.post('/send-email', function (req, res) {
    //   let transporter = nodeMailer.createTransport({
    //       host: 'smtp.gmail.com',
    //       port: 465,
    //       secure: true,
    //       auth: {
    //           user: 'subhasundar664@gmail.com',
    //           pass: 'almighty@@'
    //       }
    //   });
    var smtpTransport = nodeMailer.createTransport({
    host: 'webmail.kgfsl.com',
    // port: 25,
    auth: {
        user: 'baraneetharan.ramasamy@kgfsl.com',
        pass: 'Barani@1234'
    }
});
      let mailOptions = {
          from: 'baraneetharan.ramasamy@kgfsl.com', // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
          html: '<b>NodeJS Email Tutorial</b>' // html body
      };

      smtpTransport.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });
