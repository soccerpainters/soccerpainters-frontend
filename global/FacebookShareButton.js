import Head from 'next/head';
import { FacebookIcon } from 'react-share';
import { FacebookProvider, ShareButton } from 'react-facebook';
import { createThumbnail } from '../helpers/cloudinary'

export default function FacebookShareButton ({ url, imageUrl, title, intro, type }) {
	const image = createThumbnail(imageUrl, 800); // Get high quality version
	return (
		<>
			<Head>
				<meta property="og:url" content={url} />
				<meta property="og:type" content={type} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={intro} />
				<meta property="og:image" content={image} />
			</Head>
			<FacebookProvider appId="277528442889089">
				<ShareButton>
					<FacebookIcon size={32} round={true} />
				</ShareButton>
			</FacebookProvider>
		</>
	)
}
