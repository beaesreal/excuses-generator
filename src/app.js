/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "My", "The", "One"];
  let subject = [
    "cat",
    "dog",
    "runner",
    "bunny",
    "driver",
    "clown",
    "grandpa",
    "fish",
    "grandma"
  ];
  let action = [
    "took my",
    "threw my",
    "yelled at my",
    "stole my",
    "bite my",
    "broke my"
  ];
  let possetion = [
    "homework",
    "toe",
    "car",
    "shoe",
    "clock",
    "wallet",
    "finger",
    "contract",
    "trousers"
  ];
  let where = [
    "on the street ๐คจ",
    "in my house ๐",
    "in my driveway ๐",
    "on the subway ๐ฅ",
    "on the office ๐",
    "to the trash ๐ฎ",
    "on the supermarket ๐ถโ๐ซ๏ธ"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
