type BodyType = {
    title: string;
};

export const Body = ({ title }: BodyType): JSX.Element => {
    return (
        <ul className="flex list-disc w-fit pl-9">
            <li className="text-base">{title}</li>
        </ul>
    );
};
