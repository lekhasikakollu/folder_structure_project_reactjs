let express = require('express');
let bodyParser = require("body-parser");
let cookieParser = require('cookie-parser');
let session = require('express-session');
let cookieSession = require('cookie-session');


let fs = require('fs');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static('public'));

app.post('/updateStatus', function (request, response) {
    console.log('updating completion status in the json file :');
    var theStatus = request.body.status;
    var excId = request.body.excId;
    console.log('excid from actions' + excId)
    fs.readFile(__dirname + "/data/exercises/exercise" + excId + ".json", 'utf-8', function (err, data) {
        let fileData = JSON.parse(data);
        fileData.exercise.isCompleted = theStatus.toString();
        let stringFile = JSON.stringify(fileData);
        console.log('printing the new file data : ' + stringFile);
        console.log('prinitng the excercise id : ' + request.body.excId);
        fs.writeFile(__dirname + "/data/exercises/exercise" + excId + ".json", stringFile);
        response.send(true);
    });


});

app.get('/getExercise', function (req, res) {
    var excId = req.query.id;
    var isCompleted = "false";
    console.log('from getExcercise : ' + __dirname + "/data/exercises/exercise" + excId + ".json");
    
    fs.readFile(__dirname + "/data/usersProgress.json","utf-8",function(err,data){
        let usersData = JSON.stringify(data);
        console.log('sess uid'+req.session.uid)

      
        console.log('getExcercise : status os completion : '+isCompleted);
    });
    res.sendFile(__dirname + "/data/exercises/exercise" + excId + ".json")
});

app.get('/getChapters', function (req, res) {
    res.sendFile(__dirname + "/data/folders/folders.json")
});

app.get('/getExerciseList', function (req, res) {
    var chId = req.query.id;
    // var resultString='lekha';
    console.log('from get method : getExerciseList ' + chId);
    fs.readFile(__dirname + "/data/folders/folders.json", 'utf-8', function (err, data) {
        console.log('getExerciseList : file data' + data);
        var fileJsonData = JSON.parse(data);
        var foundData = {};
        for (var i = 0; i < fileJsonData.chapters.length; i++) {
            if (fileJsonData.chapters[i].id == chId) {
                foundData = fileJsonData.chapters[i];

                break;
            }
        }
        var stringFile = JSON.stringify(foundData);
        console.log('sending this as response : ' + stringFile);
        res.send(stringFile);
    });


});



let server = app.listen(3001, function () {
    console.log('Server is starting on port 3001');
});
