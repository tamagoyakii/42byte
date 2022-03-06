import styled from 'styled-components';

export const HeaderContainer = styled.div`
	position: fixed;
	z-index: 1;
	bottom: 0;
  height: 3rem;
	width: 100vw;
  display: flex;
  justify-content: space-between;
	padding: 3px;
	background: #C4C4C4;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	${({theme}) => theme.media.tablet`
		height: 2.5rem;
		padding: 3px;
	`}
	${({theme}) => theme.media.desktop`
		height: 2.5rem;
		padding: 3px;
	`}
`;

export const MenubarLogoWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const MenubarButton = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	width: 6rem;
	font-size: 1rem;
	font-family: 'Press Start 2P', cursive;
	:hover {
		background: #D5D5D5;
	}
	${({theme}) => theme.media.tablet`
		width: 5.5rem;
		font-size: 0.8rem;
	`}
	${({theme}) => theme.media.desktop`
		width: 5rem;
		font-size: 0.8rem;
	`}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 3px;
	padding: 0 3px;
	border-right: solid 2px #929191;
	border-left: solid 2px #929191;
	img {
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
		height: 2.5rem;
		padding: 0 1rem;
	}
	img:hover {
		background: #D5D5D5;
	}
	${({theme}) => theme.media.tablet`
		img {
			height: 2rem;
			padding: 0 0.8rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		img {
			height: 2rem;
			padding: 0 0.8rem;
		}
	`}
`;

export const Clock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	width: 7rem;
	font-size: 1rem;
	font-family: 'Press Start 2P', cursive;
	${({theme}) => theme.media.tablet`
		width: 6rem;
		font-size: 0.8rem;
	`}
	${({theme}) => theme.media.desktop`
		width: 5.5rem;
		font-size: 0.8rem;
	`}
`;