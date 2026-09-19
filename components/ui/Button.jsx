function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    type = "button",
    ...props
}) {
    const variants = {
        primary: 
            "bg-white text-slate-950 hover:bg-slate-200",

        secondary: 
            "border border-slate-700 text-white hover:bg-slate-800",

        ghost: 
            "text-slate-300 hover:bg-slate-800",
    };

    const sizes = {
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-3",
        lg: "px-6 py-3 text-lg",
    }

    return (
        <button
            type={type}
            className={[
                "inline-flex",
                "items-center",
                "justify-center",
                "rounded-lg",
                "font-medium",
                "transition-colors",
                "disabled:cursor-not-allowed",
                "disabled:opacity-50",

                variants[variant],
                sizes[size],

                className,
            ].join(" ")}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;