
const Header = () => {
    return (
        <div className="max-w-7xl mx-auto border flex justify-between p-2">
            <div>
                <h3 className="text-2xl text-violet-500">Emran</h3>
            </div>
            <div>
                <button className="border rounded-2xl border-violet-600 text-violet-600 px-3 py-1 hover:text-white hover:bg-violet-600 ">Say Hello</button>
            </div>
        </div>
    );
};

export default Header;