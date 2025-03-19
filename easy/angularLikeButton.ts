import { Component } from "@angular/core";

@Component({
  selector: "like-button",
  template: `
    <button
      class="like-button"
      [ngClass]="{ liked: liked }"
      (click)="toggleLike()"
    >
      Like | <span class="likes-counter">{{ likeCount }}</span>
    </button>
  `,
  styles: [
    `
      .like-button {
        font-size: 1rem;
        padding: 5px 10px;
        color: #585858;
        border: none;
        cursor: pointer;
      }

      .liked {
        font-weight: bold;
        color: #1565c0;
      }
    `,
  ],
})
export class LikeButtonComponent {
  public likeCount = 100;
  public liked = false;

  toggleLike(): void {
    this.liked = !this.liked;
    this.likeCount += this.liked ? 1 : -1;
  }
}
