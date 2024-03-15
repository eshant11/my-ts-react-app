import React, { useState } from 'react';
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';

function ReactShare() {
    const [showShareOption, setShowShareOption] = useState(false);
    const shareUrl = 'https://facebook.com'; // Your share URL
    const whatsAppUrl = 'https://web.whatsapp.com/'; // Your share URL

    const handleLinkClick = () => {
        setShowShareOption(true);
    };

    return (
        <div>
            {/* Link to trigger sharing options */}
            <a href="#" onClick={handleLinkClick}>Share on Facebook</a>

            {/* Facebook share button */}
            {showShareOption &&
                (<>  <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                    <WhatsappShareButton url={whatsAppUrl}>
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                </>)
            }
        </div>
    );
}

export default ReactShare;
