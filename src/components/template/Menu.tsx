

export interface MenuProps {
    className?:string
};

export default function Menu(props:MenuProps) {
    return (
        <aside className={`${ props.className ?? '' }`}>
            <nav>Menu</nav>
        </aside>
    )
}