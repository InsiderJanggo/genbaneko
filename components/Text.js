import { forwardRef } from "react"
import PropTypes from 'prop-types';
import cls from "@/lib/cls";


const classes = {
    size: {
        small: 'px-2 py-1 text-sm'
    }
}

const Text = forwardRef(({ children, className, size }, ref) => (
    <span 
    ref={ref} 
    className={
        cls(`
            ${classes.size[size]}
        `)
    }>
            {children}
    </span>
))

Text.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal', 'large'])
}

Text.displayName = 'Text'

export default Text;