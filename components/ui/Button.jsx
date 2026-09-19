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
            "btn-primary",

        secondary: 
            "btn-secondary",

        ghost: 
            "btn-ghost",
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
                "btn-base",
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