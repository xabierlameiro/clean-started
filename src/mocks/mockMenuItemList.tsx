export type MenuItem = {
    icon: string | React.ReactElement;
    label: string;
    path: string;
};

export const menuList: MenuItem[] = [
    {
        icon: (
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
        ),
        label: 'Plan',
        path: '/plan',
    },
    {
        icon: (
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
        ),
        label: 'Logs',
        path: '/logs',
    },
];
