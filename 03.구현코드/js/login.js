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
/******************************************* 
                [ 로그인 성공후 어떤일이 일어나나? ]

                1. 로그인인 성공하면 서버에 사용자로그인 정보를
                기록한다. 이것이 세션이라고 불리우는 서버 메모리공간이다!

                2. 이 세션에 변수를 할당하여 필요한 사용자 정보를
                로그인 시간동안 유지하여 사용한다!
                -> 이것을 세션변수라고 함!
                -> 이것때문에 로그인 상태가 유지되어 시스템을 
                    편리하게 이용할 수 있다!

                3. 세션의 기본 유지설정시간은 20분이다.
                만약 20분동안 세션의 갱신이 없으면(웹요청이 없으면)
                이를 만료처리하여 세션을 지운다!(자동로그아웃!)

            *******************************************/