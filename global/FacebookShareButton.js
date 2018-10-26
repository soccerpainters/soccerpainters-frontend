
import React from 'react';
import { FacebookIcon } from 'react-share';
import { FacebookProvider, ShareButton } from 'react-facebook';

export default function FacebookShareButton ({ url }) {
	return (
		<FacebookProvider appId="277528442889089">
			<ShareButton href={url}>
				<FacebookIcon size={32} round={true} />
			</ShareButton>
		</FacebookProvider>
	)
}
