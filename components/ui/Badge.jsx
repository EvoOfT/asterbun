function Badge({ children }) {
    return (
        <span
            className="
                inline-flex
                rounded-full
                bg-slate-800
                px-3
                py-1
                text-xs
                font-medium
                text-slate-300
            "
        >
            {children}
        </span>
    );
}

export default Badge;