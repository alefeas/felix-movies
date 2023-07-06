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
                    <div className='creditsContainer'>
                        <span>Developed and designed by Alejo Feas Matej</span>
                        <Link target='_blank' to='https://github.com/alefeas'><GitHubIcon className='gitHubIcon'/></Link>
                    </div>
                </div>
                <div className='containerSocialMedia'>
                    <Link target='_blank' to='https://instagram.com'><InstagramIcon fontSize='large' className='logoSocialMedia logoInstagram'/></Link>
                    <Link target='_blank' to='https://facebook.com'><FacebookIcon fontSize='large' className='logoSocialMedia logoFacebook'/></Link>
                    <Link target='_blank' to='https://youtube.com'><YouTubeIcon fontSize='large' className='logoSocialMedia logoYoutube'/></Link>
                    <Link target='_blank' to='https://twitter.com'><TwitterIcon fontSize='large' className='logoSocialMedia logoTwitter'/></Link>
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