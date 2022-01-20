import { 
    TwitterShareButton,
    TwitterIcon
} from "react-share";

const BASE_URL = `https://twitter.com/intent/tweet?url=`

export default function TwitterButton({ title, children, url }) {
    return(
        <TwitterShareButton title={title} url={url}>
            <TwitterIcon round={true} size={32} />
            {children}
        </TwitterShareButton>
    )
}