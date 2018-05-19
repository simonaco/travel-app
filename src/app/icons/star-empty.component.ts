import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icon-star-empty',
  template: `
  <svg:path d="M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984
  4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"/>
  `,
  styles: []
})
export class StarEmptyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
