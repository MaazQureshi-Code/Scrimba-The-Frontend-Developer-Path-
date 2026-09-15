export default function Testimonial({
    image,
    quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name = "May Anderson",
    location = "Workcation, CTO"
}) {

    // VERSION WITH IMAGE
    if (image) {
        return (
            <section className="testimonial with-image">

                <div className="testimonial-image-wrapper">
                    <img
                        src={image}
                        alt={name}
                        className="testimonial-image"
                    />
                </div>

                <div className="testimonial-content">

                    <div className="testimonial-avatars">
                        Bob
                    </div>

                    <div className="testimonial-quote-mark">“</div>

                    <p className="testimonial-quote">
                        {quote}
                    </p>

                    <div className="testimonial-person">
                        <p className="testimonial-name">{name}</p>
                        <p className="testimonial-location">{location}</p>
                    </div>

                </div>
            </section>
        )
    }


    // VERSION WITHOUT IMAGE
    return (
        <section className="testimonial-no-image">

            <div className="testimonial-logo">
                <span>⚖</span>
                <strong>Workcation</strong>
            </div>

            <p className="testimonial-no-image-quote">
                “{quote}”
            </p>

            <div className="testimonial-no-image-person">
                <span className="testimonial-no-image-name">
                    {name}
                </span>

                <span className="testimonial-divider">/</span>

                <span className="testimonial-no-image-location">
                    {location}
                </span>
            </div>

        </section>
    )
}