class PostsPresenter {
  constructor(props) {
    this.props = props;
  }

  fetch() {
    this.props.getApiData();
  }
}
export default PostsPresenter;
