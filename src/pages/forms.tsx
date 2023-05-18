const Forms = () => {
    return (
        <div className="flex flex-col items-center justify-top min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Examples</h1>
            <input type="text" placeholder="Enter your name" className="mt-4" />
            <input type="password" placeholder="Enter your password" className="mt-4" />
            <input type="email" placeholder="Enter your email" className="mt-4" />
            <input type="number" placeholder="Enter your age" className="mt-4" />
            <input type="url" placeholder="Enter your website" className="mt-4" />
            <input type="date" placeholder="Enter your date" className="mt-4" />
            <input type="datetime-local" placeholder="Enter your datetime-local" className="mt-4" />
            <input type="month" placeholder="Enter your month" className="mt-4" />
            <input type="week" placeholder="Enter your week" className="mt-4" />
            <input type="time" placeholder="Enter your time" className="mt-4" />
            <input type="search" placeholder="Enter your search" className="mt-4" />
            <input type="tel" placeholder="Enter your tel" className="mt-4" />
            <input type="checkbox" placeholder="Enter your checkbox" className="mt-4" />
            <input type="radio" placeholder="Enter your radio" className="mt-4" />
            <select className="mt-4">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </select>
            <select multiple className="mt-4">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </select>
            <textarea placeholder="Enter your textarea" className="mt-4" />
        </div>
    );
};

export default Forms;
