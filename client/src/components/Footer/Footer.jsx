import React from 'react';
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="left-col">
				<div className="logo">
					<img src="/assets/logo/logo_white.webp" alt="" />
				</div>
				{/* <div className="name">Rebeca '24</div> */}
				{/* <div className="logos">
					<div className="item">
						<img src="/assets/EES_edited.webp" alt="" />
					</div>
					<div className="divider"></div>
					<div className="item">
						<img src="/assets/iiest-logo-white.webp" alt="" />
					</div>
				</div> */}
				<div className="address">
					<a href="https://www.google.com/maps/dir/22.6390704,88.3426543/Indian+Institute+of+Engineering+Science+and+Technology,+Shibpur+(IIEST),+Indian+Institute+of+Engineering+Science+and+Technology,+Botanical+Garden+Area,+Howrah,+West+Bengal+711103/@22.5970861,88.2890036,13z/data=!3m1!4b1!4m17!1m7!3m6!1s0x3a0279c91a8d2d49:0xc6ee508c74cf031d!2sIndian+Institute+of+Engineering+Science+and+Technology,+Shibpur+(IIEST)!8m2!3d22.5551124!4d88.3061642!16zL20vMDRkcGRs!4m8!1m1!4e1!1m5!1m1!1s0x3a0279c91a8d2d49:0xc6ee508c74cf031d!2m2!1d88.3061642!2d22.5551124?entry=ttu">
						IIEST SHIBPUR, PO: Botanic Garden, Botanical Garden
						Road, IIEST Shibpur, Howrah-711103, West Bengal
					</a>
				</div>
				<div className="address">
					© rebeca.in 2024. All right reserved
				</div>
				<div className="address">
					Made with 💙 by{" "}
					<a href="https://dugarrishab.github.io/RishabDugar/">
						Rishab Dugar
					</a>
					,{" "}
					<a href="https://abhijit-karmakar.vercel.app/">
						Abhijit Karmakar
					</a>
					,{" "}
					<a href="https://soumyajit-dev.vercel.app/">
						Soumyajit Karmakar
					</a>{" "}
					and <a href="">Utsab Kundu</a>
				</div>
			</div>
			<div className="right-col">
				<div className="title">Contacts</div>
				<div className="contacts">
					<div className="contact">
						<div className="name">Rebeca</div>
						<div className="mail">
							<a href="mailto: 83rebeca2k24@gmail.com">
								83rebeca2k24@gmail.com
							</a>
						</div>
					</div>
					<div className="contact">
						<div className="name">Sabbani Vihan</div>

						<div className="ph-num">ph: +91 79935 95464</div>
					</div>
					<div className="contact">
						<div className="name">Vasu Krishna Khemka</div>

						<div className="ph-num">ph: +91 78088 14413</div>
					</div>
					<div className="contact">
						<div className="name"> Subham Dutta </div>

						<div className="ph-num">ph: +91 80840 15396</div>
					</div>
					<div className="contact">
						<div className="name"> Sayantan Biswas </div>

						<div className="ph-num">ph: +91 97631 30860</div>
					</div>
					<div className="contact">
						<div className="name"> Pururav Singh Gautam </div>

						<div className="ph-num">ph: +91 86989 61728</div>
					</div>
				</div>
			</div>

			<div className="right-col-2">
				<div className="title">Visit us Virtually</div>
				<div className="socials">
					<div className="item">
						<div className="logo">
							<i className="fa-brands fa-facebook-f"></i>
						</div>
						<div className="link">
							<a href="https://www.facebook.com/rebeca.iiests">
								/rebeca.iiests
							</a>
						</div>
					</div>
					<div className="item">
						<div className="logo">
							<i className="fa-brands fa-instagram"></i>
						</div>
						<a href="https://www.instagram.com/rebeca_iiests">
							<div className="link">/rebeca_iiests</div>
						</a>
					</div>

					<div className="item">
						<div className="logo">
							<i className="fa-brands fa-youtube"></i>
						</div>
						<div className="link">
							<a href="https://www.youtube.com/@rebecaiiests7685">
								/@rebecaiiests7685
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default Footer;