import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import SplitWord from '../../util/SplitWord';
import SectionHeader from '../SectionHeader';
import useOnScreen from '../../hooks/useOnScreen';


function Footer() {
    const headRef = useRef(null);

    const [reveal, setReveal] = useState(false);

    const onScreen = useOnScreen(headRef);

    useEffect(() => {
        if (onScreen) { setReveal(true) }
    }, [onScreen])

    useEffect(() => {

        if (reveal) {
            const split = new SplitWord('#location-text', {
                type: 'lines',
                linesClass: 'lineChildren'
            })

            const splitParent = new SplitWord('#location-text', {
                type: 'lines',
                linesClass: 'lineParent'
            })

            gsap.fromTo(split.lines, { y: 200 }, {
                duration: 2,
                y: 0,
                stagger: 0.1,
                ease: 'power2'
            })
        }

    }, [reveal]);
    return (
        <section className="footer" data-scroll-section>
            <SectionHeader title="Made in" />
            <h1
                ref={headRef}
                className={reveal ? "location is-reveal" : "location "}
                id="location-text"
                data-scroll
            >
                Rio de Janeiro
      </h1>
        </section>
    )
}

export default Footer
