


$(function(){
    /**
     * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
     *
     * @version 1.0.0
     * @since 2022-01-16
     * @author 본인이름 (Nico)
     * 셀렉트박스 링크이동
     */

    $('#btnLang').click(function(){
        link = $('#selectLang').val();
        // selectLang의 vaule값을 불러옴


        // console.log(link);
        window.open(link);

    })




    //5주차 스크립트적용
    $('.chk-wrap label').click(function(){
        $(this).toggleClass('active');
    })
    

    $('.chk-wrap .btn-close').click(function(){
        $('.ad-box').hide();
    })
})