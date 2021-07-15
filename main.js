$(document).ready(function () {
    if (window.innerWidth > 992) {
            let btn = $('#dropdown_button'); //Your Button's Class Name or ID
            let menu = $('.dropdown-menu'); //Your Dropdown Menu Class Name or ID
        
            let check = menu.attr('data-bs-popper');
            $(btn).hover(function () {
                checker();
            });

            menu.on("mouseleave", function () {
                checker();
            });

            function checker() {
                if (check == 'none') {
                    btn.removeClass('show active');
                    menu.removeClass('show');
                    menu.removeAttr('data-bs-popper');
                } else {
                    btn.addClass('show active');
                    menu.addClass('show');
                    menu.attr('data-bs-popper', 'none');
                }
                check = menu.attr('data-bs-popper');
            }

    }
});
