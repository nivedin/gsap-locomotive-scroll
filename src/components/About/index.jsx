import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import SplitWord from '../../util/SplitWord';
import SectionHeader from '../SectionHeader';
import useOnScreen from '../../hooks/useOnScreen';

function About() {
    const paraRef = useRef(null);

    const [reveal, setReveal] = useState(false);

    const onScreen = useOnScreen(paraRef);

    useEffect(() => {
        if (onScreen) { setReveal(true) }
    }, [onScreen])

    useEffect(() => {

        if (reveal) {
            const split = new SplitWord('#headline', {
                type: 'lines',

            })

            gsap.to(split.lines, {
                duration: 2,
                y: -20,
                opacity: 1,
                stagger: 0.1,
                ease: 'power2'
            })
        }

    }, [reveal]);
    return (
        <section className="about-section" data-scroll-section>
            <SectionHeader title="about" />
            <p ref={paraRef} id="headline" className={reveal ? "is-reveal" : null} data-scroll>
                Flirty Flowers is a blog about flowers and the floral designers who make
                them into art. Creativity and the art of ‘making’ require dialogue. The
                full purpose of the Flirty Flowers blog is to encourage and inspire. We
                value art, we value insight, and we value opinion.
      </p>
        </section>
    )
}

export default About
