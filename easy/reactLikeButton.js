import cx from "classnames";
import { Component } from "react";

export default class LikeButton extends Component {
  state = {
    likeCount: 100,
    liked: false,
  };

  toggleLike = () => {
    this.setState((prevState) => ({
      liked: !prevState.liked,
      likeCount: prevState.liked
        ? prevState.likeCount - 1
        : prevState.likeCount + 1,
    }));
  };

  render() {
    return (
      <>
        <button
          className={cx("like-button", { liked: this.state.liked })}
          onClick={this.toggleLike}
        >
          Like <span className="likes-counter">{this.state.likeCount}</span>
        </button>

        <style>{`
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
                `}</style>
      </>
    );
  }
}
