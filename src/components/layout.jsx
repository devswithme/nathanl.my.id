import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className='bg-neutral-100'>
            <main className='max-w-5xl pt-36 pb-6 px-6 mx-auto space-y-64'>
                <Outlet />
                <p>2025 &copy; Edition</p>
            </main>
        </div>
    )
}

export default Layout