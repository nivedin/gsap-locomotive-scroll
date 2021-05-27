import photos from '../../data'
function Featured() {
    const [firstImage, secondImage] = photos;
    return (
        <section className="featured-section" data-scroll-section>
            <div className="featured-row-layout">
                <h6>green</h6>
                <img src={firstImage} alt="featured-img" data-scroll />
            </div>
            <div className='featured-column-layout'>
                <h6>lily</h6>
                <img src={secondImage} alt="featured-img" data-scroll />
            </div>
        </section>
    )
}

export default Featured
