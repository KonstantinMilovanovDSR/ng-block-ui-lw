export const template = `
<div class="block-ui-wrapper {{name}} {{className}}" [ngClass]="{ 'active': state.blockCount > 0 }">
  <div class="block-ui-spinner" *ngIf="!templateCmp">
    <div class="loader"></div>
    <div *ngIf="message || defaultMessage" class="message">
      {{ message || defaultMessage }}
    </div>
  </div>
  <ng-template *ngIf="templateCmp" #templateOutlet></ng-template>
</div>
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWktY29udGVudC5jb21wb25lbnQudGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvY29tcG9uZW50cy9ibG9jay11aS1jb250ZW50L2Jsb2NrLXVpLWNvbnRlbnQuY29tcG9uZW50LnRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRzs7Ozs7Ozs7OztDQVV2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gYFxyXG48ZGl2IGNsYXNzPVwiYmxvY2stdWktd3JhcHBlciB7e25hbWV9fSB7e2NsYXNzTmFtZX19XCIgW25nQ2xhc3NdPVwieyAnYWN0aXZlJzogc3RhdGUuYmxvY2tDb3VudCA+IDAgfVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJibG9jay11aS1zcGlubmVyXCIgKm5nSWY9XCIhdGVtcGxhdGVDbXBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgIDxkaXYgKm5nSWY9XCJtZXNzYWdlIHx8IGRlZmF1bHRNZXNzYWdlXCIgY2xhc3M9XCJtZXNzYWdlXCI+XHJcbiAgICAgIHt7IG1lc3NhZ2UgfHwgZGVmYXVsdE1lc3NhZ2UgfX1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxuZy10ZW1wbGF0ZSAqbmdJZj1cInRlbXBsYXRlQ21wXCIgI3RlbXBsYXRlT3V0bGV0PjwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG5gO1xyXG4iXX0=