$('#all').css('color', '#fff');
if ($(window).height() <= 568) {
    $('.dashed1 .rightLi2 .ysTitle .keSi').css('color', '1px');
}
window.onresize = function () {
    $(window).width();
    if (document.body.clientWidth <= 320) {
        $('.keSi').css('font-size', '10px');
    }
    if (document.body.clientWidth > 320) {
        $('.keSi').css('font-size', '15px');
    }
};

function showItem(num) {
    $('.dashed' + num).remove();
    $.post(constURL + "doctor/lists",
        {
            departmentID: num
        },
        function (data, status) {
            console.log(data);
            if (status === 'success') {
                console.log(data.content.list[0]);
                for (let i = 0; i < data.content.list.length; i++) {
                    let dom = `
                    <div class="dashed1">
                        <ul class="ui-list ui-list-nospace ui-border-tb rightList">
                            <li class="rightLi1">
                                <div class="ui-list-img-square imgLift">
                                    <span style="background-image:url(${data.content.list[i].headimg})"></span>
                                </div>
                            </li>
                            <li class="ui-border-t rightLi2">
                                <div class="ui-list-info">
                                    <div class="ysTitle">
                                        <h4 class="ysName">${data.content.list[i].name}</h4>
                                        <div class="keSi" align="right">${data.content.list[i].title} | ${data.content.list[i].department}</div>
                                    </div>
                                    <p class="depict">${data.content.list[i].description}</p>
                                    <div class="advisory">咨询量:${data.content.list[i].receptionCount}</div>
                                    <div class="ziXunO">
                                        <div class="ziXun">
                                            <img src="../public/img/zixun.png" alt="">
                                            <div class="ziXunT">在线咨询(3元/次)</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>`;
                    $('body').append(dom);

                }
            }
        });

}

function extracted($1) {
    $1.css('background-color', '#fff');
    $1.css('color', '#000')
}

function extracted2($1) {
    $1.css('color', '#fff');
    $1.css('background-color', '#5ad67e');
}

function JumpConsultation() {
    JumpPage(`../patient/consultation.htm`)
}

function JumpDoctorBrief(id) {
    let num = id;
    JumpPage(`../doctor/doctorBrief.html?id=${num}`)
}

$(document).ready(function () {
    for (let i = 0; i < 4; i++) {
        $.post(constURL + "doctor/lists",
            {
                departmentID: `${i}`
            },
            function (data, status) {
                console.log(data);
                if (status === 'success') {
                    console.log(data.content.list[0]);
                    for (let i = 0; i < data.content.list.length; i++) {
                        let dom = `
                    <div class="dashed1">
                        <ul class="ui-list ui-list-nospace ui-border-tb rightList">
                            <li class="rightLi1">
                                <div class="ui-list-img-square imgLift" onclick="JumpDoctorBrief(${data.content.list[i].id});">
                                    <span style="background-image:url(${data.content.list[i].headimg})"></span>
                                </div>
                            </li>
                            <li class="ui-border-t rightLi2">
                                <div class="ui-list-info">
                                    <div class="ysTitle">
                                        <h4 class="ysName" onclick="JumpDoctorBrief(${data.content.list[i].id});">${data.content.list[i].name}</h4>
                                        <div class="keSi" align="right">${data.content.list[i].title} | ${data.content.list[i].department}</div>
                                    </div>
                                    <p class="depict">${data.content.list[i].description}</p>
                                    <div class="advisory">咨询量:${data.content.list[i].receptionCount}</div>
                                    <div class="ziXunO">
                                        <div class="ziXun">
                                            <img src="../public/img/zixun.png" alt="">
                                            <div class="ziXunT" onclick="JumpConsultation()">在线咨询(3元/次)</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="id" style="visibility:hidden; height: 0; width: 0">${data.content.list[i].id}</div>
                            </li>
                        </ul>
                    </div>`;
                        $('body').append(dom);
                    }
                }
            });
    }
    ;
    let currentNum = -1;
    $(".department0").click(function () {
        $('#all').css('color', '#000');
        for (let i = -1; i < 5; i++) {
            console.log(i);
            let $1 = $('.department' + i);
            if (i !== 0) {
                extracted($1);
            } else {
                extracted2($1);
            }
        }
        currentNum = 0;
        showItem(0);
    });
    $(".department1").click(function () {
        $('#all').css('color', '#000');
        for (let i = -1; i < 5; i++) {
            let $1 = $('.department' + i);
            if (i !== 1) {
                extracted($1);
            } else {
                extracted2($1);
            }
        }
        currentNum = 1;
        showItem(1);
    });
    $(".department2").click(function () {
        $('#all').css('color', '#000');
        for (let i = -1; i < 5; i++) {
            let $1 = $('.department' + i);
            if (i !== 2) {
                extracted($1);
            } else {
                extracted2($1);
            }
        }
        currentNum = 2;
        showItem(2);
    });
    $(".department3").click(function () {
        $('#all').css('color', '#000');
        for (let i = -1; i < 5; i++) {
            let $1 = $('.department' + i);
            if (i !== 3) {
                extracted($1);
            } else {
                extracted2($1);
            }
        }
        currentNum = 3;
        showItem(3);
    });
    $(".department4").click(function () {
        $('#all').css('color', '#000');
        for (let i = -1; i < 5; i++) {
            let $1 = $('.department' + i);
            if (i !== 4) {
                extracted($1);
            } else {
                extracted2($1);
            }
        }
        currentNum = 4;
        showItem(4);
    });
    $(".department-1").click(function () {
        $('#all').css('color', '#fff');
        for (let i = -1; i < 5; i++) {
            let $1 = $('.department' + i);
            if (i !== -1) {
                extracted($1);
            } else {
                extracted2($1);
            }
        }
        currentNum = -1;
        showItem(-1);
    });

    //搜索栏监听输入
    let $searchYs = $(".searchYs");
    $searchYs.bind("input propertychange", function (event) {
        let searchVal = $(".searchYs").val();
    });
    //搜索栏获得焦点
    $searchYs.focus(function () {
        console.log('获得焦点');
    });
    //搜索栏失去焦点
    $searchYs.blur(function () {
        console.log('失去焦点');
        $('.searchLenovo').css('height', '0');
    });
    //搜索栏回车
    $searchYs.keydown(function (e) {
        let searchVal = $(".searchYs").val();
        if (e.keyCode === 13) {
            $.post(constURL + "doctor/searcheLike",
                {
                    material: searchVal
                },
                function (data, status) {
                    console.log(data);
                    if (status === 'success') {
                        console.log('ojbk');
                        console.log(data);
                        console.log(data.content.list[0]);
                        for (let i = 0; i < data.content.list.length; i++) {
                            console.log(currentNum);
                            $('.dashed1').remove();
                            for (let i = 0; i < data.content.list.length; i++) {
                                let dom = `
                            <div class="dashed1">
                                <ul class="ui-list ui-list-nospace ui-border-tb rightList">
                                    <li class="rightLi1">
                                        <div class="ui-list-img-square imgLift">
                                            <span style="background-image:url(${data.content.list[i].headimg})"></span>
                                        </div>
                                    </li>
                                    <li class="ui-border-t rightLi2">
                                        <div class="ui-list-info">
                                            <div class="ysTitle">
                                                <h4 class="ysName">${data.content.list[i].name}</h4>
                                                <div class="keSi" align="right">${data.content.list[i].title} | ${data.content.list[i].department}</div>
                                            </div>
                                            <p class="depict">${data.content.list[i].description}</p>
                                            <div class="advisory">咨询量:${data.content.list[i].receptionCount}</div>
                                            <div class="ziXunO">
                                                <div class="ziXun">
                                                    <img src="../public/img/zixun.png" alt="">
                                                    <div class="ziXunT">在线咨询(3元/次)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>`;
                                $('body').append(dom);
                            }
                        }
                    }
                });
        }
    });
    //搜索栏
    $('.ui-searchbar').tap(function () {
        $('.ui-searchbar-wrap').addClass('focus');
        $('.ui-searchbar-input input').focus();
    });
    $('.ui-searchbar-cancel').tap(function () {
        $('.ui-searchbar-wrap').removeClass('focus');
    });
    $('.ui-icon-close').click(function () {
        $('.searchYs').val('')
    });

})(document, window);
$(function () {

});
