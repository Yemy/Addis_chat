import React from 'react'
import './Widgets.css'
// import messi from './images/messi.jpg'
// import auba from './images/auba.jpg'

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTrue-Ethiopian-2142564636025621%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                // src=""
                title="True Ethiopian facebook page"
                width="340" 
                height="100%"
                style={{border:"none", overflow:"hidden"}} 
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
        </div>
    )
}

export default Widgets
