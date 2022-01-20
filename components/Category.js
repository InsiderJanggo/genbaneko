import { forwardRef } from "react"


const Category = forwardRef((props) => (
    <div {...props}>
            {props.children}
    </div>
))

Category.displayName = 'Category'

export default Category