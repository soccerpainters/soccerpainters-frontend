import React, { Component } from 'react';
import lazyestload from "../assets/js/lazyestload";
import styled from "styled-components";
import { createThumbnail } from '../helpers/cloudinary';
import { media } from '../theme';

const Image = styled.img`

	${ media.md`
		${tw` mb-0 `}
	`}
`;

class ImageComp extends Component {

	componentDidMount () {
		lazyestload();
	}

	render () {
		const { src, alt, className } = this.props;

		return (
			<Image
				className={`${className} lazyestload`}
				src={createThumbnail(src, 100)}
				data-srcset={`
					${createThumbnail(src, 300)} 300w, 
					${createThumbnail(src, 360)} 360w,
					${createThumbnail(src, 500)} 500w, 
					${createThumbnail(src, 600)} 600w,
					${createThumbnail(src, 700)} 700w,
					${createThumbnail(src, 850)} 850w, 
					${createThumbnail(src, 1000)} 1000w`
				} 
			/>
		)
	}
}

export default ImageComp;

