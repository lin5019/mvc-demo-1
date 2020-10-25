import $ from "jquery";
import "./app1.css"

let num;
const $content = $(".content")
const $add=$(".add");
const $reduce=$(".reduce")
const $multiply=$(".multiply")
const $divide=$(".divide")
num = localStorage.getItem('num')

$content.text(num || 200)


$add.on('click', () => {
    num = $content.text();
    num++
    $content.text(num);
    localStorage.setItem("num", num)
})
$reduce.on('click', () => {
    num = $content.text();
    num--
    $content.text(num);
    localStorage.setItem("num", num)
})
$multiply.on('click', () => {
    num = $content.text();
    num *= 2
    $content.text(num);
    localStorage.setItem("num", num)
})
$divide.on('click', () => {
    num = $content.text();
    num /= 2
    $content.text(num);
    localStorage.setItem("num", num)
})
