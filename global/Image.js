import React, { Component } from 'react';
import lazyestload from "../assets/js/lazyestload";
import styled from "styled-components";
import { createThumbnail } from '../helpers/cloudinary';

const Image = styled.img`

`;

class ImageComp extends Component {

	componentDidMount () {
		lazyestload();
	}

	render () {
		const { src, alt, className } = this.props;
		return (
			<picture>
				<source media="(min-width: 1200px)" data-srcset={createThumbnail(src, 1000)} />
				<source media="(min-width: 500px)" data-srcset={createThumbnail(src, 500)} />
				<source media="(min-width: 320px)" data-srcset={createThumbnail(src, 300)} />
				<Image
					className={`${className} lazyestload`}
					src={createThumbnail(src, 100)}
					alt={alt}
				/>
			</picture>
		)
	}
}

export default ImageComp;

