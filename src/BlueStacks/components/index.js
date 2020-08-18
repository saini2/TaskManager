import React from "./node_modules/react";
import Loader from "../shared/Loader/Loader";

export default class AppIndex extends React.Component {
  state = {
    renderComponent: null
  };

  componentDidMount() {
    if (this.props.feature === "BlueStacks") {
      import(/* webpackChunkName: "BlueStacks_platform" */ "./App").then(response => {
        this.setState({
          renderComponent: response.default
        });
      });
    }
  }

  render() {
    if (this.state.renderComponent) return <this.state.renderComponent />;
    return <Loader />;
  }
}
