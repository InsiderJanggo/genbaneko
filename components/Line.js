import { LineShareButton, LineIcon } from "react-share";

export default function Line({ name, url, children }) {
    return(
        <LineShareButton name={name} url={url}>
            <LineIcon round={true} size={32} />
            {children}
        </LineShareButton>
    )
}