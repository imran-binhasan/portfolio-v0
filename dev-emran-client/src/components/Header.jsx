
const Header = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-between p-3">
            <div>
                <h3 className="text-3xl text-violet-500">Emran</h3>
            </div>
            <div>
                <button className="border rounded-2xl border-violet-600 text-violet-600 px-4 py-1.5 hover:text-white hover:bg-violet-600 ">Say Hello</button>
            </div>
        </div>
    );
};

export default Header;