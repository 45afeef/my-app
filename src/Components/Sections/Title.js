import s from './title.module.css'

const SectionTitle = ({ children, color = "black" }) => {
    return (
        <h2
            className={s.sectionTitle}
            style={{
                '--color': color
            }}
        >
            {children}
        </h2>
    )
}

export default SectionTitle;

