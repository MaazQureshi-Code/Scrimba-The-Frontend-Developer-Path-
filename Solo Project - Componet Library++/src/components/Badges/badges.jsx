import clsx from "clsx"

const colors = {
    gray: {
        backgroundColor: "#F3F4F6",
        color: "#1F2937"
    },

    red: {
        backgroundColor: "#FEE2E2",
        color: "#991B1B"
    },

    yellow: { 
        backgroundColor: "#FEF3C7",
        color: "#92400E"
    },

    green: {
        backgroundColor: "#D1FAE5",
        color: "#065F46"
    },

    blue: {
        backgroundColor: "#DBEAFE",
        color: "#1E40AF"
    },

    indigo: {
        backgroundColor: "#E0E7FF",
        color: "#3730A3"
    },

    purple: {
        backgroundColor: "#EDE9FE",
        color: "#5B21B6"
    },

    pink: {
        backgroundColor: "#FCE7F3",
        color: "#9D174D"
    }
}
export default function Badges({ children = "Badges", color = "gray", shape = "square"}) {
    
    const styles = colors[color]

    const classes = clsx("badges",shape)

    return (
        <p style={styles} className={classes}>
            {children}
        </p>
    )
}