import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
            <div className='foterLeftSideContainer'>
                <Link to='/' className="" href="#"><span className='logoFooter'>FELIX</span></Link>
                <div className='copyrightCreditsContainer'>
                    <span>Copyright © 2023 - FELIX</span>
                    <div>
                        <span>Desarrollado y diseñado por Alejo Feas Matej</span>
                        <span><GitHubIcon/></span>
                    </div>
                </div>
                <div className='containerSocialMedia'>
                    <InstagramIcon fontSize='large' className='logoSocialMedia logoInstagram'/>
                    <FacebookIcon fontSize='large' className='logoSocialMedia logoFacebook'/>
                    <YouTubeIcon fontSize='large' className='logoSocialMedia logoYoutube'/>
                    <TwitterIcon fontSize='large' className='logoSocialMedia logoTwitter'/>
                </div>
            </div>
            <div className='footerRightSideContainer'>
                <span className='extraInfoTitle'>Extra information</span>
                <span>E-Mail: felix.movies@gmail.com</span>
                <span>Phone number: 0800-555-0154</span>
                <span>Address in New Jersey: Louis St 472</span>
                <span>Address in Washington: Crawley 392</span>
            </div>
        </footer>
    )
}