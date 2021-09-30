import React from 'react';
import styles from '../sass/components/footer.module.scss';
import translate from '../i18n/translate';

export default function Footer(props) {
    
    return (
      <footer className={styles.siteFooter}>
      <nav className={styles.footerNav}>
        <nav className={styles.footerColumn1}>
          <nav className={styles.footerHeader}>{translate("Engineering Students Society")}</nav>
          <nav className={styles.footerAddress}>
            161 Louis-Pasteur Private A05<br></br>
            Ottawa, ON<br></br>
            K1N 6N5<br></br>
            Email: communications@uottawaess.ca
          </nav>
        </nav>
      </nav>
      <nav className={styles.footerNav2}>
          <div>
            <nav className={styles.footerHeader}>{translate("Find us on Social Media")}</nav>
            <div className={styles.social}>
              <a href="https://www.facebook.com/uottawaessaeg" target="_blank" rel="noopener noreferrer">
                <img className={styles.socialIcon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png" alt="Facebook Icon" width="28px" />
                <span>ESS / AÉG</span>
              </a>
            </div>
            <div className={styles.social}>
              <a  href="https://www.instagram.com/uottawa_essaeg/" target="_blank" rel="noopener noreferrer">
                <img className={styles.socialIcon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="Instagram Icon" width="28px" />
                <span>@uottawa_essaeg</span>
              </a>
            </div>
          </div>
      </nav>
    </footer>
    );
}
