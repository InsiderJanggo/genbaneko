import { WhatsappIcon, WhatsappShareButton } from "react-share";

export default function Whatsapp({ name, url, children }) {
    return(
        <WhatsappShareButton name={name} url={url}>
            <WhatsappIcon round={true} size={32} />
            {children}
        </WhatsappShareButton>
    )
}