import $ from "jquery";
import "./app1.css"

let num;

$(".add").on('click',()=>{
    num= $(".content").text();
    num++
    $(".content").text(num);
})
$(".reduce").on('click',()=>{
    num= $(".content").text();
    num--
    $(".content").text(num);
})
$(".multiply").on('click',()=>{
    num= $(".content").text();
    num*=2
    $(".content").text(num);
})
$(".divide").on('click',()=>{
    num= $(".content").text();
    num/=2
    $(".content").text(num);
})

