import $ from 'jquery'
import './app2.css'

let $tabContent=$('.tab-content');
let $tabBar = $('.tab-bar');

$tabBar.on('click','li',(e)=>{
    let $li=$(e.currentTarget);
    let index=$li.index();
    $li.addClass('current').siblings().removeClass('current')
    $tabContent.children().eq(index).addClass('show').siblings().removeClass('show')
})
$tabBar.children().eq(0).trigger('click')