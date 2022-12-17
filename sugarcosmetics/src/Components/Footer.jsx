export const Footer = () => {
  
  
  return <div className="footer">
    <div className="footer-logo"><img src="data:image/png;base64,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" alt="" /></div>
    <div className="social-links">
      <div><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-64.png" alt="" /></div>
      <div><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-64.png" alt="" /></div>
      <div><img src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Video-Player-Youtube-64.png" alt="" /></div>
      <div><img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-64.png" alt="" /></div>
      <div><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-tumblr-64.png" alt="" /></div>
      <div><img src="https://cdn1.iconfinder.com/data/icons/neutro-essential/32/email-64.png" alt="" /></div>
      <div><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/33-pinterest-64.png" alt="" /></div>
    </div>
    <div className="footer-menu">
      <a href="#">Stores</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Returns</a>
      <a href="#">FAQs</a>
      <a href="#">About Us</a>
    </div>
    <div className="copyright">
      <p>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</p>
    </div>
  </div>
}