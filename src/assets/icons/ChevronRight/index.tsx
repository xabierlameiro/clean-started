type Props = {
    alt: string;
    className: string;
};

export const ChevronRight = ({ className, alt }: Props): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-label={alt}
            className={className}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    );
};
