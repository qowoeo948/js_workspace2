 /*--------------------------------------
 두수 a,b에 대한 절대값을 반환하는 함수
 ----------------------------------------*/
function getAbs(a,b){
return  Math.abs(a-b); //함수를 호출한 실행부가 결과를 가지고
                                            //호출한 곳으로 되돌아간다.
}


/*-----------------------------------
랜덤 구하는 함수 
    n을 넣으면, 0~n까지 포함하여, 랜덤한 수를 반환하는 함수
---------------------------------------*/
function getRandom(n){
   var r = Math.random();
   //1보다 작은 실수 0.0xxxxx ~ 0.9xxxxxxx
   
   return Math.floor((n+1) * r);   //소수점을 버림,parseint도 된댕
    
}

/*------------------------------------------
랜덤 구하는 함수 II
ex) 7과 23사이의 랜덤값을 반환
a: 7 (최소값)
b: 23 (최대값)
-------------------------------------------*/
function getRandomBetween(min,max){

   // return Math.floor(Math.random()*(max-min+1))+min;
    return getRandom(max-min)+min;

}



/*----------------------------------
숫자에 0을 붙인 날짜처리
매개변수, 즉 인수로 수를 전달하면,
함수내에서 알아서 0을 붙여줌
(두자리 한자리 판단마져도 여기에서 알아서 해줌)
-----------------------------------*/
function getZeroDate(n){
    if(n<10){
        //n이 10보다 작으면 0을 접두어로 붙이자
        n = "0"+n;
    }
    return n;
}

/*-----------------------------------------------
아래의 함수는, 두 물체간 충돌여부를 판단해주는 함수이다.
box1 : 판단 대상 요소1 ex) div , img , span....
box2 : 판단 대상 요소2 ex) div
-----------------------------------------------*/
function collisionCheck(box1, box2) {
    //두물체간 충돌 여부 판단 
    var x1=parseInt(box1.style.left);
    var width1=parseInt(box1.style.width);
    var y1=parseInt(box1.style.top);
    var height1=parseInt(box1.style.height);
    
    var x2=parseInt(box2.style.left);
    var width2=parseInt(box2.style.width);
    var y2=parseInt(box2.style.top);
    var height2=parseInt(box2.style.height);


    /*
    조건1)x축 충돌: me의 x축+width1를 더한값은 target의 x2축 이상일 경우
    조건2)y축 충돌: me의 y축+height1를 더한 값이  target의 y2축 이상일 경우
    조건3)me의  y1값은 target의  y2에 height2를 더한값보다 같거나 작아야 함
    조건4)me의  x1값은 target의  x2에 width2를 더한값보다 같거나 작아야 함
    */
    var result = (x1+width1 >= parseInt(box2.style.left))
    && (y1+height1)>=parseInt(box2.style.top) 
    && y1 <=(y2+height2) 
    && x1 <=(x2+width2)  

   return result;
}


/*---------------------------------------------------
    해당월의 총 일수 구하기: 즉 마지막날 구하기
    //mm (달:구하고 싶은 월을 의미)을 넘기면 마지막날을 구해서 넘겨준다.
    주의) 자바스크립트에서 월은 0부터 시작하므로
        만약 10월을 구하려면 9를 넘겨야한다.
------------------------------------------------------*/
function getTotalDate(yy,mm){
    var d = new Date(); //현재 날짜이므로, 조작이 가해져야 한다.
    d.setFullYear(yy);
    d.setMonth(mm+1); //일단 다음달로 넘어간다.. 
                                    //왜? 0을 대입하여 이전달의 마지막일을 구하려고
    d.setDate(0);//다시 이전달로 넘어오면서 마지막날로 이동
   
    return d.getDate(); //마지막날을 반환!!


}