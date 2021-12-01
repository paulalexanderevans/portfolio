import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Content from "./content";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" render={() => <Content />} />
            </BrowserRouter>
        );
    }
}
