import dynamic from "next/dynamic";
import React from "react"

const noSSR = props => <>{props.children}</>

export default dynamic(() => Promise.resolve(noSSR), {
    ssr: false
})
