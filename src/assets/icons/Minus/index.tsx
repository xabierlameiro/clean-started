type Props = {
    alt: string;
    className: string;
};

export const Minus = ({ className, alt }: Props): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-label={alt}
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
            />
        </svg>
    );
};
