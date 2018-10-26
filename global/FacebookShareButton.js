import Head from 'next/head';
import { FacebookIcon } from 'react-share';
import { FacebookProvider, ShareButton } from 'react-facebook';

export default function FacebookShareButton ({ url, imageUrl }) {
	return (
		<>
			<Head>
				<meta property="og:image" content={imageUrl} />
			</Head>
			<FacebookProvider appId="277528442889089">
				<ShareButton href={url}>
					<FacebookIcon size={32} round={true} />
				</ShareButton>
			</FacebookProvider>
		</>
	)
}
