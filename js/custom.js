$(function () {
  let total = $(".panel li").length;
  console.log(total);
  //.panel li total 선언 = 4

  let i = 0;
  let stop; //전역변수는 함수를 호출하기 전에 입력
  start();
  //(함수명)호출

  function fade() {
    $(".panel li").fadeOut();
    $(".panel li").eq(i).fadeIn();
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
  }
  //   fade함수

  //함수로 function start (){setInterval 함수로 만든다}

  function start() {
    stop = setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i++;
      }
      // (i = 4 - 1 = 3 이될때 i는 0으로 돌아간다)
      //i는 +1을 한다
      $(".panel li").fadeOut();
      //패널 li 모두안보이게하기
      $(".panel li").eq(i).fadeIn();
      //패널 li 1첫째 이미지 보이게하기
      $(".navi li").removeClass("on");
      //.navi li의 on클래스 다지우기
      $(".navi li").eq(i).addClass("on");
      //.navi li의 첫번째 순서대고 on보이기
    }, 2000);
  }
  //오른쪽버튼
  $(".next").on("click", function () {
    clearInterval(stop);
    // 클릭하면 멈추면서 옆으로 넘긴다 오른쪽버튼
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    fade();

    start();
  });
  //   왼쪽버튼
  $(".prev").on("click", function () {
    clearInterval(stop);
    //클릭하면 멈추면서 옆으로 넘긴다 왼쪽버튼
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }
    fade();
    start();
  });
  //   .버튼을누르면 페이지이동
  $(".navi li").on("click", function () {
    clearInterval(stop);
    i = $(this).index(); //누르면 순서 보기
    fade();
    start();
  });
});
