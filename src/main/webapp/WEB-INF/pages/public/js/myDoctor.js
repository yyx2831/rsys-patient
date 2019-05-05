function JumpConsultation2(id) {
    JumpPage(`../patient/consultation.htm`)
}
$(document).ready(function () {
    $.ajax({
        url: constURL + "doctor/list",
        success: function (result) {
            console.log(result);
            if (result.code === '0') {
                $('.loadingYs').remove();
                console.log(result.content.list[0].updateTime);
                console.log(result.content.list.length);
                $('html').css('background-color', '#F3F3F3');
                let date = new Date(result.content.list[0].updateTime);
                for (let i = 0; i < result.content.list.length; i++) {
                    $('ul').append(`
                     <li onclick="JumpConsultation2()">
                        <div class="ui-list-img-square">
                            <span style="background-image:url(${result.content.list[i].headimg})"></span>
                        </div>
                        <div class="ui-list-info ui-border-t ysTitleO">
                            <div class="ysTitle">
                                <div class="ui-nowrap ysName">${result.content.list[i].name.length === 3 ? result.content.list[i].name : result.content.list[i].name + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'}</div>  <div class="title">${result.content.list[i].title} | ${result.content.list[i].department}</div>    <div class="date">${date.getMonth()}月-${date.getDate()}日</div>
                            </div>
                            <p class="ui-nowrap sm">按照药品只用说明书用法用量即可</p>
                        </div>
                    </li>
            `)
                }
            }
        },
        error: function (err) {
            console.log(err);
            $('.loadingYs').remove();
            $('ul').append('<img src="../img/404.png" alt="" style="width: 100%">')
        }

    });
});
