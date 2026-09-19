function Card({
    children,
    className = "",  
}) {
    return (
        <div
            className={[
                "rounded-2xl",
                "border",
                "border-slate-800",
                "bg-slate-900/60",
                className,
            ].join(" ")}
        >
            {children}
        </div>
    );
}

export default Card;