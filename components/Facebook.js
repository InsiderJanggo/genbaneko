import { FacebookShareButton, FacebookIcon } from "react-share";

export default function Facebook({ name, url, children }) {
    return(
        <FacebookShareButton name={name} url={url}>
            <FacebookIcon round={true} size={32} />
            {children}
        </FacebookShareButton>
    )
}