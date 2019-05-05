$(function () {

    let id = getUrlParam("id");
    $.post(
        contextPath + "doctor/doctorDetails",
        {
            "id": id
        },
        function ({code, content}) {
            if (code === '0') {
                console.log(content);
                let html = `
                <div class="background">
                    <div class="ysTitle">
                        <ul class="ui-list">
                            <li>
                                <div class="ui-list-img-horizontal">
                                    <span id="avatar" style="background-image:url(${content.headimg})"></span>
                                </div>
                                <div class="ui-list-info " style="border-bottom: 0;">
                                    <h4 class="ysName leftBias">${content.name}</h4>
                                    <p class="ysTitle2 leftBias">${content.title} | ${content.department}</p>
                                    <p class="volume leftBias">咨询量: ${content.hot}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                   <div class="div1">
                    <ul class="ui-list ui-border-tb ul2">
                        <li>
                            <div class="ui-list-info ">
                                <img class="icon" src="../public/img/zhiyedian@2x.png" alt="">
                                <h4 class=" t0">执业点</h4>
                                <p class=" c0">${content.hospital}</p>
                            </div>
                        </li>
                        <li>
                            <div class="ui-list-info topLess">
                                <img class="icon" src="../public/img/jianjie@2x.png" alt="">
                                <h4 class=" t0">药师简介</h4>
                                <p class=" c0">
                                    ${content.description}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="ui-list-info topLess1">
                                <img class="icon" src="../public/img/shanchang@2x.png" alt="">
                                <h4 class=" t0">擅长疾病</h4>
                                <p class=" c0">
                                   ${content.material}
                                </p>
                            </div>
                        </li>
                        <li class="height1">
                            <div class="ui-list-info topLess2">
                                <img class="icon" src="../public/img/zixunfuwu@2x.png" alt="">
                                <h4 class=" t0">咨询服务</h4>
                                <div class=" cost xi topLess3">咨询费用:</div>
                                <div class=" cost2 cost topLess3">3元/次</div>
                                <div class="vipBox topLess3">
                                    <img class="vip" src="../public/img/vip@2x.png" alt="">
                                    <div class="vipText">会员免费咨询</div>
                                    <div class="open">立即开通</div>
                                </div>
                                <p class="c2 topLess4">
                                    提示:
                                </p>
                                <p class=" c1 topLess4">
                                    1.请将您的病历发送给咨询的药师,方便药师
                                    了解病情,开出准确药单。
                                    2.咨询结束后药师会向您确认是否完成咨询并
                                    结束本次资讯,结束后您将无法再次向药师发
                                    送消息。
                                    3.资讯结束后您可对药师进行评分。
                                    4.若对咨询过程有不满或疑问,可在个人中心
                                    进行问题反馈,说明情况,后台客服人员会依
                                    据情况进行处理。
                                    5药师可能正在门诊,如无法及时回复请您耐
                                    心等候。
                                </p>
                            </div>
                        </li>
                        <div class="placeholder topLess5">
                            <div class=" btn">
                                <img class="img-btm" src="../public/img/zixun@2x.png" alt="">
                                立即咨询
                            </div>
                        </div>
                    </ul>
                </div>
                   `;
                $('body').append(html);
            }
        }
    );
});
