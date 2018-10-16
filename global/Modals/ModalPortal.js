import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class ModalPortal extends Component {
	render () {
		// React does *not* create a new div. It renders the children into `domNode`.
		// `domNode` is any valid DOM node, regardless of its location in the DOM.
		return ReactDOM.createPortal(
			this.props.children,
			document.getElementById("modal-root")
		);
	}
}
