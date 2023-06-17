import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
    return (
        <footer>
            <span className='logoFooter'>FELIX</span>
            <div className='copyrightCreditsContainer'>
                <span>Copyright © 2023 - FELIX</span>
                <span>Desarrollado y diseñado por Alejo Feas Matej </span>
            </div>
            <div className='containerSocialMedia'>
                <InstagramIcon fontSize='large' className='logoSocialMedia logoInstagram'/>
                <FacebookIcon fontSize='large' className='logoSocialMedia logoFacebook'/>
                <YouTubeIcon fontSize='large' className='logoSocialMedia logoYoutube'/>
                <TwitterIcon fontSize='large' className='logoSocialMedia logoTwitter'/>
            </div>
        </footer>
    )
}