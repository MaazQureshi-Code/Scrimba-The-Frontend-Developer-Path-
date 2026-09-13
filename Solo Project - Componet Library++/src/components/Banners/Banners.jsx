import clsx from "clsx"

const stat = {
    success: "Congratulations",
    warning: "Attention",
    error: "There is a problem with your application",
    neutral: "Update available"
}

export default function Banners({
    children,
    status = "neutral"
}) {
    const classes = clsx("banner-container", status)

    return (
        <div className={classes}>
            <h3 className="title-banner">
                {stat[status]}
            </h3>

            {children && (
                <p className="banner-information">
                    {children}
                </p>
            )}
        </div>
    )
}