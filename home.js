jQuery(function(){

    //ハンバーガーメニュー
        $(".nav-toggle").click(function(){
            $(this).toggleClass("open");
            $(".wrapper nav").toggleClass("open");
        });

    //ふわっと表示
    AOS.init({
        duration: 1200,
        once: true
    });

    //アコーディオンメニュー
        $('.question-content h3').click(function(){
            $(this).next('.question-content p').slideToggle();
            
            $('.question-content h3').not($(this)).next('.question-content p').slideUp();
        });
    
    //スライドショー
    const swiper = new Swiper(".swiper", {
        loop: true,
        effect: "slide", 
        // spaceBetween: 56,
        slidesPerView: 1.5,
        centeredSlides: true,
        touchEventsTarget: true,
        autoplay: {
            delay: 5000,
        },

        breakpoints: {
            650: {
                slidesPerView: 2,
            },
            960: {
                slidesPerView: 2.5,
            },
            1100: {
                slidesPerView: 3.5,
            },
            1300: {
                slidesPerView: 4,
            },
        },
    });
    

    //フォーム入力されたら送信
        //始めにjQueryで送信ボタンを無効化する
        $('form button').prop("disabled", true);
        
        //入力欄の操作時
        $('form input:required, form textarea:required').change(function () {
            //必須項目が空かどうかフラグ
            let flag = true;
            //必須項目をひとつずつチェック
            $('form input:required, form textarea:required').each(function(e) {
                //もし必須項目が空なら
                if ($('form input:required, form textarea:required').eq(e).val() === "") {
                    flag = false;
                }
            });
            //全て埋まっていたら
            if (flag) {
                //送信ボタンを復活
                $('form button').prop("disabled", false);
            }
            else {
                //送信ボタンを閉じる
                $('form button').prop("disabled", true);
            }
        });

});