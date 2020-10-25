import $ from "jquery"
import './app4.css'
let $circle=$(".circle")
$circle.on('click',()=>{
    $circle.toggleClass('active')
})