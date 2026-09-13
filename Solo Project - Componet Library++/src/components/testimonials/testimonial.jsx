export default function Testimonial({
    image,
    quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.",
    name = "May Anderson",
    location = "Workcation, CTO"
}) {
    return (
        <section className="testimonial">

            <div className="testimonial-image-wrapper">
                <img
                    src={image}
                    alt={name}
                    className="testimonial-image"
                />
            </div>

            <div className="testimonial-content">

                <div className="testimonial-avatars">
                    <span>👩</span>
                    <span>👨</span>
                    <span className="testimonial-avatar-yellow">K</span>
                </div>

                <div className="testimonial-quote-mark">
                    “
                </div>

                <p className="testimonial-quote">
                    {quote}
                </p>

                <div className="testimonial-person">
                    <p className="testimonial-name">
                        {name}
                    </p>

                    <p className="testimonial-location">
                        {location}
                    </p>
                </div>

            </div>

        </section>
    )
}