export default function Card({
    title = "Easy Deployment",
    information = "Life is not easy, so let's be happy",
    icon = <p>↑</p>,
    iconColor = "#3B82F6"
}) {

    const iconStyles = {
        backgroundColor: iconColor
    }

    return (
        <div className="container-card">

            <div className="card-icon" style={iconStyles}>
                {icon}
            </div>

            <p className="card-title">
                {title}
            </p>

            <p className="card-information">
                {information}
            </p>

        </div>
    )
}