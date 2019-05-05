let $chat = $('.chat-list');
($chat.children("li:last-child")[0]).scrollIntoView();

function newMsg(chatText) {
    $('#bottom').remove();
    $chat.append(
        `
                 <li class="chat-item right">
                    <img src="../public/img/avatar-2.jpg" class="chat-avatar"/>
                    <div class="bubble-item bubble-luffy">
                        <span class="chat-content">${chatText}</span>
                        <span class="cell cell-1"></span><span class="cell cell-2"></span>
                        <span class="cell cell-3"></span><span class="cell cell-4"></span>
                        <span class="cell cell-5"></span><span class="cell cell-6"></span>
                        <span class="cell cell-7"></span><span class="cell cell-8"></span>
                    </div>
                </li>
                `
    );
    $chat.append(
        `
                <li id="bottom" class="chat-item right">
                    <img src="../public/img/avatar-2.jpg" class="chat-avatar"/>
                    <div class="bubble-item bubble-luffy placeholder2">
                    </div>
                </li>
                `
    );
    ($chat.children("li:last-child")[0]).scrollIntoView();
}

$(function () {
    $('img').css('display', 'block');
    $('.color1').remove();
    $('#addData').remove();
    let flag = false;
    let chatText;
    $('#chat').on('input propertychange', function () {
        chatText = $('#chat').val();
    });
    $(".ui-btn").click(() => {
        newMsg(chatText);
    });
    $("input").keydown(function (e) {
        if (e.keyCode === 13) {
            newMsg(chatText);
        }
    });
    $('.addData').click(() => {
        if (!flag) {
            flag = true;
            $('.addImg').css('height', '2rem');
            $('.chatInputBox').css('bottom', '2rem');
        } else {
            flag = false;
            $('.addImg').css('height', '0');
            $('.chatInputBox').css('bottom', '0');
        }
    });
    $chat.click(() => {
        $('.addImg').css('height', '0');
        $('.chatInputBox').css('bottom', '0');
    });
});
