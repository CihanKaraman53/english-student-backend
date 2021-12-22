const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const ColorStore = require("./models/ColorModel");
const FlipcardStore = require("./models/FlipCardModel");

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Cihan:1903Cihan1903@cluster0.y3pru.mongodb.net/colors?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(console.log("connected to Database"))
  .catch((err) => console.log(err));

app.get("/Color", (req, res) => {
  ColorStore.find().then((Color) => res.json(Color));
});

app.post("/newcolor", async (req, res) => {
  try {
    const newColor = new ColorStore({
      position: req.body.position,
      title: req.body.title,
      backgroundColor: req.body.backgroundColor,
      tamam: req.body.tamam,
      answer: req.body.answer,
      id: req.body.id,
    });

    const color = await newColor.save();
    res.status(200).json(color);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  ColorStore.findByIdAndDelete({ _id: id }, (err) => {
    if (!err) {
      console.log("book deleted");
    } else {
      console.log(err);
    }
  });
});

app.get("/flipcard", (req, res) => {
  FlipcardStore.find().then((Flipcard) => res.json(Flipcard));
});

app.post("/newflipcard", async (req, res) => {
  try {
    const newFlipcard = new FlipcardStore({
      tr: req.body.tr,
      eng: req.body.eng,
      example: req.body.example,
    });

    const flipCard = await newFlipcard.save();
    res.status(200).json(flipCard);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/flipDelete/:id",  (req, res) => {
  const id = req.params.id;

   FlipcardStore.findByIdAndDelete({ _id: id }, (err) => {
    if (!err) {
      console.log("flipcard delete");
    } else {
      console.log(err);
    }
  });
});

app.listen(5000, () => {
  console.log("Ernasto ciho");
});
