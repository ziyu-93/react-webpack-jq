import React, { Component } from "react";
import Header from "./../components/header.js";
import { Footer } from "./../components/footer.js";
import ContentTitle from "./../components/title.js";
// import Style from "style-it";
// let img = require("./image/大闹天竺.png");

//首页 import 模块的时候，要看对方输出模块的格式，如果是default 就不需要加{} 如果是export{} 引用的时候就需要加上{}
export default class Index extends Component {
  render() {
    return (
      <section>
        <Header/>
        <SecondTitle/>
        <Nav/>
        <Fouse/>
        <PicShow/>
        <BuyWatch/>
        <PicRecomment/>
        <HotCommend/>
        <NewWatch/>
        <WatchRank/>
        <Footer/>
      </section>
    )
  }
}

//搜索模块
class SecondTitle extends Component {
  render() {
    return (
      <section className="w-1200 secondT">
          <a href="/">
            <img src="http://img.lbiao.com/upload/image/logo.png"/>
          </a>
          <div className="secendT-r f-r">
            <form>
              <input placeholder="腕表品牌、系统、型号"/>
            </form>
            <span>搜索</span>
          </div>
      </section>
    )
  }
}

const Navlist = ({nav, name, content}) => (
  <li className="nav-l-b-nav anm a">
    <div>
      <i className={`icon ${name}`}></i>
      <span>{nav}</span>
      <font>></font>
    </div>
    <ul><li><a className="anm">百达翡丽</a></li><li><a className="anm">朗格</a></li><li><a className="anm">宝铂</a></li><li><a className="anm">江诗丹顿</a></li></ul>
    <aside className="pro-list anm">
      {content}
    </aside>
  </li>
)

//banner Nav
class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    //顶部banner
    jQuery(".loop")
      .slide({
        autoPlay: true,
        delayTime: 2000,
        easing: "swing",
        effect: "fold",
        interTime: 5000,
        trigger: "click"
      });
  }
  render() {
    return (
      <section className="w-1200 nav">
        <article className="nav-l f-l">
          <div className="nav-l-t">
            <span>乐表腕表库</span><i className="f-r icon icon-nav-jt"></i>
          </div>
          <div className="nav-l-b">
            <ul>
              { /* <Style>
                {`
                  .nav-l-b-nav:hover{
                    color:red;
                  }
                `}
              </Style> */ }
              <Navlist name="icon-nav-dj" nav="顶级" content=
      {
      <ul>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                  </ul>
      } />
              <Navlist name="icon-nav-sh" nav="奢华" content=
      {
      <ul>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                  </ul>
      } />
              <Navlist name="icon-nav-hh" nav="豪华" content=
      {
      <ul>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                  </ul>
      } />
              <Navlist name="icon-nav-qm" nav="亲民" content=
      {
      <ul>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                  </ul>
      } />
              <Navlist name="icon-nav-ss" nav="时尚" content=
      {
      <ul>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                  </ul>
      } />
            </ul>
          </div>
        </article>
        <article className="nav-r f-r">
          <div className="nav-r-t">
            <ul>
              <li className="anm">咨询</li>
              <li className="anm">腕表库</li>
              <li className="anm">品牌大全</li>
              <li className="anm">排行榜</li>
              <li className="anm">商铺</li>
              <li className="anm">维修</li>
            </ul>
          </div>
          <div className="loop">
            <ul className="hd">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="pic-loop-wrap">
              <div className="bd">
                <div className="loop-item">
                  <img src="https://www.omegawatches.com.hk/images/homepage/Carrousel_Home/home_PO_ETNZ_DeepBlack_large.jpg"/>
                </div>
                <div className="loop-item">
                  <img src="https://www.omegawatches.com.hk/images/homepage/Carrousel_Home/home_SpeedmasterFans_large.jpg"/>
                </div>
                <div className="loop-item">
                  <img src="https://www.omegawatches.com.hk/images/homepage/Carrousel_Home/home_SpeedmasterAnniversary_large.jpg"/>
                </div>
                <div className="loop-item">
                  <img src="https://www.omegawatches.com.hk/images/homepage/Carrousel_Home/home_Speedmaster-GC-large.jpg"/>
                </div>
                <div className="loop-item">
                  <img src="http://www.lbiao.com/upload/image/201704/146abad1-e6fb-4830-9046-2d1a3ca0edcf.jpg"/>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    )
  }
}
//图文
const PicText = ({url, title, text}) => (
  <div className="pic-text-wrap">
    <div className="pic f-l">
      <img className="anm anm-scale" src={url}/>
    </div>
    <div className="text f-r anm">
      <p className="fouse-title anm">{title}</p>
      <p className="fouse-text">{text}</p>
    </div>
  </div>
)
//文图
const TextPic = ({url, title, text}) => (
  <div className="pic-text-wrap">
    <div className="text f-l anm">
      <p className="fouse-title anm">{title}</p>
      <p className="fouse-text ">{text}</p>
    </div>
    <div className="pic f-r">
      <img className="anm anm-scale" src={url}/>
    </div>
  </div>
)
//热点资讯
const ListInfo = ({text}) => (
  <div className="item-info">
    <div className="anm pay">
        <font>(付费:￥2)</font>
        <img className="pay-icon" src="http://img.lbiao.com/resources/shop/2017/images/pay.jpg"/>
    </div>
    <span className="text">{text}</span>
  </div>
)
//今日焦点
class Fouse extends Component {
  render() {
    return (
      <section className="w-1200 fouse">
        <article className="fouse-l f-l">
          <ContentTitle english="Fouse" text="今日焦点"/>
          <aside>
            <PicText url="http://img.lbiao.com/upload/image/201706/6d47034a-993c-4bd6-a09d-014c483ac4df-show.jpg" title="国际电影节公益 积家大使与众星秀腕表" text="上海国际电影节携手高级制表品牌积家，在第二十届上作为官方合作伙伴，以作为官方合作伙伴，以以作为官方合作伙伴，以"/>
            <PicText url="http://img.lbiao.com/upload/image/201706/9a215f56-5ae9-4c36-ae29-592a004c336a-show.jpg" title="腕表告密佩戴者身份?不想尴尬戴错腕表" text="腕表早已不是当初的计时工具，它某种程度上象征着身份、财富、地位以及男人以作为官方合作伙伴，以以作为官方合作伙伴，以"/>
            <TextPic url="http://img.lbiao.com/upload/image/201706/f1e55b72-4070-4f9a-9025-bdb183c4e837-show.jpg" title="优雅做公益 温斯蕾5款限量浪琴腕表" text="为纪念品牌浪琴腕表旗舰系列推出的60周年，在位于法国巴黎圣奥诺雷市郊的以作为官方合作伙伴，以以作为官方合作伙伴，以"/>
            <TextPic url="http://img.lbiao.com/upload/image/201706/c4a2c754-bd40-43d6-878d-a95d7d64bb90-show.jpg" title="腕表告密佩戴者身份?不想尴尬戴错腕表" text="腕表早已不是当初的计时工具，它某种程度上象征着身份、财富、地位以及男人以作为官方合作伙伴，以以作为官方合作伙伴，以"/>
          </aside>
        </article>
        <article className="fouse-r f-r">
          <ContentTitle english="Hot" text="热点资讯"/>
          <aside className="info-list">
            <ListInfo text="鉴赏 | 律动之美 腕表极度简约的线条"/>
            <ListInfo text="清纯白色不难驾驭 多款白色腕表让你"/>
            <ListInfo text="ZENITH真力时携手路虎入驻上海车展 "/>
            <ListInfo text="高科技G-SHOCK震撼巴塞尔钟表展"/>
            <ListInfo text="G-SHOCK腕表GA系列掀盛夏撞色狂潮"/>
            <ListInfo text="如感速度与激情 高速摩托车世界帝舵F"/>
            <ListInfo text="朗格 时代的面孔"/>
            <ListInfo text="贝伦赛丽品阅世界时间 24个时区腕表"/>
            <ListInfo text="可信赖的战友 美度舵手系列腕表"/>
            <ListInfo text="柏莱士BR01 Black Ceramic黑陶瓷腕表"/>
          </aside>
        </article>
      </section>
    )
  }
}
//PicShowItem
const PicShowItem = ({width, height, url, text}) => (
  <div style={{
    "width": width,
    "height": height
  }} className="pic-show-item">
      <img className="anm anm-scale" src={url}/>
    <div className="anm-late pic-text"><p>{text}</p></div>
  </div>
)
//腕表品鉴
class PicShow extends Component {
  render() {
    return (
      <section className="w-1200 pic-show">
        <ContentTitle english="Reviews" text="腕表品鉴"/>
        <article className="pic-show-content">
          <div className="pic-show-content-l">
            <PicShowItem width="192px" height="192px" url="http://www.lbiao.com/upload/image/201705/ea2d0f92-3912-46d6-8be8-3968076dab37.jpg" text="执为索爱 全情投入 用心演绎每一个角色 - 飞亚达"/>
            <PicShowItem width="192px" height="192px" url="http://img.lbiao.com/upload/image/201706/74216713-b861-40cc-a3fc-02ab5afd9f86.jpg" text="OMEGA辉煌传统 奥运指定计时系列腕表"/>
          </div>
          <PicShowItem width="394px" height="394px" url="http://img.lbiao.com/upload/image/201706/5dfeb52c-2080-4013-83b8-e13c76d7f1d6.jpg" text="鉴赏 | ​夜行军 柏莱士 BR03-92 三色迷彩腕表 睁大你的眼睛"/>
          <PicShowItem width="192px" height="192px" url="http://www.lbiao.com/upload/image/201705/0226cf97-4689-41e4-8968-c8f69730eb8f.jpg" text="迪奥 蓝宝石水晶金字塔"/>
          <PicShowItem width="392px" height="192px" url="http://img.lbiao.com/upload/image/201706/4f4dd74d-91a9-4a6b-a3b4-12cc1ec1aef8.jpg" text="宝格丽Octo Finissimo自动小三针超薄腕表"/>
          <PicShowItem width="392px" height="192px" url="http://img.lbiao.com/upload/image/201706/2d79fe08-e583-42d4-8ea6-cb133591fcd4.jpg" text="特种兵定制潜水表款 宝铂五十噚MIL-SPEC腕表"/>
          <PicShowItem width="192px" height="192px" url="http://img.lbiao.com/upload/image/201706/f880c112-f826-421b-acdb-5cdd273aaf69.jpg" text="鉴赏 | 世界赛车中心迪通拿 劳力士腕表Daytona系列得名于此"/>
        </article>
      </section>
    )
  }
}

const PicDescription = ({text}) => (
  <div className="pic-text-show">
    <p>{text}</p>
  </div>
)
const BuyListInfo = ({text}) => (
  <div className="item-info">
    <span className="text">{text}</span>
  </div>
)
//购表指南
class BuyWatch extends Component {
  componentDidMount() {
    //购表指南
    jQuery("#buy-watch")
      .slide({
        effect: "leftLoop",
        autoPlay: true,
        delayTime: 1000,
        easing: "swing",
        interTime: 3000
      });
  }
  render() {
    return (
      <section className="w-1200 buy-watch">
        <ContentTitle english="Guides" text="购表指南"/>
        <article className="buy-watch-t">
          <div className="buy-watch-loop f-l" id="buy-watch">
            <ul className="hd">
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="buy-watch-loop-wrap">
              <div className="bd">
                <div className="buy-watch-loop-item">
                  <img src="http://img.lbiao.com/upload/image/201706/35375129-87f0-4574-beab-aaf55d98c2b2.jpg"/>
                  <PicDescription text="欧米茄腕表名人堂 5位大使银幕传奇"/>
                </div>
                <div className="buy-watch-loop-item">
                  <img src="http://img.lbiao.com/upload/image/201706/44b453b3-f272-4a4e-a566-73614461e13a.jpg"/>
                  <PicDescription text="劳力士蚝式恒动腕表 见证场地障碍赛冠军"/>
                </div>
                <div className="buy-watch-loop-item">
                  <img src="http://img.lbiao.com/upload/image/201706/c71445de-8f0d-4180-94f0-90e359931d18.jpg"/>
                  <PicDescription text="刘亦菲 黄晓明坚定的内心 天梭宝环系列腕表"/>
                </div>
              </div>
              <a className="prev anm icon" href="javascript:void(0)"></a>
              <a className="next anm icon" href="javascript:void(0)"></a>
            </div>
          </div>
          <aside className="buy-watch-t-r f-r hover-change-bg">
            <img className="anm anm-scale" src="http://img.lbiao.com/upload/image/201705/72d9524f-6c29-4177-8e8b-3e57a936d520.jpg"/>
            <PicDescription text="宝齐莱五大系列腕表 | 简评"/>
          </aside>
        </article>
        <article className="buy-watch-b">
          <aside className="buy-watch-b-l f-l">
            <ul>
              <li className="hover-change-bg">
                <img className="anm anm-scale" src="http://img.lbiao.com/upload/image/201706/d7c987f2-9708-4ec2-a1d3-6aedbe007f01.jpg"/>
                <PicDescription text="心得 | 陪伴席薇亚.厄尔数十载 劳力士腕表Oyster Perpetual Lady-Datejust"/>
              </li>
              <li className="hover-change-bg">
                <img className="anm anm-scale" src="http://img.lbiao.com/upload/image/201706/f73febcd-cb97-4779-93ab-bad509088116.jpg"/>
                <PicDescription text="林志玲的甜美生活方式 浪琴黛綽维纳系列腕表"/>
              </li>
              <li className="hover-change-bg">
                <img className="anm anm-scale" src="http://img.lbiao.com/upload/image/201706/e10b170e-cbda-450d-be48-56c7502b5d92.png"/>
                <PicDescription text="鉴赏 | 优雅女性必备腕表之卡地亚"/>
              </li>
            </ul>
          </aside>
          <aside className="buy-watch-b-r f-r">
            <ContentTitle english="Nominate" text="推荐资讯"/>
            <div className="info-list">
                <BuyListInfo text="鉴赏 | 卡地亚古董表赏析"/>
                <BuyListInfo text="OMEGA为国际泳联提供精准精密计时"/>
                <BuyListInfo text="腕表个性浪子沛纳海 不羁刚性坚持家"/>
                <BuyListInfo text="男士星座系列腕表 让男人征服宇宙的欧米茄"/>
                <BuyListInfo text="展现出独特优雅与精致 女性佩戴朗格"/>
                <BuyListInfo text="被猎豹女士捕了 卡地亚猎豹系列腕表"/>
                <BuyListInfo text="诠释爱的意义 浪琴经典优雅对表嘉岚系列 "/>
                <BuyListInfo text="心得 | 八个男士选择腕表的技巧"/>
                <BuyListInfo text="鉴赏 | 积家为珠宝注入生命 向女性之美致敬"/>
                <BuyListInfo text="如何辨别阿玛尼手表的真伪？"/>
            </div>
          </aside>
        </article>
      </section>
    )
  }
}

//图片推荐
class PicRecomment extends Component {
  componentDidMount() {
    //图片推荐
    jQuery("#pic-recommend")
      .slide({
        effect: "top",
        autoPlay: true,
        delayTime: 1000,
        easing: "swing",
        interTime: 3000
      });
  }
  render() {
    return (
      <section className="w-1200 pic-recommend">
        <ContentTitle english="Photo" text="图片推荐"/>
        <article className="pic-recommend-content" id="pic-recommend">
          <section className="pic-recommend-r f-r">
            <ul className="hd">
              <li>
                <img className="anm anm-scale" src="http://img.lbiao.com/upload/image/201704/567df75c-2b1d-42ce-922a-e848ec63a591.jpg"/>
              </li>
              <li>
                <img className="anm anm-scale" src="http://img.lbiao.com/upload/image/201704/70495f59-90f7-4405-8f70-e7bd86860e05.jpg"/>
              </li>
              <li>
                <img className="anm anm-scale" src="http://img.lbiao.com/upload/image/201704/12903850-abe2-48de-91b0-8cea423bbc67.jpg"/>
              </li>
            </ul>

          </section>
          <section className="pic-recommend-l f-l">
            <div className="pic-recommend-loop bd">
              <div className="big-img">
                <img className="anm anm-scale" src="http://img.lbiao.com/upload/image/201704/e8e775fd-6fcc-4890-9dd0-2b299e0adb85.jpg"/>
                <div className="big-img-text">2017年，欧米茄荣耀庆祝超霸表面世60周年</div>
              </div>
              <div className="big-img">
                <img className="anm anm-scale" src="http://img.lbiao.com/upload/image/201704/f581a5af-ba54-4ef2-8bf5-21f0d6939792.jpg"/>
                <div className="big-img-text">ZENITH真力时携手路虎入驻上海车展 首次震撼呈献全新旗舰系列星速揽胜VELAR特别款腕表</div>
              </div>
              <div className="big-img">
                <img className="anm anm-scale" src="http://img.lbiao.com/upload/image/201704/c73407e8-5bd7-42c7-b76a-a25f7bfdb472.jpg"/>
                <div className="big-img-text">IWC万国表品牌大使周迅亮相北京国际电影节，分享高级制表艺术与电影艺术的共性</div>
              </div>
            </div>
            <a className="prev anm icon" href="javascript:void(0)"></a>
            <a className="next anm icon" href="javascript:void(0)"></a>
          </section>
        </article>
      </section>
    )
  }
}

const HotLogo = ({src, Chinese, english}) => (
  <li className="anm f-l">
    <img src={src}/>
    <p className="Chinese">{Chinese}</p>
    <p className="english">{english}</p>
  </li>
)
//热点评论
class HotCommend extends Component {
  render() {
    return (
      <section className="w-1200 hot-commend">
        <article className="hot-commend-l f-l">
          <ContentTitle english="Experience" text="热点评论"/>
            <ul>
              <li>
                <div className="hot-commend-item-l f-l">
                  <img src="http://img.lbiao.com//upload/headpic/166.jpg"/>
                  <p>八度伏特加</p>
                  <p><span className="data">2017-06-13 17:52:49</span></p>
                </div>
                <div className="hot-commend-item-r f-r">
                  <div className="hot-commend-item-r-con">给外甥买的，喜欢很久了。送给他工作的礼物。看上去不错，带着很好看。</div>
                  <div className="hot-commend-item-r-img">
                    <div><img className="anm anm-scale" src="http://img.lbiao.com/upload/0525/14955331694500619326.jpg"/></div>
                    <div><img className="anm anm-scale" src="http://img.lbiao.com/upload/0525/14955331698443806026.jpg"/></div>
                    <div><img className="anm anm-scale" src="http://img.lbiao.com/upload/0525/14955331692543706823.jpg"/></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="hot-commend-item-l f-l">
                  <img src="http://img.lbiao.com//upload/headpic/95.jpg"/>
                  <p>白白客星</p>
                  <p><span className="data">2017-05-28 15:37:03</span></p>
                </div>
                <div className="hot-commend-item-r f-r">
                  <div className="hot-commend-item-r-con">买个表，一波三折才到手一个相对满意的潜水表，波折就不想多说了，结果愉快就行！这个表我正常戴了4天，最让我惊喜是走时出奇的精准，差不多4天了误差不到3秒，仔细观察整个表，明显的地方工艺还是不错的，看不到的地方还是有点小瑕疵的，但是不是很仔细看也很难发现的！之前本来买的是潜水200米的，不过有点小问题，后来补差价换了500米的，很明显一分钱一分货，工艺比200米的好一点！可能俺比较有讲究吧！总结：这表比较满意！</div>
                  <div className="hot-commend-item-r-img">
                    <div><img className="anm anm-scale" src="http://img.lbiao.com/upload/0525/14955249287655916785.jpg"/></div>
                    <div><img className="anm anm-scale" src="http://img.lbiao.com/upload/0525/14955249296050607831.jpg"/></div>
                    <div><img className="anm anm-scale" src="http://img.lbiao.com/upload/0525/14955249293968729529.jpg"/></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="hot-commend-item-l f-l">
                  <img src="http://img.lbiao.com//upload/headpic/67.jpg"/>
                  <p>醉梦中兴</p>
                  <p><span className="data">2017-05-26 11:21:46</span></p>
                </div>
                <div className="hot-commend-item-r f-r">
                  <div className="hot-commend-item-r-con">图片展现不出实物的美！能不能说有了她就看不上别的表了！</div>
                  <div className="hot-commend-item-r-img">
                    <div><img className="anm anm-scale" src="http://img.lbiao.com/upload/0525/14955097035784477856.jpg"/></div>
                    <div><img className="anm anm-scale" src="http://img.lbiao.com/upload/0525/14955097032897080712.jpg"/></div>
                    <div><img className="anm anm-scale" src="http://img.lbiao.com/upload/0525/14955097039184790025.jpg"/></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="hot-commend-item-l f-l">
                  <img src="http://img.lbiao.com//upload/headpic/63.jpg"/>
                  <p>西格酱</p>
                  <p><span className="data">2017-06-02 17:08:29</span></p>
                </div>
                <div className="hot-commend-item-r f-r">
                  <div className="hot-commend-item-r-con">时尚 百搭。女表里比较好看的瑞士款 简简单单的</div>
                  <div className="hot-commend-item-r-img">

                  </div>
                </div>
              </li>
            </ul>
        </article>
        <article className="hot-commend-r f-r">
          <ContentTitle english="Band" text="热点品牌"/>
            <ul>
              <HotLogo src="http://img.lbiao.com//upload/image/201703/a879f9e7-2715-4582-839d-ebcebd2a2208.jpg" Chinese="积家" english="Jaeger－Le Coultre"/>
              <HotLogo src="http://img.lbiao.com//upload/image/201703/de087261-92eb-4b7f-8dbe-64b40f5f3bc4.jpg" Chinese="百达翡丽" english="Patek Philippe"/>
              <HotLogo src="http://img.lbiao.com//upload/image/201703/33d54375-c673-4906-a6ed-3e8e9073f667.jpg" Chinese="卡地亚" english="cartier"/>
              <HotLogo src="http://img.lbiao.com//upload/image/201703/8bc5ccb8-1e9d-4d45-9705-87a77ce73bbb.jpg" Chinese="宝铂" english="blancpain"/>
              <HotLogo src="http://img.lbiao.com//upload/image/201703/7f474e2e-53b6-4a24-bd1c-9bae487d33ee.jpg" Chinese="格拉苏蒂∙原创" english="glashuette"/>
              <HotLogo src="http://img.lbiao.com//upload/image/201703/e75f5159-395b-4e5f-8689-043b131754d7.jpg" Chinese="江诗丹顿" english="Vacheron Constantin"/>
              <HotLogo src="http://img.lbiao.com//upload/image/201703/7f474e2e-53b6-4a24-bd1c-9bae487d33ee.jpg" Chinese="爱彼" english="AP"/>
              <HotLogo src="http://img.lbiao.com//upload/image/201703/466a8f99-04df-4171-ad8a-242ba8a51a57.jpg" Chinese="宝玑" english="Breguet"/>
              <HotLogo src="http://img.lbiao.com//upload/image/201703/d038a3a6-2f4f-4f60-9123-b06880a752b1.jpg" Chinese="朗格" english="A. Lange Sohne"/>
              <HotLogo src="http://img.lbiao.com//upload/image/201703/fc785b4d-120d-4ee8-b6af-46efe26250da.jpg" Chinese="伯爵" english="Piaget"/>
            </ul>
        </article>
      </section>
    )
  }
}
const NewWatchItem = ({src, name}) => (
  <li className="f-l">
    <div className="new-watch-img">
      <img className="anm" src={src}/>
    </div>
    <div className="new-watch-name">
      <p>{name}</p>
    </div>
  </li>
)
//最新腕表
class NewWatch extends Component {
  render() {
    return (
      <section className="w-1200 new-watch">
        <ContentTitle english="NewWatch" text="最新腕表"/>
        <ul>
          <NewWatchItem src="http://img.lbiao.com//upload/ls_g_img0509/1643/P08MA/2308.jpg" name="法国赫柏林Michel Herbelin-Metropole 大都会系列 1643"/>
          <NewWatchItem src="http://img.lbiao.com//upload/ls_g_img0509/1666/15/4180.jpg" name="法国赫柏林Michel Herbelin-Newport Yacht Club 纽波特游艇俱乐部系列 皇家蓝 1666/15机械男表"/>
          <NewWatchItem src="http://img.lbiao.com//upload/ls_g_img0509/3196.1N/6190.jpg" name="拥有拉丁血统的瑞士腕表品牌：瑞士库尔沃-历史学家系列-"/>
          <NewWatchItem src="http://img.lbiao.com//upload/ls_g_img0509/9670A-BU-P670BU1/8062.jpg" name="瑞士艾美达（Armand Nicolet）-古董机芯限量系列 L10 96"/>
          <NewWatchItem src="http://img.lbiao.com//upload/ls_g_img0509/GA-110HC-1APR/9733.jpg" name="卡西欧 GA-110HC-1APR防水防震防磁男士手表"/>
          <NewWatchItem src="http://img.lbiao.com//upload/ls_g_img0509/0961DW/11197.jpg" name="DW 丹尼尔惠灵顿（Daniel Wellington）—摩登系列 0961DW"/>
          <NewWatchItem src="http://img.lbiao.com//upload/ls_g_img0509/T097.007.26.033.00/12823.jpg" name="天梭TISSO-港湾系列 T097.007.26.033.00 自动机械女表"/>
          <NewWatchItem src="http://img.lbiao.com//upload/ls_g_img0509/T055.417.11.037.00/14090.jpg" name="天梭Tissot-PRC200系列 T055.417.11.037.00 石英男表"/>
        </ul>
      </section>
    )
  }
}

//腕表排行
class WatchRank extends Component {
  componentDidMount() {
    //腕表排行
    jQuery("#watchBrand")
      .slide({
        effect: "leftLoop",
        autoPlay: false,
        easing: "swing"
      });
    jQuery("#watchSeries")
      .slide({
        effect: "leftLoop",
        autoPlay: false,
        easing: "swing"
      });
    jQuery("#watchPro")
      .slide({
        effect: "leftLoop",
        autoPlay: false,
        easing: "swing"
      });
  }
  render() {
    return (
      <section className="w-1200 watch-rank">
        <article className="watch-rank-wrap">
          <div className="rank-title">
            <h3>腕表品牌排名</h3>
          </div>
          <div className="rank-main anm" id="watchBrand">
            <ul className="rank-nav hd">
              <li>顶级</li>
              <li>奢华</li>
              <li>豪华</li>
              <li>亲民</li>
              <li>时尚</li>
            </ul>
            <div className="bd">
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
              <ul className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </ul>
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="watch-rank-wrap">
          <div className="rank-title">
            <h3>腕表系列排名</h3>
          </div>
          <div className="rank-main anm" id="watchSeries">
            <ul className="rank-nav hd">
              <li>顶级</li>
              <li>奢华</li>
              <li>豪华</li>
              <li>亲民</li>
              <li>时尚</li>
            </ul>
            <div className="bd">
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="watch-rank-wrap">
          <div className="rank-title">
            <h3>腕表产品排名</h3>
          </div>
          <div className="rank-main anm" id="watchPro">
            <ul className="rank-nav hd">
              <li>顶级</li>
              <li>奢华</li>
              <li>豪华</li>
              <li>亲民</li>
              <li>时尚</li>
            </ul>
            <div className="bd">
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
              <div className="rank-content">
                <div className="rankBg">
                  <ul>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                    <li>顶级</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    )
  }
}
