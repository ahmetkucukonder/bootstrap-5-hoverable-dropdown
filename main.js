    if (window.innerWidth > 992) {

            let check = $('.dropdown-menu').attr('data-bs-popper');
            $('#button').hover(function () {
                checkShow();
            });

            $('.dropdown-menu').on("mouseleave", function () {
                checkShow();
            });

            function checkShow() {
                if (check == 'none') {
                    $('#button').removeClass('show');
                    $('.dropdown-menu').removeClass('show');
                    $('.dropdown-menu').removeAttr('data-bs-popper');
                } else {
                    $('#button').addClass('show');
                    $('.dropdown-menu').addClass('show');
                    $('.dropdown-menu').attr('data-bs-popper', 'none');
                }
                check = $('.dropdown-menu').attr('data-bs-popper');
            }

    }
