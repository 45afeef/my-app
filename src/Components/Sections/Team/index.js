import SectionTitle from '../Title';
import s from './team.module.css'

const Team = () => {
    return (
        <section className={s.section}>
            <SectionTitle>
                Our Fantastic <b>Team</b>
            </SectionTitle>
            <div className={`${s.row} ${s.movingborder}`}>
                {[1, 2, 2, 3, 43].map(i => {
                    return (
                        <div className={s.imageContainer}>
                            <img
                                src='https://images.unsplash.com/photo-1505118380757-91f5f5632de0'
                                alt='' />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Team;