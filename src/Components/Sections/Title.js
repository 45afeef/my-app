import s from './title.module.css'

const SectionTitle = ({
    children,
    color = "black",
    underLineSize = "normal"
}) => {

    // Determine the necessary width and margin based on size for underline
    let underLineWidth;
    let underLineMargin;
    switch (underLineSize) {
        case "small":
            underLineWidth = "10%";
            underLineMargin = "0px";
            break;
        case "large":
            underLineWidth = "50%";
            underLineMargin = "80px";
            break;
        case "normal":
        default:
            underLineWidth = "25%";
            underLineMargin = "20px";
            break;
    }

    return (
        <h4
            className={s.sectionTitle}
            style={{
                '--color': color,
                '--underLineWidth': underLineWidth,
                '--underLineMargin': underLineMargin,
            }}
        >
            {children}
        </h4>
    )
}

export default SectionTitle;

