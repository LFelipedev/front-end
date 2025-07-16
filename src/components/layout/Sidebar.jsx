function Sidebar(){
    return(
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-zinc-0 border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s"
                        className="w-32"
                        alt=""
                    />
                    
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;