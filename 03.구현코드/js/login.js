// 테스트 JS
console.log("%c　👩\n  👗\n","font-size:100px;text-align:center")
console.log("%cd","font-size:100px;background-image:linear-gradient(to bottom,blue,blue 50%,yellow 51%,yellow);padding-left:100px;padding-right:100px;line-height:1.5;color:transparent",'pray for Ukraine')
// console.log("%c●","font-size:130px;color:red;padding-left:100px;padding-right:100px;border:1px solid black;line-height:1.5;")
import aespa from './com.js'
import stayc from './dom.js'
import cdt1 from './ctgr.json' assert{type:'json'}
// 부드러운 스크롤 모듈
import  {startSS, setpos } from "./smoothScroll23.js";
// 부드러운 스크롤 적용 //////////
startSS();
const top=stayc.qs('.toparea')
top.innerHTML=aespa.toparea
const foot=stayc.qs('.footarea')
foot.innerHTML=aespa.footarea
top.innerHTML+=aespa.mobtn
top.parentElement.innerHTML+=aespa.mobx
$('.hbtn').click(()=>{$('#mobx').slideToggle(300)})
$('.sbtn').click(()=>{$('.mos').slideToggle(300)})
$('#sbtn').click(function (a) {
    a.preventDefault()
    const spcs=a=>a.replace(/\s/g,'')
    if (spcs($('#mid').val())=='') {
        alert('입력해라!!!')
        $('#mid').val('').focus()
        $('#mpw').val('')
    }else{
        $.post('process/loginSet.php',{
            'mid':$('#mid').val(),
            'mpw':$('#mpw').val()
        },function (a) {
            if (a=='ok') {
                alert('로그인 성공😆')
                location.replace('index.php')
            }
            else if (a=='again') {
                alert('패스워드를 까먹었냐!!!')
                $('#mpw').val('').focus()
            }
            else if (a=='no') {
                alert('아이디 까먹었냐!!!')
                $('#mid').val('').focus()
                $('#mpw').val('')
            }
        })
    }
})