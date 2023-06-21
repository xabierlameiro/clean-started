type Props = {
    alt: string;
    className: string;
};

export const Plus = ({ className, alt }: Props): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            className={className}
            aria-label={alt}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    );
};
