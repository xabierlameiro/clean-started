import { useAuthContext } from '@/src/context/auth/AuthContext';

export const DropdownMenu = () => {
    const { logout } = useAuthContext();

    return (
        <div className="bg-white border-2 absolute right-5 top-12 flex flex-col items-start rounded-lg p-4 gap-2 w-60">
            <div>
                <button onClick={logout} className="text-sm hover:font-medium cursor-pointer">
                    Logout
                </button>
            </div>
        </div>
    );
};
