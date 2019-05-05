function jump(clickTitle) {
    $.cookie('clickTitle', clickTitle);
    let s = './patient/article.html';
    JumpPage(s);
}

function item(clickTitle) {
    $('.xwImg'+clickTitle).click(() => {
        jump(clickTitle);
    });
    $('.wzTitle'+clickTitle).click(() => {
        jump(clickTitle);
    });
    $('.xzContent'+clickTitle).click(() => {
        jump(clickTitle)
    })
}

$(function () {
    $.ajax({
        url: constURL + "news/show",
        success: function (result) {
            if (parseInt(result.code) === 0) {
                console.log(result.content[0]);
                $('.loadingTitle').remove();
                for (let i = 0; i < 10; i++){
                    $('.loadingC'+i).remove();
                }
                for (let i = 0; i < 3; i++) {
                    let wzt = $('.wzTitle'+i);
                    let wzc = $('.xzContent'+i);
                    wzc.text(result.content[i].content);
                    wzt.text(result.content[i].title);
                    $('.xwImg' + i).css("background-image", `url(${result.content[i].img})`);
                    $.cookie('wzTitle'+i, result.content[i].title);
                    $.cookie('xzContent'+i, result.content[i].content);
                    $.cookie('xwImg'+i, result.content[i].img);
                }
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    item(0);
    item(1);
    item(2);
});
