import './styles.css'

interface Props {
    title: string;
}

function Separator(props: Props) {
    return (
        <div className="separator">
            <hr className="separator-line" />
            <span>{props.title}</span>
            <hr className="separator-line" />
        </div>
    )
}

export default Separator;