// Spinner style - https://github.com/lukehaas/css-loaders
export const styles = `
.block-ui-wrapper {
  display: none;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.70);
  z-index: 30000;
  cursor: wait;
}

.block-ui-wrapper.block-ui-wrapper--element {
  position: absolute;
}

.block-ui-wrapper.active {
  display: block;
}

.block-ui-wrapper.block-ui-main {
  position: fixed;
}

.block-ui-spinner,
.block-ui-template {
  position: absolute;
  top: 40%;
  margin: 0 auto;
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.block-ui-spinner > .message {
  font-size: 1.3em;
  text-align: center;
  color: #fff;
}

.block-ui__element {
  position: relative;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 7px auto;
  font-size: 5px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}

@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWktY29udGVudC5jb21wb25lbnQuc3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvY29tcG9uZW50cy9ibG9jay11aS1jb250ZW50L2Jsb2NrLXVpLWNvbnRlbnQuY29tcG9uZW50LnN0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBEQUEwRDtBQUUxRCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F3RnJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTcGlubmVyIHN0eWxlIC0gaHR0cHM6Ly9naXRodWIuY29tL2x1a2VoYWFzL2Nzcy1sb2FkZXJzXHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gYFxyXG4uYmxvY2stdWktd3JhcHBlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43MCk7XHJcbiAgei1pbmRleDogMzAwMDA7XHJcbiAgY3Vyc29yOiB3YWl0O1xyXG59XHJcblxyXG4uYmxvY2stdWktd3JhcHBlci5ibG9jay11aS13cmFwcGVyLS1lbGVtZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5ibG9jay11aS13cmFwcGVyLmFjdGl2ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ibG9jay11aS13cmFwcGVyLmJsb2NrLXVpLW1haW4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLmJsb2NrLXVpLXNwaW5uZXIsXHJcbi5ibG9jay11aS10ZW1wbGF0ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uYmxvY2stdWktc3Bpbm5lciA+IC5tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJsb2NrLXVpX19lbGVtZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sb2FkZXIsXHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTBlbTtcclxuICBoZWlnaHQ6IDEwZW07XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgbWFyZ2luOiA3cHggYXV0bztcclxuICBmb250LXNpemU6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgYm9yZGVyLXRvcDogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlci1yaWdodDogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlci1ib3R0b206IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItbGVmdDogMS4xZW0gc29saWQgI2ZmZmZmZjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ4IHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZDgge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5gO1xyXG4iXX0=