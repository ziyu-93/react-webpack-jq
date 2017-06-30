/**
 * 引入依赖文件
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";

//定义Footer
// export default class Footer extends Component {
//   render() {
//     return (
//       <footer>
//         <section className="f-l footer-l">
//           <section className="footer-l-t">
//             <Link to={"/"}>关于我们</Link>
//             <Link to={"/"}>联系我们</Link>
//           </section>
//           <section className="footer-l-b">
//             <p>Copyright © 2005-2017 乐表网 版权所有</p>
//             <p>010-56125214 </p>
//             <p>北京市海定区上地三街9号A座9层A1002-037 </p>
//             <p>北京北方头条信息技术有限公司 </p>
//             <p>京ICP备17030694号-1 </p>
//             <p>未经许可不得转载、复制、盗链或镜像</p>
//           </section>
//         </section>
//         <section className="f-r footer-r">
//           <section>
//             <p>微博</p>
//             <img src="http://img.lbiao.com/upload/image/wblbiao.png"/>
//           </section>
//           <section>
//             <p>微信</p>
//             <img src="http://img.lbiao.com/upload/image/ewm.jpg"/>
//           </section>
//         </section>
//       </footer>
//     )
//   }
// }
const Footer = () => (
  <footer>
    <section className="w-1200">
      <section className="f-l footer-l">
        <section className="footer-l-t">
          <Link to={"/"}>关于我们</Link>
          <font>|</font>
          <Link to={"/"}>联系我们</Link>
        </section>
        <section className="footer-l-b">
          <p>Copyright © 2005-2017 乐表网 版权所有</p>
          <p>010-56125214 </p>
          <p>北京市海定区上地三街9号A座9层A1002-037 </p>
          <p>北京北方头条信息技术有限公司 </p>
          <p>京ICP备17030694号-1 </p>
          <p>未经许可不得转载、复制、盗链或镜像</p>
        </section>
      </section>
      <section className="f-r footer-r">
        <section>
          <p>微博</p>
          <img src="http://img.lbiao.com/upload/image/wblbiao.png"/>
        </section>
        <section>
          <p>微信</p>
          <img src="http://img.lbiao.com/upload/image/ewm.jpg"/>
        </section>
      </section>
    </section>
  </footer>
)
export { Footer }
