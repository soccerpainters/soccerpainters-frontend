import styled from "styled-components";
import Link from 'next/link';
import IconClose from '../../assets/images/icon-close.svg';
import ModalPortal from './ModalPortal';

const Modal = styled.div`
	${tw` fixed pin-t w-screen h-screen bg-white z-30 flex flex-col justify-center items-center `}

	a{
		${tw` text-black no-underline my-8`}
	}
`;

const ModalComp = props => {
	const { isModalOpen } = props;
	if (!isModalOpen) return null;
	return (
		<ModalPortal>
			<Modal>
				<div className="absolute pin-t mt-4">
					<button onClick={props.onClick}><img className="h-8 w-18" src={IconClose} alt="Close" /></button>
				</div>
				<Link href="/"><a onClick={props.onClick}>Home</a></Link>
				<Link href="/about"><a onClick={props.onClick}>About</a></Link>
				<Link href="/shop"><a onClick={props.onClick}>Shop</a></Link>
			</Modal>
		</ModalPortal>
	)
}


export default ModalComp;