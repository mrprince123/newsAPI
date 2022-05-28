const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/Public'));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function (req, res) {


    const appid = "8702fb193146bce505ecbc1d677be46f";
    const source = req.body.source;
    const url = "http://api.mediastack.com/v1/news?access_key=" + appid + "&sources=" + source;
    http.get(url, function (response) {
        console.log(response);

        const datas = [];
        response.on("data", function (data) {
            datas.push(data);
        });

        response.on('end', function () {
            const data = Buffer.concat(datas);
            var got = JSON.parse(data);

            console.log(got);

            // This is for one data 
            const title = got.data[0].title;
            const description = got.data[0].description;
            const img = got.data[0].image;

            // This is for Second data
            const title2 = got.data[1].title;
            const description2 = got.data[1].description;
            const img2 = got.data[1].image;

            // This is for third data
            const title3 = got.data[2].title;
            const description3 = got.data[2].description;
            const img3 = got.data[2].image;


            // This is for fourth data
            const title4 = got.data[3].title;
            const description4 = got.data[3].description;
            const img4 = got.data[3].image;


            // This is for fifth data
            const title5 = got.data[4].title;
            const description5 = got.data[4].description;
            const img5 = got.data[4].image;


            // This is for sixth data
            const title6 = got.data[5].title;
            const description6 = got.data[5].description;
            const img6 = got.data[5].image;

            // This is for Seven data
            const title7 = got.data[6].title;
            const description7 = got.data[6].description;
            const img7 = got.data[6].image;

            // This is for Eigth data
            const title8 = got.data[7].title;
            const description8 = got.data[7].description;
            const img8 = got.data[7].image;


            // This is for Nine data
            const title9 = got.data[8].title;
            const description9 = got.data[8].description;
            const img9 = got.data[8].image;


            // This is for ten data
            const title10 = got.data[9].title;
            const description10 = got.data[9].description;
            const img10 = got.data[9].image;

            res.write("<h1>Title : " + title + "</h1>");
            res.write("<h3>Description : " + description) + "</h3>";
            res.write("<img src=" + img + ">");

            res.write("<h1>Title : " + title2 + "</h1>");
            res.write("<h3>Description : " + description2 + "</h3>");
            res.write("<img src=" + img2 + ">");

            res.write("<h1>Title : " + title3 + "</h1>");
            res.write("<h3>Description : " + description3 + "</h3>");
            res.write("<img src=" + img3 + ">");

            res.write("<h1>Title : " + title4 + "</h1>");
            res.write("<h3>Description : " + description4 + "</h3>");
            res.write("<img src=" + img4 + ">");

            res.write("<h1>Title : " + title5 + "</h1>");
            res.write("<h3>Description : " + description5 + "</h3>");
            res.write("<img src=" + img5 + ">");

            res.write("<h1>Title : " + title6 + "</h1>");
            res.write("<h3>Description : " + description6 + "</h3>");
            res.write("<img src=" + img6 + ">");

            res.write("<h1>Title : " + title7 + "</h1>");
            res.write("<h3>Description : " + description7 + "</h3>");
            res.write("<img src=" + img7 + ">");

            res.write("<h1>Title : " + title8 + "</h1>");
            res.write("<h3>Description : " + description8 + "</h3>");
            res.write("<img src=" + img8 + ">");

            res.write("<h1>Title : " + title9 + "</h1>");
            res.write("<h3>Description : " + description9 + "</h3>");
            res.write("<img src=" + img9 + ">");

            res.write("<h1>Title : " + title10 + "</h1>");
            res.write("<h3>Description : " + description10 + "</h3>");
            res.write("<img src=" + img10 + ">");
            res.send();

        });
    });

});


app.listen(3000, function () {
    console.log("Server is running");
});